import * as routerActions from "./router.actions";

const initialState = {
  redirectData: null
};

const RouterReducer = (state = initialState, action) => {
  switch (action.type) {
    case routerActions.REDIRECT:
      return { ...state, redirectData: action.payload };
    default:
      return state;
  }
};

export default RouterReducer;
