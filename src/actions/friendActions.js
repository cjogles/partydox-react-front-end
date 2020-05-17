import AxiosWithAuth from "../utils/AxiosWithAuth";
import * as t from "./types";

export const getFriend = () => (dispatch) => {
  let id = localStorage.getItem("id");
  AxiosWithAuth()
    .get(`/friends/user/${id}`)
    .then((res) => {
      dispatch({ type: t.GET_FRIEND, payload: res.data[0] });
    })
    .catch((err) => {
      console.log(err);
    });
};
