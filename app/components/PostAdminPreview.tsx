import { NextPage } from "next";
import DeletePost from "./DeletePost";
import Heading from "./UI_components/Heading";

interface Props {
  post: {
    title: string;
    text: string;
    _id: string;
    published: boolean;
  };
  refresher: boolean;
  setRefresher: any;
}

const PostAdminPreview: NextPage<Props> = ({
  post,
  refresher,
  setRefresher,
}) => {
  return (
    <div className="bg-purewhite shadow-md p-4 rounded">
      <a href={`/posts/${post._id}`}>
        <Heading title={post.title} />
      </a>
      {post.published ? (
        <p className="text-grey">Is published</p>
      ) : (
        <p className="text-grey">Not published</p>
      )}
      <div className="flex justify-between mt-4">
        <a href={`/posts/${post._id}/update`}>Edit</a>
        <DeletePost
          id={post._id}
          refresher={refresher}
          setRefresher={setRefresher}
        />
      </div>
    </div>
  );
};

export default PostAdminPreview;
