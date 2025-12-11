import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cheekyhenparty.com";

  // Path to the app directory
  const appDir = path.join(process.cwd(), "app");

  // Recursively read folders to detect page routes
  function getRoutes(dirPath: string, routePrefix = ""): string[] {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    let routes: string[] = [];

    for (const entry of entries) {
      // Skip special folders
      if (entry.name.startsWith("_") || entry.name === "api") continue;

      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        // Look for a page.tsx/page.jsx inside the folder
        const hasPage =
          fs.existsSync(path.join(fullPath, "page.tsx")) ||
          fs.existsSync(path.join(fullPath, "page.jsx"));

        if (hasPage) {
          routes.push(`${routePrefix}/${entry.name}`);
        }

        // Continue deep scanning
        routes = routes.concat(
          getRoutes(fullPath, `${routePrefix}/${entry.name}`)
        );
      }
    }

    return routes;
  }

  // Get all routes
  const detectedRoutes = getRoutes(appDir).map((route) => ({
    url: baseUrl + route,
    lastModified: new Date().toISOString(),
  }));

  // Add homepage manually
  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
    },
    ...detectedRoutes,
  ];
}
