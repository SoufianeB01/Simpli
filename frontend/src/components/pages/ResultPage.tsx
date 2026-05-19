import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
    wordsBefore: 198,
    wordsAfter: 92,
    sentencesBefore: 18,
    sentencesAfter: 9,
  };

  const isReal = resultData !== null;

  const beforeReadability = isReal
    ? result.readability_before?.douma_score ?? "-"
    : result.readabilityBefore;

  const afterReadability = isReal
    ? result.readability_after?.douma_score ?? "-"
    : result.readabilityAfter;

  const beforeWords = isReal
    ? result.readability_before?.woorden ?? "-"
    : result.wordsBefore;

  const afterWords = isReal
    ? result.readability_after?.woorden ?? "-"
    : result.wordsAfter;

  const beforeSentences = isReal
    ? result.readability_before?.zinnen ?? "-"
    : result.sentencesBefore;

  const afterSentences = isReal
    ? result.readability_after?.zinnen ?? "-"
    : result.sentencesAfter;

  const improvement =
    typeof beforeReadability === "number" &&
    typeof afterReadability === "number"
      ? `+${afterReadability - beforeReadability}%`
      : "-";

  return (
    <div className="result-page">
      <h1>Resultaat</h1>

      <div className="stats-grid">

        <div className="stat-card big-stat">
          <h3>Voor</h3>

          <div className="stat-item">
            <span>Leesbaarheidsscore</span>
            <strong className="before">
              {beforeReadability}%
            </strong>
          </div>

          <div className="stat-item">
            <span>Aantal woorden</span>
            <strong>{beforeWords}</strong>
          </div>

          <div className="stat-item">
            <span>Aantal zinnen</span>
            <strong>{beforeSentences}</strong>
          </div>
        </div>

        <div className="stat-arrow">
          <ArrowForwardIcon />
        </div>

        <div className="stat-card big-stat">
          <h3>Na</h3>

          <div className="stat-item">
            <span>Leesbaarheidsscore</span>
            <strong className="after">
              {afterReadability}%
            </strong>
          </div>

          <div className="stat-item">
            <span>Aantal woorden</span>
            <strong>{afterWords}</strong>
          </div>

          <div className="stat-item">
            <span>Aantal zinnen</span>
            <strong>{afterSentences}</strong>
          </div>
        </div>

        <div className="stat-card improvement-card">
          <h3>Verbetering</h3>

          <strong className="improvement">
            {improvement}
          </strong>
        </div>
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