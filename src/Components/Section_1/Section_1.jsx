import Navbar from "../Navbar/Navbar";
import "./Section_1.css";

function Section_1() {
  return (
    <div
      className={`flex flex-col justify-center min-h-screen px-6 pt-12 w-full bg-cover bg-no-repeat bg-center overflow-hidden items-center hero-background`}
    >
      <Navbar />
      <div className="flex flex-col justify-center align-baseline flex-1 w-full [@media(min-width:1200px)]:w-280">
        <div className="border-4 border-zinc-50 -translate-y-24 md:max-w-[400px]">
          <p className="text-white text-4xl md:text-4xl lg:text-5xl py-5 px-6 w-full">
            IMMERSIVE EXPERIENCES THAT DELIVER
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section_1;
