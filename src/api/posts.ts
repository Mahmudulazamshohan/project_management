import { getPostsAction } from "../redux/actions/postActions";
import { PostActionTypes } from "../redux/types/postTypes";
import { Dispatch } from "redux";
import axios from "axios";
export const getPosts = () => {
  return function (dispatch: Dispatch<PostActionTypes>) {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        dispatch(getPostsAction(data));
      })
      .catch(console.error);
  };
};
export const removePost = (id: number) => {};

