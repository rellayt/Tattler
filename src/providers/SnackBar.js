import React, { createContext, useContext, useReducer } from 'react';
import { initialState, SnackBarReducer } from '../store/reducers/SnackBar';
import Snackbar from '../components/molecules/SnackBar/Snackbar';

const SnackBarStateContext = createContext();
const SnackBarDispatchContext = createContext();

export const useSnackBarState = () => {
  const context = useContext(SnackBarStateContext);
  if (context === undefined) {
    throw new Error('useSnackBarState must be used within SnackBarProvider');
  }
  return context;
};

export const useSnackBarDispatch = () => {
  const context = useContext(SnackBarDispatchContext);
  if (context === undefined) {
    throw new Error('useSnackBarDispatch must be used within SnackBarProvider');
  }
  return context;
};

export const SnackBarProvider = ({ children }) => {
  const [snackBar, dispatch] = useReducer(SnackBarReducer, initialState);

  return (
    <SnackBarStateContext.Provider value={snackBar}>
      <SnackBarDispatchContext.Provider value={dispatch}>
        {children}
        <Snackbar config={snackBar} />
      </SnackBarDispatchContext.Provider>
    </SnackBarStateContext.Provider>
  );
};
