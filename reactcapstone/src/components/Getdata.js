import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';

const CountryItem = (prop) => {
  const { country } = prop;
  return (
    <div className="stats-container">
      <div className="odd">
        <h3>Localization</h3>
        <div className="views">
          <p>{country[0].location}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="even">
        <h3>Confirmed cases</h3>
        <div className="views">
          <p>{country[0].confirmed}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="odd">
        <h3>Deaths</h3>
        <div className="views">
          <p>{country[0].deaths}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="even">
        <h3>Recovered</h3>
        <div className="views">
          <p>{country[0].recovered}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="odd">
        <h3>Population</h3>
        <div className="views">
          <p>{country[0].population}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="even">
        <h3>Life Expectancy</h3>
        <div className="views">
          <p>{country[0].life_expectancy}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="odd">
        <h3>Continent</h3>
        <div className="views">
          <p>{country[0].continent}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="even">
        <h3>Capital City</h3>
        <div className="views">
          <p>{country[0].capital_city}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="odd">
        <h3>Updated</h3>
        <div className="views">
          <p>{country[0].updated}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
    </div>
  );
};

export default CountryItem;
