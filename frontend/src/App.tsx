import { useState } from "react";
import "./App.css";

import SidebarLeft from "./components/layout/SidebarLeft";

import DashboardPage from "./components/pages/DashboardPage";
import DocumentsPage from "./components/pages/DocumentsPage";
import HistoryPage from "./components/pages/HistoryPage";
import StatisticsPage from "./components/pages/StatisticsPage";
import ProcessingPage from "./components/pages/ProcessingPage";
import ResultPage from "./components/pages/ResultPage";
import FeedbackPage from "./components/pages/FeedbackPage";

import avatar from "./assets/avatar-emma.png";

import type { Page, UserProfile } from "./types";

export const USE_REAL_API = true;

function App() {
  const [page, setPage] = useState<Page>("dashboard");
  const [file, setFile] = useState<File | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  const [result, setResult] = useState<any>(null);

  const user: UserProfile = {
    avatar,
    name: "Emma de Vries",
    organization: "Gemeente Rotterdam",
  };

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return (
          <DashboardPage
            file={file}
            setFile={setFile}
            setPage={setPage}
            setResultData={setResult}
            useRealApi={USE_REAL_API}
          />
        );

      case "documents":
        return (
          <DocumentsPage
            setPage={setPage}
            useRealApi={USE_REAL_API}
          />
        );

      case "history":
        return <HistoryPage setPage={setPage} />;

      case "statistics":
        return <StatisticsPage setPage={setPage} />;

      case "processing":
        return <ProcessingPage setPage={setPage} />;

      case "result":
        return <ResultPage resultData={result} />;

      case "feedback":
        return <FeedbackPage />;

      default:
        return <div>Fout</div>;
    }
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <SidebarLeft
        page={page}
        setPage={setPage}
        user={user}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;