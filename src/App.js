import { useEffect, useState } from "react";
import "./style.css";
import { Skills } from "./pages/Skills";
import { Header } from "./pages/Header";
import { Projects } from "./pages/Projects";
import { NavBar } from "./components/NavBar";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!load) {
      let trilho = document.getElementById("trilho");
      let body = document.getElementById("root");

      trilho.addEventListener("click", () => {
        trilho.classList.toggle("dark");
        body.classList.toggle("dark");
      });
    }
  }, [load]);

  return (
    <div>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
