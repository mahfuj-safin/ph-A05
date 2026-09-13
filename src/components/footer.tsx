import logo from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      {/* main footer */}
      <div className="mx-auto grid grid-cols-5 gap-12 px-10 py-14 container">
        <div className="col-span-2">
          <img src={logo} alt="Dev Stack" className="h-7 w-auto" />

          <p className="mt-4 max-w-xs text-xs leading-5 text-gray-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          {/* Social media */}
          <div className="mt-5 flex items-center gap-5 text-xs text-gray-500">
            <a href="" className="hover:text-gray-900 font-bold">
              GitHub
            </a>

            <a href="" className="hover:text-gray-900 font-bold">
              Twitter
            </a>

            <a href="" className="hover:text-gray-900 font-bold">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-xs font-semibold uppercase text-gray-900">
            Product
          </h3>

          <ul className="mt-4 space-y-3 text-xs text-gray-500">
            <li>
              <a href="" className="hover:text-gray-900">
                Home
              </a>
            </li>

            <li>
              <a href="" className="hover:text-gray-900">
                Technologies
              </a>
            </li>

            <li>
              <a href="" className="hover:text-gray-900">
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xs font-semibold uppercase text-gray-900">
            Company
          </h3>

          <ul className="mt-4 space-y-3 text-xs text-gray-500">
            <li>
              <a href="" className="hover:text-gray-900">
                About
              </a>
            </li>

            <li>
              <a href="" className="hover:text-gray-900">
                Contact
              </a>
            </li>

            <li>
              <a href="" className="hover:text-gray-900">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xs font-semibold uppercase text-gray-900">
            Legal
          </h3>

          <ul className="mt-4 space-y-3 text-xs text-gray-500">
            <li>
              <a href="" className="hover:text-gray-900">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="" className="hover:text-gray-900">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* footer bottom bar */}
      <div className="border-t border-gray-100">
        <div className=" container mx-auto flex items-center justify-between px-10 py-5 text-xs text-gray-400 ">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a href="" className="hover:text-gray-700">
              Privacy
            </a>

            <a href="" className="hover:text-gray-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
