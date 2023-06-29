"use client";
import { useEffect, useState } from "react";
import { fetchPublished } from "../utils/api_actions";
import { opts_get } from "../utils/api_actions";
import { API_ALL_POSTS } from "../utils/api_keys";
import { Post } from "../utils/types";
import Heading from "../components/UI_components/Heading";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetchPublished(API_ALL_POSTS, opts_get, setPosts);
  }, []);
  return (
    <main className="h-min-screen flex flex-col items-start justify-center p-24 gap-24">
      <Heading title={"Published blog posts"} />
      {posts.map((post, i) => (
        <p key={i}>{post.title}</p>
      ))}
    </main>
  );
};
export default Posts;
