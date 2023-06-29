type Post = {
  title: string;
  text: string;
  _id: string;
  comments: [];
  createdAt: string;
};

type PostWithComments = {
  title: string;
  text: string | TrustedHTML;
  _id: string;
  comments: [
    {
      comment: string;
      name: string;
      createdAt: string;
      _id: string;
    }
  ];
  published: Boolean;
};

export type { Post, PostWithComments };
