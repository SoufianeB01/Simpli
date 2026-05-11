import type { Page } from '../../App'

type Props = {
  setPage: (page: Page) => void;
};

function UploadPage({ setPage }: Props) {
  return (
    <div>
      <h1 className="page-title">Upload document</h1>

      <p className="subtitle">
        Upload een document om het automatisch te versimpelen.
      </p>

      <div className="fake-output">
        Sleep bestand hierheen of selecteer document
      </div>

      <br />

      <button
        className="primary-btn"
        onClick={() => setPage("result")}
      >
        Doorgaan
      </button>
    </div>
  );
}

export default UploadPage;