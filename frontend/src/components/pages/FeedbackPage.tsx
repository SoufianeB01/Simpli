import { useState } from "react";

import MoodIcon from "@mui/icons-material/Mood";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

import { sendFeedback } from "../../services/feedbackApi.ts";

function FeedbackPage() {
  const [rating, setRating] = useState<string>("");
  const [extraFeedback, setExtraFeedback] = useState("");
  const [sending, setSending] = useState(false);

  const options = [
    {
      value: "goed",
      title: "Goed",
      subtitle: "De tekst is duidelijker en makkelijker.",
      icon: <MoodIcon sx={{ fontSize: 56, color: "#7CCB84" }} />,
    },
    {
      value: "redelijk",
      title: "Redelijk",
      subtitle: "Het is beter, maar het kan nog beter.",
      icon: <SentimentNeutralIcon sx={{ fontSize: 56, color: "#F5A623" }} />,
    },
    {
      value: "niet bruikbaar",
      title: "Niet bruikbaar",
      subtitle: "Deze versie helpt niet voldoende.",
      icon: <SentimentDissatisfiedIcon sx={{ fontSize: 56, color: "#F04438" }} />,
    },
  ];

  const handleSubmit = async () => {
    if (!rating) return;

    setSending(true);

    await sendFeedback({
      rating,
      extraFeedback,
    });

    setSending(false);
  };

  return (
    <div className="feedback-page">
      <div className="feedback-left">
        <h1>Help ons Simpli beter te maken</h1>
        <p>Was deze versimpeling bruikbaar?</p>

        <div className="feedback-cards">
          {options.map((option) => (
            <div
              key={option.value}
              className={`feedback-card-option ${
                rating === option.value ? "selected" : ""
              }`}
              onClick={() => setRating(option.value)}
            >
              {option.icon}
              <h3>{option.title}</h3>
              <span>{option.subtitle}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="feedback-right">
        <div className="feedback-label">
          <strong>Extra feedback</strong>
          <span>(optioneel)</span>
        </div>

        <div className="textarea-wrapper">
          <textarea
            maxLength={500}
            placeholder="Vertel ons wat beter kan..."
            value={extraFeedback}
            onChange={(e) => setExtraFeedback(e.target.value)}
          />

          <div className="char-counter">
            {extraFeedback.length}/500
          </div>
        </div>

        <button
          disabled={!rating || sending}
          className={!rating ? "disabled" : ""}
          onClick={handleSubmit}
        >
          Verstuur feedback
        </button>
      </div>
    </div>
  );
}

export default FeedbackPage;