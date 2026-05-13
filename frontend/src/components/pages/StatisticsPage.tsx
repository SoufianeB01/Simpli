import type { Page } from "../../types";

type Props = {
  setPage: (page: Page) => void;
};

function StatisticsPage({ setPage }: Props) {
  return (
    <div>
      <button onClick={() => setPage("dashboard")}>← Terug</button>
      <h1>Dit is de statistieken pagina</h1>
    </div>
  );
}

export default StatisticsPage;