import "./navbar.scss"

function NavBar() {
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
            </div>
        </nav>
    )
}

export default NavBar;