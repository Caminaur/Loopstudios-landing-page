import React from "react";
import Card from "./Card";
import { images } from "../../assets/imageData";

function Section_3() {
  return (
    <div className="w-full p-4 flex flex-col items-center gap-10 pb-28 md:flex-row md:flex-wrap md:py-2 lg:w-max-[1440px]">
      <h2 className="uppercase text-4xl font-light text-center md:order-1 md:mr-auto">
        Our Creations
      </h2>
      <div className="order-3 md:order-2 group">
        <a
          className="px-12 py-2 border-2 tracking-[.25rem] border-primary-grey-200 uppercase font-semibold rounded-sm transition-colors duration-200 group-hover:border-neutral-400"
          href="#"
        >
          See all
        </a>
      </div>
      <div className="p-4 pb-30 order-2 md:order-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full lg:p-0 lg:grid-cols-[repeat(auto-fill,minmax(230px,1fr))] lg:max-w-[1440px]">
        {images.map((image, index) => {
          return (
            <Card
              image={image.mobile}
              imageDesktop={image.desktop}
              title1={image.title1}
              title2={image.title2}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Section_3;
