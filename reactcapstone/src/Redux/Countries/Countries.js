/* eslint-disable indent */
/* eslint-disable max-len */
const FETCH_COUNTRIES_DATA = 'Metrics-webapp/reactcapstaone/FETCH_COUNTRIES_DATA';
const initialState = { status: 'Not Fetched', data: [] };

export const success = (countries) => ({
  type: FETCH_COUNTRIES_DATA,
  countries,
});

export const fetchCountriesData = () => async (dispatch) => {
  fetch('https://covid-api.mmediagroup.fr/v1/cases')
    .then((data) => data.json())
    .then((data) => {
      const countriesData = [];
      const countriesObject = data;
      Object.keys(countriesObject).forEach((country) => {
        countriesData.push({
          id: countriesObject[country].All.country,
          name: countriesObject[country].All.country,
          confirm: countriesObject[country].All.confirmed,
          data: [
            {
              location: countriesObject[country].All.location,
              confirmed: countriesObject[country].All.confirmed,
              deaths: countriesObject[country].All.deaths,
              recovered: countriesObject[country].All.recovered,
              population: countriesObject[country].All.population,
              life_expectancy: countriesObject[country].All.life_expectancy,
              continent: countriesObject[country].All.continent,
              capital_city: countriesObject[country].All.capital_city,
              updated: countriesObject[country].All.updated,
            },
          ],
        });
      });

      dispatch(success(countriesData));
    })
    .catch((error) => { throw error; });
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_DATA:
      return { data: action.countries, status: 'success' };

    default:
      return state;
  }
};

export default countriesReducer;
