"use client";
import {
  deleteComment,
  opts_delete,
  opts_put,
  updateComment,
} from "@/app/utils/api_actions";
import { useState } from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";

const Comment = ({
  name,
  comment,
  time,
  commId,
  postId,
  refresher,
  setRefresher,
}: {
  name: string;
  comment: string;
  time: any;
  commId: string;
  postId: string;
  refresher: boolean;
  setRefresher: any;
}) => {
  const [show, setShow] = useState<boolean>(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedComment, setUpdatedComment] = useState(comment);
  const API_COMMENT_ID = `https://janas-blog-api.fly.dev/posts/${postId}/${commId}`;

  const handleDelete = async () => {
    deleteComment(API_COMMENT_ID, opts_delete, refresher, setRefresher);
  };
  const handleSave = async (e: any) => {
    e.preventDefault();
    opts_put.body = JSON.stringify({ name: updatedName, comment: updatedComment });
    updateComment(API_COMMENT_ID, opts_put, refresher, setRefresher);
    setShow(!show);
  };

  return (
    <div className="bg-purewhite p-4 flex flex-col gap-2 shadow-md max-w-md">
      {show ? (
        <form
          className="flex flex-col max-w-md"
          onSubmit={(e) => handleSave(e)}
        >
          <Subheading title={"Edit comment"} />
          <input
            defaultValue={updatedName}
            className="p-2"
            required
            type="text"
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            defaultValue={updatedComment}
            className="p-2"
            required
            type="text"
            onChange={(e) => setUpdatedComment(e.target.value)}
          />
          <button className="btn btn-primary self-start mt-2" type="submit">
            Save
          </button>
        </form>
      ) : (
        <div>
          <p className="text-black font-bold text-xl">{name}</p>
          <p className="">{comment}</p>
          <p className="text-grey text-sm font-italic">
            Written on {new Date(time).toLocaleDateString()},{" "}
            {new Date(time).toLocaleTimeString()}
          </p>{" "}
        </div>
      )}
      <div className="flex justify-between">
        <button className="btn btn-neutral" onClick={() => setShow(!show)}>
          {show ? "Cancel" : "Edit"}
        </button>
        <button className="btn btn-neutral" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Comment;
