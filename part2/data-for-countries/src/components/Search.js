import { useState } from "react";

const Search = ({ allCountries }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCountries = allCountries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.name.official.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderCountries = () => {
    if (filteredCountries.length === 0) {
      return <p>No Countries</p>;
    } else if (filteredCountries.length >= 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (filteredCountries.length === 1) {
      return (
        <>
          <h2>{filteredCountries[0].name.common}</h2>
          <p>capital {filteredCountries[0].capital[0]}</p>
          <p>area {filteredCountries[0].area}</p>
          <div>
            <h4>Languages:</h4>
            <ul>
              {Object.values(filteredCountries[0].languages).map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>

            <img
              src={filteredCountries[0].flags.png}
              alt={`${filteredCountries[0].name.official} flag`}
            />
          </div>
        </>
      );
    } else {
      return filteredCountries.map((country) => (
        <li key={country.name.official}>{country.name.common}</li>
      ));
    }
  };

  return (
    <>
      find countries: <input onChange={handleSearch} value={searchTerm} />
      {renderCountries()}
    </>
  );
};

export default Search;
