import type { Page } from "../../types";

type Props = {
  setPage: (page: Page) => void;
};

function HistoryPage({ setPage }: Props) {
  return (
    <div>
      <button onClick={() => setPage("dashboard")}>← Terug</button>
      <h1>Dit is de geschiedenis pagina</h1>
    </div>
  );
}

export default HistoryPage;