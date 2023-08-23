import { UPDATE_USER_DETAILS } from './actionTypes';

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_DETAILS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
