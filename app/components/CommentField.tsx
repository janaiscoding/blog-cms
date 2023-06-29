"use client";

import { useState } from "react";
import { createComment, opts_post_comment } from "../utils/api_actions";

const CommentField = ({ API_PAGE_ID, refresher, setRefresher }: any) => {
  const [name, setName] = useState(String);
  const [comment, setComment] = useState(String);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    opts_post_comment.body = JSON.stringify({ comment, name });
    createComment(API_PAGE_ID, opts_post_comment, refresher, setRefresher);
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="p-2"
      ></input>
      <textarea
        onChange={(e) => setComment(e.target.value)}
        placeholder="Your comment"
        className="p-2"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentField;
