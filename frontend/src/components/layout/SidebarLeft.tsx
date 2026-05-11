import { Page } from "../../App";

type Props = {
  setPage: (page: Page) => void;
};

function SidebarLeft({ setPage }: Props) {
  return (
    <aside className="sidebar-left">
      <div className="logo">Simpli</div>

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