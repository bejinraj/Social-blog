import React, { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "./context/DataContext";

const NewPost = () => {
  const navigate = useNavigate();
  const { post, setPost, postedData, loggedInUser,setPostedData, INITIAL_POST } = useContext(DataContext);

  const addPost = (post) => {
    const date = new Date();
    if (post.id) {
      const selectedPost = postedData.map((data) =>
        data.id === post.id
          ? {
              id: post.id,
              title: post.title,
              category: post.category,
              description: post.description,
              user: loggedInUser,
            }
          : data
      );
      setPostedData(selectedPost);
      console.log(selectedPost);
    } else {
      let newPost = {
        ...post,
        id: postedData.length + 1,
        date: date.toLocaleDateString(),
        datetime: date.toLocaleTimeString(),
        user: loggedInUser,
      };
      setPostedData([...postedData, newPost]);
      setPost(INITIAL_POST);

      localStorage.setItem(
        "postedData",
        JSON.stringify([...postedData, newPost])
      );
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            New Post
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="text"
                  autoComplete="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={post.title}
                  onChange={(e) => {
                    setPost({ ...post, title: e.target.value });
                  }}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Category
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="text"
                  autoComplete="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={post.category}
                  onChange={(e) => {
                    setPost({ ...post, category: e.target.value });
                  }}
                />
              </div>
            </div>

            <textarea
              name="message"
              id="text-message"
              cols="50"
              rows="8"
              placeholder="Description"
              className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={post.description}
              onChange={(e) => {
                setPost({ ...post, description: e.target.value });
              }}
            ></textarea>
            <div className="flex justify-start gap-3">
              <button
                onClick={() => {
                  addPost(post);
                  navigate("/", { replace: true });
                }}
                className=" rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {post.id ? "Update" : "Post"}
              </button>
              <Link
                to="/"
                className="  rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPost;
