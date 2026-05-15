import { useState } from "react";
import "./App.css";

import SidebarLeft from "./components/layout/SidebarLeft";

import DashboardPage from "./components/pages/DashboardPage";
import DocumentsPage from "./components/pages/DocumentsPage";
import HistoryPage from "./components/pages/HistoryPage";
import StatisticsPage from "./components/pages/StatisticsPage";
import ProcessingPage from "./components/pages/ProcessingPage";
import ResultPage from "./components/pages/ResultPage";

import avatar from "./assets/avatar-emma.png";

import type { Page, UserProfile } from "./types";
import FeedbackPage from "./components/pages/FeedbackPage";

function App() {
  const [page, setPage] = useState<Page>("dashboard");
  const [file, setFile] = useState<File | null>(null);
  const [darkMode, setDarkMode] = useState(false);

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
          />
        );

      case "documents":
        return <DocumentsPage setPage={setPage} />;

      case "history":
        return <HistoryPage setPage={setPage} />;

      case "statistics":
        return <StatisticsPage setPage={setPage} />;

      case "processing":
        return <ProcessingPage setPage={setPage} />;

      case "result":
        return <ResultPage />;

      case "feedback":
        return <FeedbackPage />;

      case "error":
        return <div>Er is iets misgegaan</div>;

      default:
        return (
          <DashboardPage
            file={file}
            setFile={setFile}
            setPage={setPage}
          />
        );
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