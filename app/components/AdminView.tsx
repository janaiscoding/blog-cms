"use client";
import { useEffect, useState } from "react";
import { fetchAllPosts, opts_get } from "../utils/api_actions";
import { API_ALL_POSTS } from "../utils/api_keys";
import PostAdminPreview from "./PostAdminPreview";
import Heading from "./UI_components/Heading";
import Button from "./UI_components/Button";
import { redirect } from "next/navigation";

const AdminView = () => {
  const [posts, setPosts] = useState([]);
  const [refresher, setRefresher] = useState(Boolean);
  const allPosts = posts.map((post: any, i) => (
    <PostAdminPreview
      key={i}
      post={post}
      refresher={refresher}
      setRefresher={setRefresher}
    />
  ));
  const linkTo = () => {
    console.log('redirecting...')
    redirect("/new");
  };
  useEffect(() => {
    fetchAllPosts(API_ALL_POSTS, opts_get, setPosts);
  }, [refresher]);

  return (
    <div className="p-10 min-h-screen">
      <div className="flex items-center gap-20 my-6">
        <Heading title={"Admin View"} />
        <Button content={"New post"} type={"button"} onClick={linkTo} />
      </div>
      <div className="grid grid-cols-3 gap-3">{allPosts}</div>
    </div>
  );
};

export default AdminView;
