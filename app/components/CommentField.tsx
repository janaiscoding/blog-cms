"use client";

import { useEffect, useState } from "react";
import { createComment, opts_post_comment } from "../utils/api_actions";
import Button from "./UI_components/Button";
import Subheading from "./UI_components/Subheading";

const CommentField = ({ API_PAGE_ID, refresher, setRefresher }: any) => {
  const [name, setName] = useState(String);
  const [comment, setComment] = useState(String);
  const [errors, setErrors] = useState([]);
  const handleClear = () => {
    setName("");
    setComment("");
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    opts_post_comment.body = JSON.stringify({ name, comment });
    createComment(
      API_PAGE_ID,
      opts_post_comment,
      refresher,
      setRefresher,
      setErrors,
      handleClear
    );
  };
  return (
    <form
      className="flex flex-col gap-2 max-w-md"
      onSubmit={(e) => handleSubmit(e)}
    >
      <Subheading title="Write your thoughts.." />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="p-2"
        required
      ></input>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Your comment"
        className="p-2"
        required
      ></textarea>
      <div>
        {errors
          ? errors.map((e: { msg: string }, i) => (
              <p className="text-xs" key={i}>
                {e.msg}
              </p>
            ))
          : ""}
      </div>
      <div>
        <Button
          type="submit"
          content="Submit"
          //do nothing in particular because it's a form submit handler
          onClick={() => {
            return;
          }}
        />
      </div>
    </form>
  );
};

export default CommentField;