import { useState } from "react";
import "./Navbar.scss"

function NavBar() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="Logo" />
                    <span>Real Estate</span>
                </a>
                <a href="/"> Home </a>
                <a href="/"> About </a>
                <a href="/"> Contact </a>
                <a href="/"> Agents </a>
            </div>
            <div className="right">
                <a href="/"> Sign In </a>
                <a href="/" className="register"> Sign Up </a>
                <div className="menuIcon">
                    <img src="./menu.png" alt="menuIcon" onClick={() => setOpenMenu(!openMenu)} />
                </div>
                <div className={openMenu ? "menu active" : "menu"}>
                    <a href="/"> Home </a>
                    <a href="/"> About </a>
                    <a href="/"> Contact </a>
                    <a href="/"> Agents </a>
                    <a href="/"> Sign In </a>
                    <a href="/"> Sign Up </a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;