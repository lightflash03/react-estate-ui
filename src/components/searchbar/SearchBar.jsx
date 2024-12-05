import { useState } from "react";
import "./SearchBar.scss";

const types = ["Buy", "Sell"];

function SearchBar() {
    const [query, setQuery] = useState({
        type: "Buy",
        location: "",
        minPrice: 0,
        maxPrice: 0,
    });

    const switchType = (typeVal) => {
        setQuery((query) => ({ ...query, type: typeVal }));
        // console.log(query);
    };

    return (
        <div className="searchbar">
            <div className="type">
                {types.map((type) => (
                    <button
                        key={type}
                        onClick={() => switchType(type)}
                        className={type === query.type ? "active" : ""}
                    >
                        {type}
                    </button>
                ))}
            </div>
            <form>
                <input type="text" name="location" placeholder="Location City" />
                <input
                    type="number"
                    name="minPrice"
                    min={0}
                    max={10000000000}
                    placeholder="Min Price"
                />
                <input
                    type="number"
                    name="maxPrice"
                    min={0}
                    max={10000000000}
                    placeholder="Max Price"
                />
                <button>
                    <img src="/search.png" alt="Search Button" />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
