export default function Footer() {
    return (
      <>
        <footer>

          <div className="min-h-[200px] px-50 py-15 text-left bg-[#FCCFC5] text-[#82310e] relative">
              <div className="grid grid-cols-3 gap-15">
                <div>
                  <h2 className="text-4xl pb-8">Contact Us</h2>
                  <p className="pb-3">Email: cheekyhenparty@gmail.com</p>
                  <a href="https://wa.me/85257856409" target="_blank"><p>WhatsApp: 5785-6409</p></a>
                  <p className="pt-6 pb-2">Follow Us on Socials</p>
                  <a href="https://www.instagram.com/cheekyhenpartyhk?igsh=MWx3b2N2Y3Vqc2pvcg%3D%3D&utm_source=qr" target="_blank"><i className="fa-brands fa-instagram fa-2x pr-4 cursor-pointer hover:opacity-70"></i></a>
                  <a href="https://www.facebook.com/share/1CpLKiRZUY/?mibextid=wwXIfr" target="_blank"><i className="fa-brands fa-square-facebook fa-2x cursor-pointer hover:opacity-70"></i></a>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg pb-3">Company</h3>
                  <ul className="space-y-2">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    {/* <li><a href="/packages/classic-life-drawing" className="hover:underline">Classic Life Drawing</a></li>
                    <li><a href="/packages/cheeky-butler" className="hover:underline">Cheeky Butler</a></li>
                    <li><a href="/packages/nude-paint-sip" className="hover:underline">Nude Paint & Sip</a></li> */}
                    <li><a href="/gallery" className="hover:underline">Gallery</a></li>
                    <li><a href="/faq" className="hover:underline">FAQ</a></li>
                    <li><a href="/booking" className="hover:underline">Booking Form</a></li>
                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg pb-3">Services</h3>
                  <ul className="space-y-2">
                    <li><a href="/packages/classic-life-drawing" className="hover:underline">Classic Life Drawing</a></li>
                    <li><a href="/packages/cheeky-butler" className="hover:underline">Cheeky Butler</a></li>
                    <li><a href="/packages/nude-paint-sip" className="hover:underline">Nude Paint & Sip</a></li>
                  </ul>
                </div>
              </div>
              <img
                src="/images/banana.png"
                className="h-70 absolute bottom-0 left-1/2 transform -translate-x-1/2"
              />
            </div>

            <div className="bg-[#FFDED6] text-center py-3 text-xs">
              <p>© {new Date().getFullYear()} Cheeky Hen Party</p>
            </div>

        </footer>
      </>
    );
  }
  