import { Outlet } from "react-router-dom";
import FooterPage from "../pages/FooterPage";
import Header from "./Header";

export default function Layout() {
    return (

        <div className="py-6 px-6 flex flex-col min-h-screen max-w-4xl mx-auto">
            <Header />
            <Outlet />
            <div>
                <FooterPage />
            </div>
        </div>
    );
}