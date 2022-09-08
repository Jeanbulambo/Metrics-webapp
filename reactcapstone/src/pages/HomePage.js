import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { IoMdMic } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import './styles/Home.scss';
import { getMapUrl } from '../assets/Urlmapping';
import CountriesList from '../components/CountriesList';

const HomePage = () => {
  const { status, data } = useSelector((state) => state.Countries);
  const visibleData = data.filter((country) => country.id !== undefined);
  const [search, setSearch] = useState(visibleData);

  useEffect(() => {
    setSearch(visibleData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const filterData = (e) => {
    const string = e.target.value.toLowerCase();
    const info = visibleData.filter((country) => country.id.toLowerCase().includes(string));
    if (info !== 0) {
      setSearch(info);
    } else {
      setSearch(visibleData);
    }
  };

  const worldMap = getMapUrl('world');

  return (
    <>
      <div className="header-container">
        <div className="ouline-left">
          <h3>2022</h3>
        </div>
        <h4 className="center-title" data-testid="title">most views</h4>
        <div className="header-buttons">
          <button type="button" className="microphone" label="microphone"><IoMdMic /></button>
          <button type="button" className="settings" label="Settings" title="settings"><FiSettings /></button>
        </div>
      </div>
      { status === 'success' && (
      <>
        <div className="firts-card">
          <div className="map-container">
            <img src={worldMap} alt="World Map" className="map" />
          </div>
          <div>
            <h2>COVID-19 </h2>
            <p>Confirm Cases</p>
            <input className="input" type="text" name="search" onChange={filterData} placeholder="Search by country" />
          </div>
        </div>
        <div className="stast">
          STATS BY COUNTRY
        </div>
        <div>
          { search === ''
            ? (
              <div className="countries-container">
                <CountriesList countries={visibleData} />
              </div>
            ) : (<CountriesList countries={search} />)}
        </div>
      </>
      )}
    </>
  );
};

export default HomePage;
