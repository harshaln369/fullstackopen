import Weather from "./Weather";

const SingleCountry = ({
  commonName,
  capital,
  area,
  languages,
  flag,
  officialName,
}) => (
  <>
    <h2>{commonName}</h2>
    <p>capital {capital}</p>
    <p>area {area}</p>
    <div>
      <h4>Languages:</h4>
      <ul>
        {Object.values(languages).map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>

      <img src={flag} alt={`${officialName} flag`} />
    </div>
    <Weather capital={capital} />
  </>
);

export default SingleCountry;
