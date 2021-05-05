import React from "react";
import data from "./countriesAll.json";
import "./styling/country.css";
// import { useParams } from "react-router-dom";
// useParams,
const Country = ( { match } ) => {
    const { name } = match.params;
   const clickedCountry = data.filter((country) => country.name === match.params.name);
    console.log(name);
//     console.log(clickedCountry);
    return (
        <>
        <div className="country-container">
        {/* <Link to='/' className='btn btn-primary'>
          Back to Countries
        </Link> */}
        {clickedCountry.map((country,index) => {
            const { name, flag, population, region, capital, languages } = country;
            // nativeName, subregion, topLevelDomain, currencies, , borders
            // let domain = topLevelDomain[0];
            // let currency = currencies[0].name;
            // console.log(currency);
            // console.log(domain);
            // console.log(nativeName);
            // console.log(subregion);
            // console.log(borders.join(" "));
            let stringLanguages = languages.map((language) => language.name);
            let sortedLanguages = stringLanguages.join(". ").concat(".");
                return(
                    <div className="country" key={index}>
                        <div><img src={flag} alt={name}/></div>
                        <h5>{name}</h5>
                        <strong>population: <span>{population}</span></strong>
                        <strong>Region: <span>{region}</span></strong>
                        <strong>Capital: <span>{capital}</span></strong>
                        <strong>Capital: <span>{sortedLanguages}</span></strong>
                    </div>
                );
        })}
        </div>
        </>
    );
};

export default Country;