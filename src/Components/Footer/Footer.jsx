import React from "react";
import logoIMG from "../../assets/images/logo.svg";
import facebookIcon from "../../assets/images/icon-facebook.svg";
import instagramIcon from "../../assets/images/icon-instagram.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import pinterestIcon from "../../assets/images/icon-pinterest.svg";

function Footer() {
  const menu = [
    { name: "About", link: "#" },
    { name: "Careers", link: "#" },
    { name: "Events", link: "#" },
    { name: "Products", link: "#" },
    { name: "Support", link: "#" },
  ];
  const socials = [
    { name: "Facebook", icon: facebookIcon, link: "#" },
    { name: "Instagram", icon: instagramIcon, link: "#" },
    { name: "Twitter", icon: twitterIcon, link: "#" },
    { name: "Pinterest", icon: pinterestIcon, link: "#" },
  ];

  return (
    <div className="w-full bg-primary-black py-16">
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:max-w-3/4 lg:mx-auto">
        <div className="flex flex-col items-center justify-center gap-10 text-primary-white lg:items-start">
          <img src={logoIMG} alt="" />
          <ul className="flex flex-col gap-5 lg:flex-row">
            {menu.map((item, key) => {
              return (
                <li key={key}>
                  <a
                    className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-2 after:h-[2px] after:bg-white after:opacity-0 after:transition-all after:duration-200 hover:after:opacity-100 hover:after:w-8"
                    href={item.link}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 py-8 lg:justify-baseline lg:items-end lg:gap-10">
          <div className="flex items-center justify-center">
            {socials.map((social, key) => {
              return (
                <a
                  key={key}
                  href={social.link}
                  className="relative mx-2 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-2 after:h-[2px] after:bg-white after:opacity-0 after:transition-all after:duration-200 hover:after:opacity-100 hover:after:w-full"
                >
                  <img src={social.icon} alt={social.name} />
                </a>
              );
            })}
          </div>
          <div>
            <p className="text-primary-grey-200 opacity-50 text-sm">
              © <span className="tracking-widest">2021</span> Loopstudios. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
