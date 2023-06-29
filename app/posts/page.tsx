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
    <main className="flex flex-col p-24 min-h-screen">
      <Heading title={"Published blog posts"} />
      {posts.map((post, i) => (
        <div key={i}>
        <a className="text-blue text-xl" href={`/posts/${post._id}`}>{post.title}</a>
        <p className="text-grey text-sm">Written on {new Date(post.createdAt).toLocaleDateString()} - {post.comments.length} Comments </p>
        </div>
      ))}
    </main>
  );
};
export default Posts;