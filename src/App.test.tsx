import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import store from "./redux/rootStore";
import { Provider } from 'react-redux';

test('renders App', () => {
  const { getAllByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
  );
  expect(getAllByText(/Finder/i)).toHaveLength(1);
  expect(getAllByText(/Davydenko/i)).toHaveLength(1);
});
