const initialState = {
  userAuth: false
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_AUTH":
      return {...state, userAuth: action.payload};

    default:
      return state
  }
}