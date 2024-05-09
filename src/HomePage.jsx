import React, { useContext, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import DataContext from "./context/DataContext";
import PostCard from "./Post.card";

const Home = () => {
  const { postedData, error, setError, loggedInUser } = useContext(DataContext);

  useEffect(() => {
    if (postedData.length === 0) {
      setError("No data found");
    } else {
      setError(null);
    }
  }, [postedData, setError]);

  return (
    <div className="">
      <Nav />
      <div className="min-h-full  bg-zinc-600">
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {error && <h1 className="justify-center flex mt-16">{error}</h1>}

            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 pt-8 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {postedData.map((post) => (
                <PostCard
                  post={post}
                  key={post.id}
                  loggedInUser={loggedInUser}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
