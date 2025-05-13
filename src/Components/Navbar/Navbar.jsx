import logoIMG from "../../assets/images/logo.svg";
import mobileMenuIMG from "../../assets/images/icon-hamburger.svg";

function Navbar() {
  const menu = [
    { name: "About", link: "#" },
    { name: "Careers", link: "#" },
    { name: "Events", link: "#" },
    { name: "Products", link: "#" },
    { name: "Support", link: "#" },
  ];
  return (
    <header className="flex justify-between w-full lg:w-280">
      <img src={logoIMG} alt="" />
      <img src={mobileMenuIMG} className="h-6 md:hidden" alt="" />
      <ul className="hidden md:flex gap-8 items-center">
        {menu.map((item) => {
          return (
            <li
              key={item.name}
              className="text-white text-lg md:text-xl cursor-pointer"
            >
              <a
                src={item.link}
                className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-1/2 after:-bottom-2 after:w-2 after:h-[2px] after:bg-white after:opacity-0 after:transition-all after:duration-200 hover:after:opacity-100 hover:after:w-8"
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default Navbar;
