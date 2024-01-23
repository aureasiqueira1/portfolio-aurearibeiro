import "./styles.css";
import computer from "../../assets/img/computer.png";
import { Type } from "../../utils/Typewriter";

export function Header() {
  return (
    <header>
      <img src={computer} alt="Codando" />
      <div className="presentation">
        <h1 id="elementEl">Olá!</h1>
        <h2>Eu sou a Áurea</h2>
        <div>
          <Type />
        </div>
      </div>
    </header>
  );
}
