import { getJwtToken } from "./authentication";

async function loginRequest(
  url: string,
  opts: {},
  validErrSetter: any,
  dbErrSetter: any,
  tokenSetter: any,
  loggedSetter: any
) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.token !== undefined) {
        tokenSetter(data.token);
        loggedSetter(true);
      }
      if (data.errors) {
        validErrSetter(data.errors);
        // this will be the express-validator errors
      }
      dbErrSetter(data.message);
      //db error can only be 1: either not found email or wrong password - never both
    })
    .catch((err) => {
      console.log(err.message);
      //other surprising errors
    });
}
async function fetchAllPosts(url: string, opts: {}, setter: any) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      setter(data.posts);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

async function fetchPost(url: string, opts: {}, setter: any) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      setter(data.post);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

async function fetchPublished(url: string, opts: {}, setter: any) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      const published = data.posts.filter(
        (post: { published: boolean }) => post.published === true
      );
      setter(published);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

async function createPost(url: string, opts: {}, setter: any) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      setter(data.post._id);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
async function createComment(
  url: string,
  opts: {},
  refresher: boolean,
  setter: any
) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      setter(!refresher);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
async function updatePost(url: string, opts: {}, setter: any) {
  console.log(url);
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      setter(true);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
async function deletePost(
  url: string,
  opts: {},
  refresher: boolean,
  setter: any
) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      console.log(data, "post was deleted");
      setter(!refresher);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

const opts_get = {
  method: "GET",
};

const opts_post = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getJwtToken()}`,
  },
  body: "",
};
const opts_post_comment = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: "",
};
const opts_put = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getJwtToken()}`,
  },
  body: "",
};
const opts_delete = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getJwtToken()}`,
  },
};

export {
  fetchPost,
  loginRequest,
  fetchAllPosts,
  fetchPublished,
  createPost,
  createComment,
  updatePost,
  deletePost,
  opts_get,
  opts_post,
  opts_post_comment,
  opts_put,
  opts_delete,
};
