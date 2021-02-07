import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

const initialState = {
  error: "",
  loading: false,
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_FAILURE:
      return {
        error: action.payload.error,
        loading: false,
        users: [],
      };

    case FETCH_USERS_SUCCESS:
      return {
        error: "",
        loading: false,
        users: action.payload.users,
      };

    default:
      return state;
  }
};

export default userReducer;
