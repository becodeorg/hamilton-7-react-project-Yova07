import React from "react";

const SearchBar = () => {

    return (
        <div className="search">
            <i className="fa-solid fa-magnifying-glass searchBarIcon"></i>
            <input type='searchbar' className="searchbar" placeholder="Search"></input>
        </div>
    )
}

export default SearchBar;