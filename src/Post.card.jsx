import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import DataContext from "./context/DataContext";

const PostCard = ({ post, loggedInUser }) => {
  const navigate = useNavigate();
  const { postedData, setPostedData, setPost } = useContext(DataContext);

  const deletePost = (id) => {
    const filteredPost = postedData.filter((task) => task.id !== id);
    setPostedData(filteredPost);
    localStorage.setItem("postedData", JSON.stringify([filteredPost]));
  };

  const editPost = (post) => {
    const findPost = postedData.find((p) => p.id === post);
    setPost(findPost);
  };

  return (
    <article
      className="flex max-w-xl flex-col items-start justify-between shadow-xl rounded p-3 "
    >
      <div className="flex items-center justify-between gap-x-4 text-xs">
        <time dateTime={post.datetime} className="text-gray-500">
          {post.date}
        </time>
        <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
          {post.category}
        </p>
        {post.user.name === loggedInUser?.name && (
          <button
            onClick={() => {
              editPost(post.id);
              navigate("/newpost");
            }}
            className=" text-xl text-gray-800 hide:hidden"
          >
            <FaEdit />
          </button>
        )}
        {post.user.name === loggedInUser?.name && (
          <button
            onClick={() => deletePost(post.id)}
            className=" text-xl text-gray-800 hide:hidden"
          >
            <MdDelete />
          </button>
        )}
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <span className="absolute inset-0" />
          {post.title}
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {post.description}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img src="" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <span className="absolute inset-0" />
            {post.user.name}
          </p>
          <p className="text-gray-600">{post.role}</p>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
