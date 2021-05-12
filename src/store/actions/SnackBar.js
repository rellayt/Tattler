export const OpenSnackBar = (dispatch, payload) => {
  dispatch({ type: 'OPEN_SNACKBAR', payload });
};

export const CloseSnackBar = (dispatch) => {
  dispatch({ type: 'CLOSE_SNACKBAR' });
};
