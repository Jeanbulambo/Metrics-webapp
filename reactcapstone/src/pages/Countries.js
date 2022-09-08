import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMapUrl } from '../assets/Urlmapping';
import Getdata from '../components/Getdata';
import Header from '../components/Navbar';
import './styles/Countries.scss';

const CountriesPage = () => {
  const { data } = useSelector((state) => state.Countries);
  let { name } = useParams();
  const info = data.filter(((country) => (country.id === name)));
  const image = getMapUrl(name.toLowerCase());
  name = name.replace(/_/g, ' ');

  return (
    <>
      <Header message="Country Stats" />
      <div className="country-page">
        <div className="firts-card">
          <div className="map-container">
            <img src={image} alt="Country" className="map" />
          </div>
          <div className="country-header">
            <h2>{name.toUpperCase()}</h2>
            <p>
              {`${info[0].confirm} new infections`}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="country-stats">COUNTRY STATS - 2022</div>
        <Getdata country={info[0].data} />
      </div>
    </>
  );
};

export default CountriesPage;
