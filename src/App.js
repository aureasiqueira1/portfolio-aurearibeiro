import { useEffect, useState } from "react";
import "./styles.css";
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
