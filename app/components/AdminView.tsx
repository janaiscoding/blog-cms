"use client";
import { useEffect, useState } from "react";
import { fetchAllPosts, opts_get } from "../utils/api_actions";
import { API_ALL_POSTS } from "../utils/api_keys";
import PostAdminPreview from "./PostAdminPreview";
import Heading from "./UI_components/Heading";
import Button from "./UI_components/Button";
import { redirect } from "next/navigation";
import Subheading from "./UI_components/Subheading";
import { getUserName } from "../utils/authentication";

const AdminView = () => {
  const [posts, setPosts] = useState([]);
  const [refresher, setRefresher] = useState(Boolean);
  const [username, setUserName] = useState<any>()
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
    setUserName(getUserName)
    fetchAllPosts(API_ALL_POSTS, opts_get, setPosts);
  }, [refresher]);

  return (
    <div className="p-10 min-h-screen">
      <div className="flex flex-col items-start gap-1 my-6">
        <Subheading title={` Welcome back, ${username}`} />
        <a className="btn btn-neutral" href="/new">New post</a>
      </div>
      <div className="grid grid-cols-3 gap-3">{allPosts}</div>
    </div>
  );
};

export default AdminView;
