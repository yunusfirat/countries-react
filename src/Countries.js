import React  from "react";
import data from "./countriesAll.json";
import "./styling/countries.css";
const Countries = ( { searchInput, regionInput } ) => {
    // if(searchInput.includes(name) || searchInput.includes(capital) || regionInput.includes(region)){
        function checkInput(country) {
            if(searchInput !==""){
                return country.name.toLowerCase().includes(searchInput.toLowerCase())
                || country.capital.toLowerCase().includes(searchInput.toLowerCase());
            }else {
                return country.region.toLowerCase().includes(regionInput.toLowerCase());
            }
        }
    const newData = data.filter(checkInput);
    console.log(regionInput);
return(
    <div className="country-container">
        {newData.map((country,index) => {
            const { name, population, flag, region, capital } = country;
                return(
                    <div className="country" key={index}>
                        <img src={flag} alt={name}/>
                        <h5>{name}</h5>
                        <strong>population: <span>{population}</span></strong>
                        <strong>Region: <span>{region}</span></strong>
                        <strong>Capital: <span>{capital}</span></strong>
                    </div>
                );
        })}
        </div>
);

};


export default Countries;