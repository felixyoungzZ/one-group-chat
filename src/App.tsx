import * as React from 'react';
import { Store } from './store';

export function App() {

  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    dispatch({
      type: 'CONNECTED',
      payload: true,
    });
  });

  return (
    <React.Fragment>
      { state.is_connected ? 'connected' : 'disconnected' }
    </React.Fragment>
  );
}