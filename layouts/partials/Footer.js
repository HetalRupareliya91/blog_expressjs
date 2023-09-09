import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import ImageFallback from "@layouts/components/ImageFallback";
import Logo from "@layouts/components/Logo";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  return (
    <footer className="section relative mt-12 pt-[70px] pb-[50px] sm:px-16">
      <ImageFallback
        className="-z-[1] object-cover object-left  md:object-top"
        src="/images/footer-bg-shape.svg"
        alt="footer background"
        fill={true}
      />
      <div className="container text-left">
        <div className="row items-start">
          <div className="mb-12 lg:mb-0 lg:col-4">
            <div className="mb-6 inline-flex">
              <Logo valfor="logo_vertical" />
            </div>
            {markdownify(footer_content, "p", "max-w-[638px] mx-auto")}

            {/* footer menu */}
          </div>
          <div className="mb-12 lg:mb-0 lg:col-1">
          </div>
          <div className="mb-12 lg:mb-0 lg:col-2">
            <div >Website</div>
            <ul className="mb-12 mt-6 flex-wrap">
              {menu.footer.map((menu) => (
                <li key={menu.name} className="py-2">
                  <Link
                    href={menu.url}
                    className="text-dark hover:text-primary dark:text-darkmode-light"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-12 lg:mb-0 lg:col-2">
            <div >Resources</div>
            <ul className="mb-12 mt-6 flex-wrap">
              <li className="py-2">
                <Link href="#" className="text-dark hover:text-primary dark:text-darkmode-light">
                  Knowledge base
                </Link>
              </li>
              <li className="py-2">
                <Link href="#" className="text-dark hover:text-primary dark:text-darkmode-light">
                  Product updates
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-12 lg:mb-0 lg:col-1">
            <div >Access</div>
            <ul className="mb-12 mt-6 flex-wrap">
              <li className="py-2">
                <Link href="#" className="text-dark hover:text-primary dark:text-darkmode-light">
                  Login
                </Link>
              </li>
              <li className="py-2">
                <Link href="#" className="text-dark hover:text-primary dark:text-darkmode-light">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-12 lg:mb-0 lg:col-2">
            <div >Legal</div>
            <ul className="mb-12 mt-6 flex-wrap">
              <li className="py-2">
                <Link href="#" className="text-dark hover:text-primary dark:text-darkmode-light">
                  Terms & conditions
                </Link>
              </li>
              <li className="py-2">
                <Link href="#" className="text-dark hover:text-primary dark:text-darkmode-light">
                  Privacy & policy
                </Link>
              </li>
            </ul>
          </div>
        </div>      
      </div>
        {/* copyright */}
        {markdownify(copyright, "p", "text-center")}
    </footer>
  );
};

export default Footer;
