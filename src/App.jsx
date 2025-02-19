import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import { UserContextProvider } from "./component/UserContext";
import AccountPage from "./pages/AccountPage";
import FooterPage from "./pages/FooterPage";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage.jsx";
import RegisterPage from "./pages/RegisterPage";
import ReportPage from "./pages/ReportPage";
import ReportsFormPage from "./pages/ReportsFormPage";
import ReportsPage from "./pages/ReportsPage";
import SearchPage from "./pages/SearchPage";
import SerachTextPage from "./pages/SerachTextPage";
import ShowPage from "./pages/ShowPage";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/report/:id" element={<ReportPage />} />
          <Route path="/Reports" element={<ReportsPage />} />
          <Route path="/Reports/new" element={<ReportsFormPage />} />
          <Route path="/Reports/:id" element={<ReportsFormPage />} />
          <Route path="/ReportsFormPage" element={<ReportsFormPage />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/ShowPage" element={<ShowPage />} />
          <Route path="/SerachTextPage" element={<SerachTextPage />} />
          <Route path="/AccountPage" element={<AccountPage />} />
          <Route path="/FooterPage" element={<FooterPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
