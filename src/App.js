import { Route, Routes } from "react-router-dom";
import Home from "./HomePage";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import Missing from "./Missing";
import NewPost from "./NewPost";
import ForgotPassword from "./ForgotPassword";
import { DataProvider } from "./context/DataContext";
import ProfilePage from "./ProfilePage";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="*" element={<Missing />} />
        <Route path="/profilepage" element={<ProfilePage />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
