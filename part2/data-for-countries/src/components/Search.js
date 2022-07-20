import { useState } from "react";
import SingleCountry from "./SingleCountry";

const Search = ({ allCountries }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [country, setCountry] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCountries = allCountries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.name.official.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCountry = (country) => {
    setCountry(country);
  };

  const renderCountries = () => {
    if (filteredCountries.length === 0) {
      return <p>No Countries</p>;
    } else if (filteredCountries.length >= 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (filteredCountries.length === 1) {
      return (
        <SingleCountry
          commonName={filteredCountries[0].name.common}
          capital={filteredCountries[0].capital[0]}
          area={filteredCountries[0].area}
          languages={filteredCountries[0].languages}
          flag={filteredCountries[0].flags.png}
          officialName={filteredCountries[0].name.official}
        />
      );
    } else {
      return filteredCountries.map((country) => (
        <div key={country.name.official}>
          {country.name.common}{" "}
          <button onClick={() => getCountry(country)}>show</button>
        </div>
      ));
    }
  };

  return (
    <>
      find countries: <input onChange={handleSearch} value={searchTerm} />
      {renderCountries()}
      {country && (
        <SingleCountry
          commonName={country.name.common}
          capital={country.capital[0]}
          area={country.area}
          languages={country.languages}
          flag={country.flags.png}
          officialName={country.name.official}
        />
      )}
    </>
  );
};

export default Search;
