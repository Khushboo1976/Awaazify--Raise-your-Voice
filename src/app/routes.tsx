import { createBrowserRouter } from "react-router";
import { MainLayout } from "./components/layouts/MainLayout";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { ProblemDetail } from "./pages/ProblemDetail";
import { PostProblem } from "./pages/PostProblem";
import { Categories } from "./pages/Categories";
import { Dashboard } from "./pages/Dashboard";
import { CivicHeatmap } from "./pages/CivicHeatmap";
import { VotersVoice } from "./pages/VotersVoice";
import { Profile } from "./pages/Profile";
import { Bookmarks } from "./pages/Bookmarks";
import { Notifications } from "./pages/Notifications";
import { Settings } from "./pages/Settings";
import { AdminPanel } from "./pages/AdminPanel";
import { Leaderboard } from "./pages/Leaderboard";
import { Success } from "./pages/Success";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/success",
    Component: Success,
  },
  {
    path: "/",
    Component: MainLayout,
    children: [
      { path: "home", Component: Home },
      { path: "problem/:id", Component: ProblemDetail },
      { path: "post", Component: PostProblem },
      { path: "categories", Component: Categories },
      { path: "dashboard", Component: Dashboard },
      { path: "heatmap", Component: CivicHeatmap },
      { path: "voters-voice", Component: VotersVoice },
      { path: "profile", Component: Profile },
      { path: "bookmarks", Component: Bookmarks },
      { path: "notifications", Component: Notifications },
      { path: "settings", Component: Settings },
      { path: "admin", Component: AdminPanel },
      { path: "leaderboard", Component: Leaderboard },
    ],
  },
]);
