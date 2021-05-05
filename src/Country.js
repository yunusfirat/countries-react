import React from "react";
import data from "./countriesAll.json";
import "./styling/country.css";
import { Link } from "react-router-dom";
const Country = ({ match }) => {
    const { name } = match.params;
    const clickedCountry = data.filter((country) => country.name === match.params.name);
    console.log(name);
    return (
        <>
            <div>
                {/* <Link to='/' className='btn btn-primary'>
          Back to Countries
        </Link> */}
                {clickedCountry.map((country, index) => {
                    const { name, flag, population, region, capital, languages, subregion, topLevelDomain, currencies,nativeName, borders } = country;
                    let domain = topLevelDomain[0];
                    let currency = currencies[0].name.concat(".");
                    // let border =borders.join(" ");
                    console.log(borders);
                    let stringLanguages = languages.map((language) => language.name);
                    let sortedLanguages = stringLanguages.join(". ").concat(".");
                    return (
                        <div className="second-container" key={index}>
                            <div>
                                <div className="country" key={index}>
                                    <div><img src={flag} alt={name} className="images" /></div>
                                    <div className="right-side">
                                        <h1>{name}</h1>
                                        <div className="country-infos">
                                            <div className="c1">
                                                <strong>Native Name: <span>{nativeName}</span></strong>
                                                <strong>population: <span>{population}</span></strong>
                                                <strong>Region: <span>{region}</span></strong>
                                                <strong>Sub Region: <span>{subregion}</span></strong>
                                                <strong>Capital: <span>{capital}</span></strong>
                                            </div>
                                            <div className="c2">
                                                <strong>Top Level Domain: <span>{domain}</span></strong>
                                                <strong>Currencies: <span>{currency}</span></strong>
                                                <strong>Languages: <span>{sortedLanguages}</span></strong>
                                            </div>
                                        </div>
                                        <div className="border-countries">
                                        <strong>Border Countries:</strong>
                                        <div className="border-link-container">
                                        {borders.map((border) => {
                                            return(
                                                <Link className="border-link">{border}</Link>
                                            );
                                        })}
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Country;