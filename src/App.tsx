import "./App.css";
import About from "./components/about";
import Experience from "./components/exp";
import Header from "./components/header";
import Hello from "./components/hello";
import Proyect from "./components/proyect/indes";
import { animateScroll, scroller } from "react-scroll";

function App() {
  return (
    <div className="App">
      <div id="scroll-container">
        <Header />
        <Hello />
        <About />
        <Proyect />
        <Experience />
      </div>
    </div>
  );
}

export default App;
