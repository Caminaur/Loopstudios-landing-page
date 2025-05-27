import React from "react";

function Card(props) {
  const { image, title1, title2, imageDesktop } = props;
  return (
    <div className="w-full flex justify-center items-center flex-col h-36 md:h-100 ">
      <div className="relative group cursor-pointer w-full h-full overflow-hidden">
        <picture>
          <source media="(min-width: 768px)" srcSet={imageDesktop} />
          <img
            className="h-full w-full object-cover object-top"
            src={image}
            alt=""
          />
        </picture>
        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-0 transition-opacity duration-300"></div>
        <div className=" absolute top-1/2 transform -translate-y-1/2 px-6 text-3xl uppercase text-white font-light">
          <p className="drop-shadow-[0_1px_2px_rgba(0,0,0,1)]">{title1}</p>
          <p className="drop-shadow-[0_1px_2px_rgba(0,0,0,1)]">{title2}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
