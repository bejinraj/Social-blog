import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import DataContext from "./context/DataContext";

const SignInPage = () => {
  const navigate = useNavigate();
  const { error, setError, user, setUser, users, setLoggedInUser } =
    useContext(DataContext);

  useEffect(() => {
    if (error && (user.name || user.password)) {
      setError(null);
    }
  }, [user]);

  const login = (user) => {
    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };

  const logInUser = () => {
    const checkLoginUser = users.find((u) => u.name === user.name);

    if (checkLoginUser) {
      if (checkLoginUser.password === user.password) {
        login(checkLoginUser);
        navigate("/", { replace: true });
      } else {
        setError("invalid password");
      }
    } else {
      setError("invalid username");
    }
  };

  return (
    <>
      <div className="">
        <span
          onClick={() => {
            navigate("/");
          }}
          className="flex float-right items-center p-6 text-xl text-indigo-600 mr-4"
        >
          Skip <MdKeyboardArrowRight />
        </span>
      </div>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm  font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  name="text"
                  type="text"
                  autoComplete="text"
                  autoFocus
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
              <label
                htmlFor="role"
                className="block text-sm  font-medium leading-6 text-gray-900"
              >
                Role
              </label>
              <div className="mt-2">
                <input
                  name="text"
                  type="text"
                  autoComplete="text"
                  autoFocus
                  minLength={5}
                  maxLength={15}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={user.role}
                  onChange={(e) => {
                    setUser({ ...user, role: e.target.value });
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm  font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="/forgotpassword"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forget password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
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
            {error && <p>{error}</p>}
            <div>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
                onClick={() => logInUser()}
              >
                Sign in
              </button>
            </div>
            <p className="mt-4 text-center text-sm text-gray-500">
              Not a member?
              <span
                onClick={() => {
                  navigate("/signup");
                }}
                className="pl-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
