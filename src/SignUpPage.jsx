import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "./context/DataContext";

const INITIAL_USER = {
  name: "",
  password: "",
  confirmPassword: "",
};

const SignUpPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(INITIAL_USER);

  const { users, error, setError, setUsers  } =
    useContext(DataContext);

  const addUser = (user) => {
    const checkUser = users.find((u) => u.name === user.name);
    user = { name: user.name, password: user.password };

    if (checkUser) {
      setError("user already exist");
      return user;
    } else {
      setUsers([...users, user]);
      localStorage.setItem("userdata", JSON.stringify([...users, user]));
      setError("Registered successfully");
      navigate("/signin");
    }
  };

  useEffect(() => {
    if (error && (user.name || user.password || user.confirmPassword)) {
      setError(null);
    }
    if (user.password || user.confirmPassword) {
      if (user.password !== user.confirmPassword) {
        setError("password mismatch");
      }
    }
  }, [user]);

  useEffect(() => {
    if (error === "Registered successfully") {
      setUser(INITIAL_USER);
    }
  }, [error]);
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create New Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="text"
                  minLength={5}
                  maxLength={15}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={user.name}
                  onChange={(e) => {
                    setUser({ ...user, name: e.target.value });
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  minLength={5}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={user.password}
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirm-password"
                  name="password"
                  type="password"
                  autoComplete="set-password"
                  minLength={5}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={user.confirmPassword}
                  onChange={(e) => {
                    setUser({ ...user, confirmPassword: e.target.value });
                  }}
                />
              </div>
            </div>
            {error && <p>{error}</p>}
            <div>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  if (
                    user.name === "" ||
                    user.password === "" ||
                    user.confirmPassword === ""
                  ) {
                    setError("inputfield empty");
                  } else {
                    addUser(user);
                  }
                }}
              >
                Sign up
              </button>
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500">
            Already a member?
            <Link
              to="/signin"
              className="pl-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
