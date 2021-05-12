export const initialState = {
  content: '',
  open: false,
  type: null,
};

export const SnackBarReducer = (initialState, action) => {
  switch (action.type) {
    case 'OPEN_SNACKBAR':
      return {
        ...initialState,
        content: action.payload.content,
        open: true,
        type: action.payload.type,
      };
    case 'CLOSE_SNACKBAR':
      return {
        ...initialState,
        open: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
