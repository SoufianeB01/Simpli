import { useState } from "react";

import UploadIcon from "@mui/icons-material/Backup";
import LockIcon from "@mui/icons-material/Lock";
import TranslateIcon from "@mui/icons-material/Translate";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import type { Page } from "../../types";

type Props = {
  file: File | null;
  setFile: (file: File | null) => void;
  setPage: (page: Page) => void;
};

function DashboardPage({ file, setFile, setPage }: Props) {
  const [fileError, setFileError] = useState<string | null>(null);

  const validateFile = (file: File) => {
    const allowed = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ];

    const maxSize = 20 * 1024 * 1024;

    if (!allowed.includes(file.type)) {
      setFileError("Formaat wordt niet ondersteund (.pdf, .docx, .txt)");
      return false;
    }

    if (file.size > maxSize) {
      setFileError("Bestand is te groot (max 20 MB)");
      return false;
    }

    setFileError(null);
    return true;
  };

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;

    if (validateFile(f)) {
      setFile(f);
    }
  };

  const canProceed = file !== null;

  return (
    <div className="dashboard-page">
      <h1>Maak complexe communicatie begrijpelijk</h1>

      <p>
        Upload een document en Simpli maakt het eenvoudiger,
        duidelijker en toegankelijker voor iedereen
      </p>

      <div className="upload-box">
        <UploadIcon className="upload-icon" />

        <h3>Sleep uw bestand hierheen of klik om te uploaden</h3>

        <input type="file" onChange={onUpload} />

        <span>.pdf, .docx, .txt (max 20 MB)</span>

        {file && <p>Geselecteerd: {file.name}</p>}
        
        {fileError && (
          <p className="upload-error">
            {fileError}
          </p>
        )}

        <div className="upload-info">
          <div>
            <LockIcon />
            Uw documenten worden veilig verwerkt
          </div>

          <div>
            <TranslateIcon />
            Ondersteunde talen: NL, EN, TR, AR
          </div>
        </div>
      </div>

      <button
        className={canProceed ? "make-simple-btn" : "make-simple-btn disabled"}
        disabled={!canProceed}
        onClick={() => setPage("processing")}
        title={!canProceed ? "Upload eerst een document" : ""}
      >
        Maak simpel
        <ArrowForwardIcon />
      </button>
    </div>
  );
}

export default DashboardPage;