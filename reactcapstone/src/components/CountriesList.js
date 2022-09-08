import Country from './Country';

const CountriesList = (prop) => {
  const { countries } = prop;
  const size = countries.length;

  return (
    <>
      { size === 1
        ? (
          <div className="one-country">
            {' '}
            {countries.map((country) => (
              <Country
                key={country.id}
                country={country}
              />
            ))}
            {' '}
          </div>
        ) : (
          <ul className="countries">
            {countries.map((country) => (
              <Country
                key={country.id}
                country={country}
              />
            ))}
          </ul>
        )}
    </>
  );
};

export default CountriesList;
