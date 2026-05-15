import { useRef, useState } from "react";

import UploadIcon from "@mui/icons-material/Backup";
import LockIcon from "@mui/icons-material/Lock";
import TranslateIcon from "@mui/icons-material/Translate";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DescriptionIcon from "@mui/icons-material/Description";
import CloseIcon from "@mui/icons-material/Close";

import { simplifyDocument } from "../../services/documentApi";

import type { Page } from "../../types";

type Props = {
  file: File | null;
  setFile: (file: File | null) => void;
  setPage: (page: Page) => void;
};

function DashboardPage({ file, setFile, setPage }: Props) {
  const [fileError, setFileError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File) => {
    const allowed = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ];

    const maxSize = 20 * 1024 * 1024;

    if (!allowed.includes(file.type)) {
      setFileError(
        "Formaat wordt niet ondersteund (.pdf, .docx, .txt)."
      );
      return false;
    }

    if (file.size > maxSize) {
      setFileError("Bestand is te groot (max 20 MB).");
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
    } else {
      setFile(null);
    }
  };

  const removeFile = () => {
    setFile(null);
    setFileError(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSimplify = async () => {
    if (!file || loading) return;

    setLoading(true);

    try {
      await simplifyDocument(file);
      setPage("processing");
    } catch {
      setFileError("Backend of Python API niet bereikbaar");
    } finally {
      setLoading(false);
    }
  };

  const canProceed = file !== null && !loading;

  return (
    <div className="dashboard-page">
      <h1>Maak complexe communicatie begrijpelijk</h1>

      <p>
        Upload een document en Simpli maakt het eenvoudiger,
        duidelijker en toegankelijker voor iedereen
      </p>

      <div className="upload-box">
        <UploadIcon
          className="upload-icon clickable"
          onClick={() => fileInputRef.current?.click()}
        />

        <h3>Sleep uw bestand hierheen of klik om te uploaden</h3>

        <input
          ref={fileInputRef}
          type="file"
          onChange={onUpload}
          className="hidden-file-input"
        />

        <span>.pdf, .docx, .txt (max 20 MB)</span>

        {fileError && (
          <p className="upload-error">{fileError}</p>
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

      {file && (
        <div className="file-preview">
          <div className="file-preview-left">
            <div className="file-icon-bg">
              <DescriptionIcon />
            </div>

            <div>
              <strong>{file.name}</strong>
              <span>
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </span>
            </div>
          </div>

          <CloseIcon
            className="remove-file"
            onClick={removeFile}
          />
        </div>
      )}

      <button
        className={
          canProceed
            ? "make-simple-btn"
            : "make-simple-btn disabled"
        }
        disabled={!canProceed}
        onClick={onSimplify}
      >
        {loading ? "Verwerken..." : "Maak simpel"}
        <ArrowForwardIcon />
      </button>
    </div>
  );
}

export default DashboardPage;