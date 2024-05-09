import { createContext, useState } from "react";

const INITIAL_POST = {
  id: "",
  title: "",
  description: "",
  date: "",
  datetime: "",
  category: "",
  name: "",
  role: "CEO",
};

const INITIAL_USER = {
  name: "",
  password: "",
  confirmPassword: "",
};

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [postedData, setPostedData] = useState(
    JSON.parse(localStorage.getItem("postedData")) || []
  );
  const [post, setPost] = useState(INITIAL_POST);

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("userdata")) || []
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("LoggedInUser"))
  );
  const [error, setError] = useState(null);

  const [user, setUser] = useState(INITIAL_USER);

  const logOut = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");

    setUser("");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    let message = "";

    if (!/[A-Z]/.test(value)) {
      message += "Password must contain at least one capital letter.\n";
    }

    if (!/[a-z]/.test(value)) {
      message += "Password must contain at least one lowercase letter.\n";
    }

    if (!/\d/.test(value)) {
      message += "Password must contain at least one digit.\n";
    }

    if (value.length < 8) {
      message += "Password must be at least 8 characters long.\n";
    }

    setError(message);
  };

  return (
    <DataContext.Provider
      value={{
        users,
        setUsers,
        error,
        setError,
        loggedInUser,
        setLoggedInUser,
        logOut,
        postedData,
        setPostedData,
        post,
        setPost,
        user,
        setUser,
        INITIAL_POST,
        INITIAL_USER,
        handleChange
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
