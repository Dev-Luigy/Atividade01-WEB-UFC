import { useState, useEffect } from "react";

interface Country {
  capital: string;
  population: number;
}

const Questao03 = () => {
  const [largestPopulationCountry, setLargestPopulationCountry] = useState<Country | null>(null);
  const [smallestPopulationCountry, setSmallestPopulationCountry] = useState<Country | null>(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/region/europe?fields=capital,population')
      .then(response => response.json())
      .then(data => {
        // Mapeia os dados para o formato esperado
        const formattedCountries = data.map((country: Country) => ({
          capital: country.capital ? country.capital[0] : 'N/A',
          population: country.population || 0,
        })).filter((country: Country) => country.population > 0); // Filtra países com população maior que 0

        if (formattedCountries.length > 0) {
          const largest = formattedCountries.reduce((max: Country, country: Country) => (country.population > max.population ? country : max), formattedCountries[0]);
          const smallest = formattedCountries.reduce((min: Country, country: Country) => (country.population < min.population ? country : min), formattedCountries[0]);

          setLargestPopulationCountry(largest);
          setSmallestPopulationCountry(smallest);
        }
      })
      .catch(error => {
        console.error("Error fetching countries data:", error);
      });
  }, []);

  return (
    <div
      style={{
        width: '500px',
        padding: '10px',
        border: '1px solid #000',
        borderRadius: '5px',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflowY: 'auto',
      }}>
      <h2>Questão 03:</h2>
      {largestPopulationCountry && (
        <div>
          <h3>Maior População:</h3>
          <div>
            Capital: {largestPopulationCountry.capital}<br />
            População: {largestPopulationCountry.population}<br />
          </div>
        </div>
      )}
      {smallestPopulationCountry && (
        <div>
          <h3>Menor População:</h3>
          <div>
            Capital: {smallestPopulationCountry.capital}<br />
            População: {smallestPopulationCountry.population}<br />
          </div>
        </div>
      )}
    </div>
  );
};

export default Questao03;

