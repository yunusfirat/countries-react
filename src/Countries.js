import React  from "react";
import data from "./countriesAll.json";
import "./styling/countries.css";
const Countries = () => {
return(
    <div className="country-container">
        {data.map((country,index) => {
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