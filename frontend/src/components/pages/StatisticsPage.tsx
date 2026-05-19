import type { Page } from "../../types";

type Props = {
  setPage: (page: Page) => void;
};

type StatItem = {
  id: number;
  title: string;
  readabilityBefore: number;
  readabilityAfter: number;
  wordsBefore: number;
  wordsAfter: number;
  sentencesBefore: number;
  sentencesAfter: number;
  improvement: string;
};

function StatisticsPage({ setPage }: Props) {
  const stats: StatItem[] = [
    {
      id: 1,
      title: "Paspoort aanvraag minderjarige",
      readabilityBefore: 42,
      readabilityAfter: 88,
      wordsBefore: 198,
      wordsAfter: 92,
      sentencesBefore: 18,
      sentencesAfter: 9,
      improvement: "+109%",
    },
    {
      id: 2,
      title: "Belastingbrief burgerzaken",
      readabilityBefore: 35,
      readabilityAfter: 79,
      wordsBefore: 220,
      wordsAfter: 110,
      sentencesBefore: 20,
      sentencesAfter: 10,
      improvement: "+126%",
    },
    {
      id: 3,
      title: "Vergunning horeca",
      readabilityBefore: 40,
      readabilityAfter: 85,
      wordsBefore: 180,
      wordsAfter: 95,
      sentencesBefore: 16,
      sentencesAfter: 8,
      improvement: "+112%",
    },
    {
      id: 4,
      title: "Bezwaarprocedure uitleg",
      readabilityBefore: 55,
      readabilityAfter: 90,
      wordsBefore: 150,
      wordsAfter: 80,
      sentencesBefore: 14,
      sentencesAfter: 7,
      improvement: "+64%",
    },
    {
      id: 5,
      title: "Subsidie aanvraag formulier",
      readabilityBefore: 38,
      readabilityAfter: 82,
      wordsBefore: 210,
      wordsAfter: 105,
      sentencesBefore: 19,
      sentencesAfter: 9,
      improvement: "+116%",
    },
  ];

  return (
    <div className="statistics-page">
      <div className="page-header">
        <button onClick={() => setPage("dashboard")}>
          ← Terug
        </button>

        <h1>Statistieken</h1>
      </div>

      <div className="stats-table-wrapper">
        <table className="stats-table">
          <thead>
            <tr>
              <th>Titel</th>
              <th>Leesbaarheid (voor)</th>
              <th>Leesbaarheid (na)</th>
              <th>Woorden (voor)</th>
              <th>Woorden (na)</th>
              <th>Zinnen (voor)</th>
              <th>Zinnen (na)</th>
              <th>Verbetering</th>
            </tr>
          </thead>

          <tbody>
            {stats.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.readabilityBefore}%</td>
                <td>{item.readabilityAfter}%</td>
                <td>{item.wordsBefore}</td>
                <td>{item.wordsAfter}</td>
                <td>{item.sentencesBefore}</td>
                <td>{item.sentencesAfter}</td>
                <td className="improvement-cell">
                  {item.improvement}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StatisticsPage;