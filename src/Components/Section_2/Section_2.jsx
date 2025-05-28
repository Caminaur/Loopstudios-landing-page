import mobileInteractiveIMG from "../../assets/images/mobile/image-interactive.jpg";
import desktopInteractiveIMG from "../../assets/images/mobile/image-interactive.jpg";

function Section_2() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center px-8 py-12 md:px-24 w-full h-screen md:h-screen lg:max-w-3/4">
      <img
        className="md:absolute left-10 w-230 max-w-[80%]"
        src={mobileInteractiveIMG}
        alt=""
      />

      <div className="bg-white flex flex-col justify-center items-center md:h-1/2 md:absolute md:bottom-0 py-6 px-0 gap-6 w-full md:w-150 max-w-full md:right-0 lg:right-24 xl:w-1/2 xl:h-120">
        <p className="uppercase text-4xl md:text-4xl lg:text-5xl text-center md:text-left font-light mb-6 mx-10 w-110 lg:w-120">
          The leader in interactive VR
        </p>
        <p className="font-medium text-center md:text-left text-gray-400 text-lg md:text-lg w-110 max-w-full lg:w-120">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
}

export default Section_2;
