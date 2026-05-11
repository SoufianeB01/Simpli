import type { Page } from '../../App'

type Props = {
  setPage: (page: Page) => void;
};

function WelcomePage({ setPage }: Props) {
  const rules = [
    "Directe acties eerst",
    "Stap voor stap uitleg",
    "Belangrijkste informatie eerst",
    "Korte duidelijke zinnen",
    "Visuele ondersteuning",
    "Alleen relevante informatie",
    "Begrijpelijke taal",
    "Ruimte voor aanpassing",
  ];

  return (
    <div>
      <h1 className="page-title">Welkom bij Simpli</h1>

      <p className="subtitle">
        Simpli maakt complexe teksten begrijpelijker door vaste richtlijnen toe
        te passen die zorgen voor heldere en toegankelijke communicatie.
      </p>

      {rules.map((rule) => (
        <div className="usp" key={rule}>
          <span className="green">✔</span>
          {rule}
        </div>
      ))}

      <br />

      <button
        className="primary-btn"
        onClick={() => setPage("upload")}
      >
        Laten we beginnen
      </button>
    </div>
  );
}

export default WelcomePage;