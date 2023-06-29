import { NextPage } from "next";
import { deletePost, opts_delete } from "../utils/api_actions";

interface Props {
  id: string;
  refresher: boolean;
  setRefresher: any;
}

const DeletePost: NextPage<Props> = ({ id, refresher, setRefresher }) => {
  const API_PAGE_ID = `https://janas-blog-api.fly.dev/posts/${id}`;

  const handleDelete = () => {
    deletePost(API_PAGE_ID, opts_delete, refresher, setRefresher);
  };

  return <button onClick={handleDelete}>Delete</button>;
};
export default DeletePost;
