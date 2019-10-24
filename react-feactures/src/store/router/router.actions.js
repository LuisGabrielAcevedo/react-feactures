export const REDIRECT = "[Router] Redirect";

const startRedirectAction = redirectData => {
  return {
    type: REDIRECT,
    payload: redirectData
  };
};

const redirectAction = redirectData => {
  return dispatch => {
    dispatch(startRedirectAction(redirectData));
  };
};

export { redirectAction };
