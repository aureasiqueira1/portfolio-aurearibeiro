import "./styles.css";
import Typewriter from "typewriter-effect";

export function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Desenvolvedora Front-End"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
