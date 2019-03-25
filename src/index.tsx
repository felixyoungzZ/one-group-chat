import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { StoreProvider } from './store';
import { App } from './App';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('app'),
);