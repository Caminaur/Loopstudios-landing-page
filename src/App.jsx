import Section_1 from "./Components/Section_1/Section_1";
import Section_2 from "./Components/Section_2/Section_2";
import Section_3 from "./Components/Section_3/Section_3";
import "./App.css";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Section_1 />
      <div className="flex flex-col items-center justify-center lg:w-3/4 w-screen lg:mx-auto">
        <Section_2 />
        <Section_3 />
      </div>
      <Footer />
    </>
  );
}

export default App;
