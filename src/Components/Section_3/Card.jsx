import React from "react";

function Card(props) {
  const { image, title1, title2, imageDesktop } = props;
  return (
    <div className="w-full flex justify-center items-center flex-col h-36 md:h-100 lg:h-110">
      <div className="relative group cursor-pointer w-full h-full overflow-hidden">
        <picture>
          <source media="(min-width: 768px)" srcSet={imageDesktop} />
          <img
            className="h-full w-full object-cover object-top"
            src={image}
            alt=""
          />
        </picture>
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
        <div className=" absolute top-1/2 transform -translate-y-1/2 left-4 text-3xl uppercase text-white font-light group-hover:text-black md:top-10/12 md:left-8 lg:font-light">
          <p>{title1}</p>
          <p>{title2}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
