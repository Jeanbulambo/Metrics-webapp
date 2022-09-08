import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import HomePage from '../pages/HomePage';

it('Check if HomePage page renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <HomePage />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

afterEach(() => {
  jest.clearAllMocks();
});
