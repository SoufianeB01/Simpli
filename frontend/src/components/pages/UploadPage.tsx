import { useState } from "react";
import type { Page } from "../../types";

type Props = {
  setPage: (page: Page) => void;
};

function UploadPage({ setPage }: Props) {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div className="upload-page">

      <h1 className="page-title">Upload document</h1>

      <p className="subtitle">
        Upload een document dat je wilt laten versimpelen.
      </p>

      {/* SIMPLE UPLOAD */}
      <div
        style={{
          border: "1px dashed #999",
          padding: "40px",
          borderRadius: "12px",
          textAlign: "center",
          marginTop: "20px",
          background: "#f5f5f5"
        }}
      >
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setFileName(file.name);
          }}
        />

        <p style={{ marginTop: "10px" }}>
          {fileName ? `Geselecteerd: ${fileName}` : "Sleep of kies een bestand"}
        </p>
      </div>

      <button
        className="primary-btn"
        style={{ marginTop: "20px" }}
        onClick={() => setPage("result")}
      >
        Versimpel document
      </button>

    </div>
  );
}

export default UploadPage;