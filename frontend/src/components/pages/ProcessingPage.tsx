import { useEffect, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";

import DescriptionIcon from "@mui/icons-material/Description";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import type { Page } from "../../types";

type Props = {
  setPage: (page: Page) => void;
};

const steps = [
  { text: "Document analyseren", icon: <DescriptionIcon /> },
  { text: "Moeilijke woorden herkennen", icon: <TextFieldsIcon /> },
  { text: "Zinnen vereenvoudigen", icon: <AutoFixHighIcon /> },
  { text: "Jargon vervangen", icon: <SwapHorizIcon /> },
  { text: "Leesbaarheid controleren", icon: <FactCheckIcon /> },
];

function ProcessingPage({ setPage }: Props) {
  const [progress, setProgress] = useState(0);
  const [completedStep, setCompletedStep] = useState(-1);

  useEffect(() => {
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;

      setCompletedStep(currentStep - 1);
      setProgress(currentStep * 20);

      if (currentStep === 5) {
        clearInterval(interval);

        setTimeout(() => {
          setPage("result");
        }, 2000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [setPage]);

  return (
    <div className="processing-page">
      <div className="processing-left">
        <h1>Simpli is bezig</h1>

        <p>We maken uw document begrijpelijker</p>

        <div className="progress-wrapper">
          <CircularProgress
            variant="determinate"
            value={100}
            size={180}
            thickness={4}
            sx={{
              color: "#e6eefe",
              position: "absolute",
            }}
          />

          <CircularProgress
            variant="determinate"
            value={progress}
            size={180}
            thickness={4}
            sx={{
              "& .MuiCircularProgress-circle": {
                stroke: "#1f68fb",
                strokeLinecap: "round",
              },
            }}
          />
        </div>

        <div className="progress-text">{progress}%</div>
      </div>

      <div className="processing-right">
        {steps.map((step, index) => (
          <div className="processing-step" key={step.text}>
            <span className="step-icon">{step.icon}</span>

            <span>{step.text}</span>

            {index <= completedStep ? (
              <CheckCircleIcon className="step-check" />
            ) : (
              <CircularProgress
                size={18}
                thickness={5}
                className="step-loader"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProcessingPage;