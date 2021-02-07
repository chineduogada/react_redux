import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

const fetchRequest = () => ({ type: FETCH_USERS_REQUEST });
const fetchFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: { error },
});
const fetchSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users },
});

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchRequest());

  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = data.map((user) => ({ id: user.id }));

    dispatch(fetchSuccess(users));
  } catch (error) {
    dispatch(fetchFailure(error.message));
  }
};
