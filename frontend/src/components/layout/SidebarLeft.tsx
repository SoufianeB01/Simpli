import { useState } from "react";

import logo from "../../assets/simpli-logo-v2.png";

import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import HistoryIcon from "@mui/icons-material/History";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import FeedbackIcon from "@mui/icons-material/Feedback";

import Switch from "@mui/material/Switch";

import type { Page, UserProfile } from "../../types";

type Props = {
  page: Page;
  setPage: (page: Page) => void;
  user: UserProfile;
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
};

function SidebarLeft({
  page,
  setPage,
  user,
  darkMode,
  setDarkMode,
}: Props) {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", icon: <DashboardIcon />, page: "dashboard" },
    { label: "Mijn documenten", icon: <DescriptionIcon />, page: "documents" },
    { label: "Geschiedenis", icon: <HistoryIcon />, page: "documents" },
    { label: "Statistieken", icon: <BarChartIcon />, page: "documents" },
  ];

  return (
    <aside className="sidebar">
      <img src={logo} className="logo" />

      <nav>
        {navItems.map((item) => (
          <button
            key={item.label}
            className={page === item.page ? "nav-item active" : "nav-item"}
            onClick={() => setPage(item.page as Page)}
          >
            {item.icon}
            {item.label}
          </button>
        ))}

        <button
          className="nav-item"
          onClick={() => setSettingsOpen(!settingsOpen)}
        >
          <SettingsIcon />
          Instellingen
        </button>

        {settingsOpen && (
          <div className="settings-menu">
            <div className="settings-row">
              Dark mode
              <Switch
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
              />
            </div>
          </div>
        )}
      </nav>

      <div className="feedback-card">
        <div className="feedback-title">
          Help ons Simpli beter te maken
          <FeedbackIcon />
        </div>

        <button
          className="feedback-link"
          onClick={() => setPage("feedback")}
        >
          Geef feedback
        </button>
      </div>

      <div className="profile">
        <img src={user.avatar} />
        <div>
          <strong>{user.name}</strong>
          <span>{user.organization}</span>
        </div>
      </div>
    </aside>
  );
}

export default SidebarLeft;