import { useState, useEffect } from "react";

import axios from "axios";

import Search from "./components/Search";

const App = () => {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setAllCountries(response.data));
  }, []);
  return (
    <div>
      {allCountries.length > 0 && <Search allCountries={allCountries} />}
    </div>
  );
};

export default App;
