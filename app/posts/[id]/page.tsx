"use client";
import CommentField from "@/app/components/CommentField";
import DeletePost from "@/app/components/DeletePost";
import Comment from "@/app/components/UI_components/Comment";
import Heading from "@/app/components/UI_components/Heading";
import {
  deletePost,
  fetchPost,
  opts_delete,
  opts_get,
} from "@/app/utils/api_actions";
import { PostWithComments } from "@/app/utils/types";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<PostWithComments>();
  const [refresher, setRefresher] = useState(Boolean);
  const API_PAGE_ID = `https://janas-blog-api.fly.dev/posts/${params.id}`;

  //Dangerous by default,but fine in this scenario where I am the only admin and only the fetched posts.text gets html'd
  const createHtml = () => {
    return { __html: post?.text };
  };
  const handleDelete = () => {
    deletePost(API_PAGE_ID, opts_delete, refresher, setRefresher);
  };
  useEffect(() => {
    fetchPost(API_PAGE_ID, opts_get, setPost);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresher]);
  return (
    <div className="flex flex-col gap-2 p-10 min-h-screen">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a href="/">Admin</a>
          </li>
          <li>Post</li>
        </ul>
      </div>

      <Heading title={post?.title} />
      <div
        dangerouslySetInnerHTML={createHtml()}
        className="min-h-[20vh]"
      ></div>
      <div className="flex gap-2">
        <a className="btn btn-neutral self-start" href={`${params.id}/update`}>
          Update
        </a>
        <button className="btn btn-neutral self-start" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {/* comment form field  */}
      <CommentField
        API_PAGE_ID={API_PAGE_ID}
        refresher={refresher}
        setRefresher={setRefresher}
      />
      {/* comment list */}
      <div className="flex flex-col gap-2">
        {post?.comments.map((c, i) => (
          <Comment
            key={i}
            name={c.name}
            comment={c.comment}
            time={c.createdAt}
            id={c._id}
          />
        ))}
      </div>
    </div>
  );
}
