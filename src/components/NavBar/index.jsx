import "./styles.css";

export function NavBar() {
  return (
    <>
      <nav id="nav">
        <button id="btnMobile">Menu</button>

        <ul id="menu">
          <a href="#sobre">
            <li>Sobre</li>
          </a>
          <a href="#projetos">
            <li>Projetos</li>
          </a>
          <a href="#habilidades">
            <li>Habilidades</li>
          </a>
          <a href="#estudos">
            <li>Estudos</li>
          </a>
          <a href="#contato" className="contatoLi">
            <li>Contato</li>
          </a>
        </ul>

        <div className="trilho" id="trilho">
          <div className="indicador"></div>
        </div>
      </nav>

      <hr className="line" size="1" width="64%" noshade="" />
    </>
  );
}
