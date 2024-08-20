import { useEffect, useState } from 'react';

interface Country {
  capital: string[];
  population: number;
}

const data = new Promise<Country[]>((resolve) => {
  const countries = [
    { capital: ["Dublin"], population: 4994724 },
    { capital: ["Nicosia"], population: 1207361 },
    { capital: ["Madrid"], population: 47351567 }
  ];
  resolve(countries);
});

const Questao04 = () => {
  const [largestPopulationCountry, setLargestPopulationCountry] = useState<Country | null>(null);
  const [smallestPopulationCountry, setSmallestPopulationCountry] = useState<Country | null>(null);

  useEffect(() => {
    data.then((countries: Country[]) => {
      // Mapeia os dados para o formato esperado
      const formattedCountries = countries.map((country) => ({
        capital: country.capital.length > 0 ? country.capital : ['N/A'], // Mantém capital como array
        population: country.population || 0,
      })).filter((country) => country.population > 0); // Filtra países com população maior que 0

      // Verifica se existem países para processar
      if (formattedCountries.length > 0) {
        // Encontra o país com a maior e a menor
        const largest = formattedCountries.reduce((max, country) => (country.population > max.population ? country : max), formattedCountries[0]);
        const smallest = formattedCountries.reduce((min, country) => (country.population < min.population ? country : min), formattedCountries[0]);

        // Atualiza os estados
        setLargestPopulationCountry(largest);
        setSmallestPopulationCountry(smallest);
      }
    }).catch((error) => {
      console.error("Error processing data:", error);
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
      <h2>Questão 04:</h2>
      {largestPopulationCountry && (
        <div>
          <h3>Maior População:</h3>
          <div>
            Capital: {largestPopulationCountry.capital.join(', ')}<br />
            População: {largestPopulationCountry.population}<br />
          </div>
        </div>
      )}
      {smallestPopulationCountry && (
        <div>
          <h3>Menor População:</h3>
          <div>
            Capital: {smallestPopulationCountry.capital.join(', ')}<br />
            População: {smallestPopulationCountry.population}<br />
          </div>
        </div>
      )}
    </div>
  );
};

export default Questao04;

