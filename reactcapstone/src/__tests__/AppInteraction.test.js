import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as reactRedux from 'react-redux';
import '@testing-library/jest-dom';
import countryData from '../__mocks__/country';
import CountriesList from '../components/CountriesList';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(() => {}),
}));

describe('Render header', () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
  // Before each test Initialize functions used as a implementation of the mock.
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => { });
    useSelectorMock.mockImplementation((state) => state(countryData));
  });
  // After each test clear the useSelectorMock.
  afterEach(() => {
    useSelectorMock.mockClear();
  });

  describe('App interactions test', () => {
    const useSelectorMock = reactRedux.useSelector;
    const useDispatchMock = reactRedux.useDispatch;

    beforeEach(() => {
      useDispatchMock.mockImplementation(() => () => { });
      useSelectorMock.mockImplementation((state) => state(countryData));
    });
    afterEach(() => {
      useSelectorMock.mockClear();
    });

    test('Display countries', async () => {
      const countriesData = useSelectorMock(
        (mockStore) => mockStore.Countries,
      );
      render(
        <BrowserRouter>
          <CountriesList countries={countriesData} />
          ,
        </BrowserRouter>,
      );
      const country = await screen.getByRole('link', { name: /france/i });
      await waitFor(() => {
        expect(country).toBeInTheDocument();
      });
    });

    test('Assert detail page by clicking on a card', async () => {
      const countriesData = useSelectorMock(
        (mockStore) => mockStore.Countries,
      );
      render(
        <BrowserRouter>
          <CountriesList countries={countriesData} />
          ,
        </BrowserRouter>,
      );
      const country = await screen.getByRole('link', { name: /france/i });
      fireEvent.click(country);
      const confirmed = await waitFor(() => screen.getByText(/france/i));
      expect(confirmed).toBeInTheDocument();
    });
  });
});
