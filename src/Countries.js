import React  from "react";
import data from "./countriesAll.json";
import "./styling/countries.css";
import { Link } from "react-router-dom";
const Countries = ( { searchInput, regionInput, clicked } ) => {
        function checkInput(country) {
            if(searchInput !==""){
                return country.name.toLowerCase().includes(searchInput.toLowerCase())
                || country.capital.toLowerCase().includes(searchInput.toLowerCase());
            }else {
                return country.region.toLowerCase().includes(regionInput.toLowerCase());
            }
        }
    const newData = data.filter(checkInput);
return(
    <div className="country-container">
        {newData.map((country,index) => {
            const { name, population, flag, region, capital } = country;
                return(
                    <Link to={`/country/${name}`} key={index} style={{ textDecoration:"none" }}>
                    <div className={clicked ? "countries-darkmode" :"countries"} key={index} >
                        <img src={flag} alt={name}/>
                        <h5 className = {clicked ? "h5-darkmode" : null}>{name}</h5>
                        <strong className={clicked ? "strong-darkmode" : null}>population: <span className={clicked ? "span-darkmode" : null}>{population}</span></strong>
                        <strong className={clicked ? "strong-darkmode" : null}>Region: <span className={clicked ? "span-darkmode" : null}>{region}</span></strong>
                        <strong className={clicked ? "strong-darkmode" : null}>Capital: <span className={clicked ? "span-darkmode" : null}>{capital}</span></strong>
                    </div>
                    </Link>
                );
        })}
        </div>
);

};


export default Countries;