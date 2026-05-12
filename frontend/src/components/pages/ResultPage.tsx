function ResultPage() {
  const result = {
    originalText: `Betreft: Paspoort minderjarige – verloopdatum nadert

Geachte mevrouw Van Dijk,

Uit onze administratie blijkt dat het paspoort van uw minderjarige kind, Liam van Dijk, verloopt op 12 maart 2026. Om te voorkomen dat uw kind tijdelijk niet over een geldig reisdocument beschikt, verzoeken wij u tijdig een nieuw paspoort aan te vragen.

Aanvraag nieuw paspoort

Het aanvragen van een paspoort voor een minderjarige gebeurt uitsluitend op afspraak. U kunt hiervoor terecht op één van onze publiekslocaties in Rotterdam.

Bij de aanvraag moeten beide ouders met gezag aanwezig zijn om toestemming te geven.

Benodigde documenten:
• uw identiteitsbewijs
• huidige paspoort
• uw kind
• pasfoto
• toestemming beide ouders

Productietijd: vijf werkdagen.

Met vriendelijke groet,
Gemeente Rotterdam`,

    simplifiedText: `Paspoort Liam verloopt bijna

Het paspoort van Liam verloopt op 12 maart 2026.

Vraag op tijd een nieuw paspoort aan.

Zo doet u dat:

1. Maak een afspraak bij Gemeente Rotterdam
2. Kom samen met beide ouders
3. Neem mee:
- uw identiteitsbewijs
- Liam
- oude paspoort
- pasfoto

Na 5 werkdagen kunt u het nieuwe paspoort ophalen.

Heeft u vragen?
Bel 14 010 of kijk op rotterdam.nl`,

    readabilityBefore: 42,
    readabilityAfter: 88,

    doumaBefore: 5.8,
    doumaAfter: 8.9,

    wordsBefore: 198,
    wordsAfter: 92,

    sentencesBefore: 18,
    sentencesAfter: 9,
  };

  const stats = [
    {
      label: "Leesbaarheid",
      before: result.readabilityBefore,
      after: result.readabilityAfter,
    },
    {
      label: "Douma score",
      before: result.doumaBefore,
      after: result.doumaAfter,
    },
    {
      label: "Woorden",
      before: result.wordsBefore,
      after: result.wordsAfter,
    },
    {
      label: "Zinnen",
      before: result.sentencesBefore,
      after: result.sentencesAfter,
    },
    {
      label: "Verbetering",
      before: "—",
      after: "+109%",
    },
    {
      label: "Complexiteit",
      before: "Hoog",
      after: "Laag",
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
          <pre>{result.originalText}</pre>
        </div>

        <div className="text-card simplified">
          <h2>Versimpelde tekst</h2>
          <pre>{result.simplifiedText}</pre>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;