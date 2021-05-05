import React  from "react";
import data from "./countriesAll.json";
import "./styling/countries.css";
import { Link } from "react-router-dom";
const Countries = ( { searchInput, regionInput } ) => {
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
                    <Link to={`/country/${name}`} key={index}>
                    <div className="country" key={index}>
                        <img src={flag} alt={name}/>
                        <h5>{name}</h5>
                        <strong>population: <span>{population}</span></strong>
                        <strong>Region: <span>{region}</span></strong>
                        <strong>Capital: <span>{capital}</span></strong>
                    </div>
                    </Link>
                );
        })}
        </div>
);

};


export default Countries;