import React from "react";
import data from "./countriesAll.json";
import Navbar from "./Navbar";
import "./styling/country.css";

const Country = ({ match }) => {
    console.log("hello World", match.params.name);
   const clickedCountry = data.filter((country) => country.name === match.params.name);

    console.log(clickedCountry);
    return (
        <>
        <Navbar />
        <div className="country-container">
        {clickedCountry.map((country,index) => {
            const { name, flag, population, region, capital, nativeName, subregion, topLevelDomain, currencies, languages, borders  } = country;
            let domain = topLevelDomain[0];
            let currency = currencies[0].name;
            console.log(currency);
            console.log(domain);
            console.log(nativeName);
            console.log(subregion);
            console.log(borders.join(" "));
            let stringLanguages = languages.map((language) => language.name);
            let sortedLanguages = stringLanguages.join(". ").concat(".");
            console.log(sortedLanguages);
                return(
                    <div className="country" key={index}>
                        <div><img src={flag} alt={name}/></div>
                        <h5>{name}</h5>
                        <strong>population: <span>{population}</span></strong>
                        <strong>Region: <span>{region}</span></strong>
                        <strong>Capital: <span>{capital}</span></strong>
                    </div>
                );
        })}
        </div>
        </>
    );
};

export default Country;