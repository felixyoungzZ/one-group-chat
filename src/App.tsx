import * as React from 'react';
import { Store } from './store';

import * as styles from './style.less';

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
      You are {
        state.is_connected ?
        (<span className={ styles.connected }>connected</span>) :
        (<span className={ styles.disconnected }>disconnected</span>)
      }
    </React.Fragment>
  );
}