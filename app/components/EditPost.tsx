"use client";

import { useEffect, useState } from "react";
import { opts_put, updatePost } from "../utils/api_actions";
import Form from "./UI_components/Form";
import { redirect } from "next/navigation";

const EditPost = ({ title, text, published, API_PAGE_ID, postId }: any) => {
  const [updatedTitle, setUpdatedTitle] = useState(String);
  const [updatedText, setUpdatedText] = useState(String);
  const [updatedPublished, setPublished] = useState(Boolean);
  const [updated, setUpdated] = useState(Boolean);
  const handleUpdate = async (e: any) => {
    e.preventDefault();
    opts_put.body = JSON.stringify({
      title: updatedTitle,
      text: updatedText,
      published: updatedPublished,
    });
    await updatePost(API_PAGE_ID, opts_put, setUpdated);
  };

  useEffect(() => {
    if (text !== undefined) {
      setUpdatedText(text);
    }
    if (title !== undefined) {
      setUpdatedTitle(title);
    }
    if (published !== undefined) {
      setPublished(published);
    }
    if(updated){
      redirect(`/posts/${postId}`)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, text, published, updated]);
  return (
    <div>
      <Form
        hTitle="Update this post"
        title={updatedTitle}
        text={updatedText}
        pubd={updatedPublished}
        setTitle={setUpdatedTitle}
        setText={setUpdatedText}
        setPubd={setPublished}
        onSubmit={handleUpdate}
      />
    </div>
  );
};

export default EditPost;
