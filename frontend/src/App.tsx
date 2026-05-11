import { useState } from "react";
import "./App.css";

import SidebarLeft from "./components/layout/SidebarLeft";
import SidebarRight from "./components/layout/SidebarRight";

import WelcomePage from "./components/pages/WelcomePage";
import UploadPage from "./components/pages/UploadPage";
import ResultPage from "./components/pages/ResultPage";

import type { Page } from "./types";

function App() {
  const [page, setPage] = useState<Page>("welcome");

  return (
    <div className="app">
      <SidebarLeft setPage={setPage} />

      <main className="main">
        {page === "welcome" && <WelcomePage setPage={setPage} />}
        {page === "upload" && <UploadPage setPage={setPage} />}
        {page === "result" && <ResultPage />}
      </main>

      <SidebarRight />
    </div>
  );
}

export default App;