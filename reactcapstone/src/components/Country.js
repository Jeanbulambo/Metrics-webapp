import { BsArrowRightCircle } from 'react-icons/bs';
import React from 'react';
import { Link } from 'react-router-dom';
import { getMapUrl } from '../assets/Urlmapping';

const Country = (prop) => {
  const { country } = prop;
  const image = getMapUrl(`${country.id.toLowerCase()}`);

  return (
    <li>
      <Link
        to={`/Country/${country.id}`}
      >
        <div className="country">
          <div className="arrow">
            <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
          </div>
          <div className="country-img-container">
            <img src={image} alt="World Map" className="country-img" />
          </div>
          <div className="country-data">
            <h2 className="country-name">{country.name.toUpperCase()}</h2>
            <p className="country-p">
              {country.confirm}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Country;
