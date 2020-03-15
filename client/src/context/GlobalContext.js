import React, { createContext, useReducer } from 'react';
import { initalState } from '../store/initalState';
import { globalReducer } from '../Reducer/GlobalReducer';

export const GlobalContext = createContext();

const Global = props => {
  const [state, dispatch] = useReducer(globalReducer, initalState);
  return (
    <div>
      <GlobalContext.Provider value={{ state, dispatch }}>
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
};

export default Global;
