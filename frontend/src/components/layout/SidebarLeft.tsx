import  { type Page } from "../../types";
import logo from "../../assets/simplilogonew.png";

type Props = {
  setPage: (page: Page) => void;
};

function SidebarLeft({ setPage }: Props) {
  return (
    <aside className="sidebar-left">
      <img src={logo} alt="Simpli logo" className="logo" />

      <div className="menu">
        <button onClick={() => setPage("welcome")}>Home</button>
        <button onClick={() => setPage("upload")}>Upload</button>
        <button>Geschiedenis</button>
        <button>Archief</button>
        <button>Instellingen</button>
      </div>
    </aside>
  );
}

export default SidebarLeft;