import * as React from 'react';
import { useReducer } from 'react';

interface State {
  is_connected:boolean;
}

interface Action {
  type:string;
  payload:any;
}

interface Context {
  state:State;
  dispatch:React.Dispatch<Action>;
}

const initState:State = {
  is_connected: false,
};

function reducer(state:State, action:Action) {
  switch (action.type) {
    case 'CONNECTED':
      return { ...state, is_connected: action.payload };
    default:
      return state;
  }
}

export const Store = React.createContext<Context>({
  state: initState,
  dispatch: (actions:Action) => { return; },
});

export function StoreProvider(props:any) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Store.Provider value= { { state, dispatch } }>
      { props.children }
    </Store.Provider>
  );
}