import originalTextFile from "./mock/original.txt?raw";
import simplifiedTextFile from "./mock/simplified.txt?raw";

type Props = {
  resultData: any;
};

function ResultPage({ resultData }: Props) {
  const result = resultData ?? {
    originalText: originalTextFile,
    simplifiedText: simplifiedTextFile,
    readabilityBefore: 42,
    readabilityAfter: 88,
    doumaBefore: 5.8,
    doumaAfter: 8.9,
    wordsBefore: 198,
    wordsAfter: 92,
    sentencesBefore: 18,
    sentencesAfter: 9,
  };

  const isReal = resultData !== null;

  const stats = [
    {
      label: "Leesbaarheid",
      before: isReal
        ? result.readability_before.douma_score
        : result.readabilityBefore,
      after: isReal
        ? result.readability_after.douma_score
        : result.readabilityAfter,
    },
    {
      label: "Woorden",
      before: isReal
        ? result.readability_before.woorden
        : result.wordsBefore,
      after: isReal
        ? result.readability_after.woorden
        : result.wordsAfter,
    },
    {
      label: "Zinnen",
      before: isReal
        ? result.readability_before.zinnen
        : result.sentencesBefore,
      after: isReal
        ? result.readability_after.zinnen
        : result.sentencesAfter,
    },
  ];

  return (
    <div className="result-page">
      <h1>Resultaat</h1>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <span>{stat.label}</span>

            <div className="stat-values">
              <div className="before">{stat.before}</div>
              <div className="after">{stat.after}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-columns">
        <div className="text-card">
          <h2>Originele tekst</h2>
          <pre>
            {isReal
              ? result.original_text
              : result.originalText}
          </pre>
        </div>

        <div className="text-card simplified">
          <h2>Versimpelde tekst</h2>
          <pre>
            {isReal
              ? result.simplified_text
              : result.simplifiedText}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;