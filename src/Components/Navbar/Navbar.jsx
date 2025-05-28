import logoIMG from "../../assets/images/logo.svg";
import mobileMenuIMG from "../../assets/images/icon-hamburger.svg";
import closeMenuIMG from "../../assets/images/icon-close.svg";
import { useState } from "react";
import { useEffect } from "react";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const menu = [
    { name: "About", link: "#" },
    { name: "Careers", link: "#" },
    { name: "Events", link: "#" },
    { name: "Products", link: "#" },
    { name: "Support", link: "#" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNavbarOpen(false);
    });
  }, []);

  return !navbarOpen ? (
    <header className=" flex justify-between w-full lg:w-280 lg:max-w-3/4">
      <img src={logoIMG} alt="Logo" />
      <img
        src={mobileMenuIMG}
        onClick={() => setNavbarOpen(true)}
        className="md:hidden h-6 "
        alt="Abrir menú"
      />

      <ul className="hidden md:flex gap-8 items-center">
        {menu.map((item) => (
          <li
            key={item.name}
            className="text-white text-lg md:text-xl cursor-pointer"
          >
            <a
              href={item.link}
              className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-2 after:h-[2px] after:bg-white after:opacity-0 after:transition-all after:duration-200 hover:after:opacity-100 hover:after:w-8"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  ) : (
    <div className="fixed top-0 h-full w-full z-10 bg-black flex flex-col items-center gap-8 md:hidden pt-12 px-6">
      <div className="w-full flex justify-around">
        <img src={logoIMG} alt="Logo" />
        <img
          src={closeMenuIMG}
          onClick={() => setNavbarOpen(false)}
          className="md:hidden h-6 ml-auto"
          alt="Cerrar menú"
        />
      </div>
      <div className="w-full h-full flex items-center">
        <div className="mb-40">
          <ul className="h-full w-full flex flex-col items-baseline gap-4">
            {menu.map((item) => (
              <li
                key={item.name}
                className="text-white text-lg md:text-xl cursor-pointer "
              >
                <a
                  href={item.link}
                  className="text-3xl uppercase font-light opacity-80"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
