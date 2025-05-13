import mobileInteractiveIMG from "../../assets/images/mobile/image-interactive.jpg";
import desktopInteractiveIMG from "../../assets/images/mobile/image-interactive.jpg";

function Section_2() {
  return (
    <div className="h-screen flex flex-col items-center px-8 py-12">
      <img className="" src={mobileInteractiveIMG} alt="" />
      <p className="uppercase text-4xl md:text-4xl lg:text-5xl p-4 text-center font-light mt-8">
        The leader in interactive VR
      </p>
      <p className="font-medium text-center text-gray-400 text-lg md:text-xl lg:text-2xl px-4 mt-4">
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        award-winning creations have transformed businesses through digital
        experiences that bind to their brand.
      </p>
    </div>
  );
}

export default Section_2;
