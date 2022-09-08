import './styles/Error.scss';
import Header from '../components/Navbar';
import { getMapUrl } from '../assets/Urlmapping';

const ErrorPage = () => {
  const worldMap = getMapUrl('world');

  return (
    <>
      <Header message="Not Found" />
      <div className="error-page">
        <div className="map-container">
          <img src={worldMap} alt="World Map" className="map" />
        </div>
        <div>
          <h1>DAILY STATISTICS</h1>
          <h2>COVID-19 </h2>
          <p>Confirm Cases</p>
        </div>
      </div>
      <div className="error-message"><h2>Page Not Found</h2></div>
    </>
  );
};

export default ErrorPage;
