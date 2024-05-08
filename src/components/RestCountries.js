import React, { useState, useEffect } from 'react';

function Details() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Country Facts</h1>
      <div className="country-list">
        {countries.map(country => (
          <div key={country.cca3} className="country-card">
            <h2>{country.name.common}</h2>
            <div className="country-info">
              <p><strong>Official Name:</strong> {country.name.official}</p>
              <p><strong>Top-level Domain:</strong> {country.tld}</p>
              <p><strong>ISO Codes:</strong> {country.ccn3}, {country.cca2}, {country.cca3}</p>
              <p><strong>Calling Codes:</strong> {country.callingCodes.join(', ')}</p>
              <p><strong>Capital:</strong> {country.capital}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Subregion:</strong> {country.subregion}</p>
              <p><strong>Population:</strong> {country.population}</p>
              <p><strong>Demonym:</strong> {country.demonym}</p>
              <p><strong>Area:</strong> {country.area} km²</p>
              <p><strong>Gini Index:</strong> {country.gini}</p>
              <p><strong>Timezones:</strong> {country.timezones.join(', ')}</p>
              <p><strong>Borders:</strong> {country.borders.join(', ')}</p>
              <p><strong>Native Name:</strong> {country.nativeName}</p>
              <p><strong>Numeric Code:</strong> {country.numericCode}</p>
              <p><strong>Flag:</strong> <img src={country.flags.png} alt={country.name.common} style={{ width: '50px' }} /></p>
              <p><strong>Currencies:</strong> {Object.values(country.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ')}</p>
              <p><strong>Languages:</strong> {Object.values(country.languages).map(language => language).join(', ')}</p>
              <p><strong>Translations:</strong> {Object.entries(country.translations).map(([key, value]) => `${key}: ${value}`).join(', ')}</p>
              <p><strong>Regional Blocs:</strong> {Object.values(country.regionalBlocs).map(bloc => bloc.acronym).join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
