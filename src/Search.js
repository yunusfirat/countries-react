import React  from "react";
import "./styling/search.css";
import Countries from "./Countries";
const inputContext = React.createContext();

const Search = ( { searchInput, setSearchInput, regionInput, setRegionInput }) => {
    const handleSearchInput = (event) => {
        event.target.id === "country" ? setSearchInput(event.target.value) : setRegionInput(event.target.value);
    };
    <inputContext.Provider value="light" >
    <Countries/>;
    </inputContext.Provider>;
    return (
        <div className="container-search">
            <form>
            <div className="input-area">
                <button type="button">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#121212" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                </button>
                <input
                placeholder="Search for a Country"
                id="country"
                value={searchInput}
                onChange={handleSearchInput}
                 />
            </div>
            </form>
            <form>
            <div className="input-area">
            <button type="button"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#121212" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg></button>
            <input
            placeholder="Search for a region"
            id="region"
            value={regionInput}
            onChange={handleSearchInput}/>
            </div>
            </form>
        </div>
    );
};









export default Search;