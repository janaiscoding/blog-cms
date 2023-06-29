"use client";
import { useEffect, useRef, useState } from "react";
import { createPost, opts_post } from "@/app/utils/api_actions";
import { API_NEW_POST } from "@/app/utils/api_keys";

import { getJwtToken } from "@/app/utils/authentication";
import { redirect } from "next/navigation";
import Form from "@/app/components/UI_components/Form";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [published, setPublished] = useState(false);
  const [newPostId, setNewPostId] = useState(String); //maybe using this to then redirect/view the post

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    opts_post.body = JSON.stringify({ title, text, published });
    createPost(API_NEW_POST, opts_post, setNewPostId);
  };

  useEffect(() => {
    const jwtToken = getJwtToken();
    if (!jwtToken) {
      redirect("/admin");
    }
  }, []);
  return (
    <div className="h-screen px-6">
      <Form
        hTitle={"Create a new blog post"}
        title={title}
        text={text}
        pubd={published}
        setTitle={setTitle}
        setText={setText}
        setPubd={setPublished}
        onSubmit={(e: any) => handleSubmit(e)}
      />
    </div>
  );
};
export default NewPost;
