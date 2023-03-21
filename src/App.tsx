import "./App.css";
import About from "./components/about";
import Header from "./components/header";
import Hello from "./components/hello";
import Proyect from "./components/proyect";
// import { animateScroll, scroller } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Header />
      <Hello />
      <About />
      <Proyect />
    </div>
  );
}

export default App;
