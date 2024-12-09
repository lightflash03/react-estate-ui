import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/Navbar"
import "./layout.scss";

function Layout() {
    return (
        <div className="layout">
            <div className="navbar">
                <NavBar />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
};

export default Layout;