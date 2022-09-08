import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import ErrorPage from './pages/NotFound';
import HomePage from './pages/HomePage';
import { fetchCountriesData } from './Redux/Countries/Countries';
import CountriesPage from './pages/Countries';

const App = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.Countries);

  useEffect(() => {
    if (status === 'Not Fetched') {
      dispatch(fetchCountriesData());
    }
  });

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Country/:name" element={<CountriesPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
