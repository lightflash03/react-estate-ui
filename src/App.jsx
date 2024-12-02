import NavBar from "./components/navbar/Navbar";
import HomePage from "./routes/homePage/HomePage";
import "./layout.scss";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  )
}

export default App