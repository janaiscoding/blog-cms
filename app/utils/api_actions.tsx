import { getJwtToken } from "./authentication";

async function loginRequest(
  url: string,
  opts: {},
  validErrSetter: any,
  dbErrSetter: any,
  dataSetter: any,
  loggedSetter: any
) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      console.log(data, "my data from api req");
      if (data.token !== undefined) {
        dataSetter(data);
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

async function createComment(
  url: string,
  opts: {},
  refresher: boolean,
  setter: any,
  errorSetter: any,
  handleClear: any
) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      if (data.errors) {
        errorSetter(data.errors);
        console.log("....Errors");
        setter(!refresher);
      } else {
        handleClear();
        errorSetter([]);
        setter(!refresher);
      }
    })
    .catch((error) => {
      console.log(error.message);
      //unhandled error
    });
}

async function deleteComment(
  url: string,
  opts: {},
  refresher: boolean,
  setter: any
) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setter(!refresher);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
async function updateComment(
  url: string,
  opts: {},
  refresher: boolean,
  setter: any
) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
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
const opts_post_comment = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: "",
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
  deleteComment,
  updateComment,
  opts_get,
  opts_post,
  opts_post_comment,
  opts_put,
  opts_delete,
};
