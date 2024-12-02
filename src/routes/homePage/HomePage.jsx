import "./HomePage.scss"
import SearchBar from "../../components/searchbar/SearchBar"

function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper"> {/*To not overflow and hide under the image beside*/}
                    <h1 className="title">
                        Buy or Rent Houses and Properties
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nobis sunt placeat eum quaerat, quo necessitatibus, ut eligendi et fugiat quidem enim possimus. Dolor praesentium, vitae incidunt aspernatur tenetur rem?
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1> 5+ </h1>
                            <h2> YC Investors </h2>
                        </div>
                        <div className="box">
                            <h1> 200 </h1>
                            <h2> Properties </h2>
                        </div>
                        <div className="box">
                            <h1> 1600 </h1>
                            <h2> Customers Served </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="./bg.png" alt="background image" />
            </div>
        </div>
    )
}

export default HomePage;