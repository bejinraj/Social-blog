import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "./context/DataContext";

const Nav = () => {
  const navigate = useNavigate();
  const { logOut, loggedInUser } = useContext(DataContext);
  return (
    <>
      <div className="">
        <div className=" flex justify-between border-b-2 items-baseline flex-nowrap">
          <h1 className=" font-bold text-2xl px-16 py-6">Social Media</h1>
          {loggedInUser ? (
            <div id="loggedInUser" className="pr-10 flex">
              <Link to="/newpost" className=" px-5 py-2 font-semibold">
                Add post
              </Link>
              <Link to="/profilepage" className=" px-5 py-2 font-semibold">
                profile
              </Link>
              <button
                onClick={() => {
                  logOut();
                  navigate("/signin");
                }}
                className=" px-5 py-2 font-semibold"
              >
                Log out
              </button>
            </div>
          ) : (
            <div id="notLoggedInUser" className="flex pr-10">
              <Link
                to="/signin"
                className="px-5 py-2 font-semibold bg-indigo-500 rounded-md mx-4"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className=" px-5 py-2 font-semibold bg-indigo-500 rounded-md"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
