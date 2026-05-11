function SidebarRight() {
  return (
    <aside className="sidebar-right">
      <h2>Menselijke controle</h2>

      <div className="toggle-group">
        <h4>Tekstlengte</h4>
        <button>Kort</button>
        <button>Gemiddeld</button>
        <button>Lang</button>
      </div>

      <div className="toggle-group">
        <h4>Urgentie</h4>
        <button>Laag</button>
        <button>Gemiddeld</button>
        <button>Hoog</button>
      </div>

      <div className="toggle-group">
        <h4>Mate van detail</h4>
        <button>Laag</button>
        <button>Gemiddeld</button>
        <button>Hoog</button>
      </div>

      <div className="toggle-group">
        <h4>Pictogrammen</h4>
        <button>Ja</button>
        <button>Nee</button>
      </div>

      <button className="primary-btn">Versimpel</button>
    </aside>
  );
}

export default SidebarRight;