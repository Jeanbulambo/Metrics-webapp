import renderer from 'react-test-renderer';
import MockAppComponent from '../__mocks__/App';
import * as Redux from '../Redux/Countries/Countries';
import '@testing-library/jest-dom';
import countryData from '../__mocks__/country';

jest.spyOn(Redux, 'fetchCountriesData')
  .mockImplementation(() => (Redux.success(countryData)));

describe('Render App', () => {
  test('Assert snapshot', () => {
    const appSnap = renderer.create(
      <MockAppComponent />,
    ).toJSON();
    expect(appSnap).toMatchSnapshot();
  });
});
