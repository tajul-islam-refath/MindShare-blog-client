import "./scss/app.scss";
import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import loader
import Loader from "./components/Loader/Loader.jsx";
import Skeleton from "./components/Skeleton/Skeleton.jsx";

import HomeLayout from "./layout/home/HomeLayout.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Dashboard from "./dashboard/user/Dashboard/Dashboard";
import HomePageSkeleton from "./components/Skeleton/HomePageSkeleton.jsx";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Login = React.lazy(() => import("./pages/Auth/Login/Login.jsx"));
const Registration = React.lazy(() =>
  import("./pages/Auth/Registration/Registration")
);
const SinglePost = React.lazy(() => import("./pages/SinglePost/SinglePost"));

// user Dashboard  pages
const UserDashboard = React.lazy(() =>
  import("./layout/UserDashboard/UserLayout")
);

const CreateProfile = React.lazy(() =>
  import("./pages/CreateProfile/CreateProfile")
);

const CreatePost = React.lazy(() =>
  import("./dashboard/user/CreatePost/CreatePost")
);

const EditProfile = React.lazy(() =>
  import("./dashboard/user/EditProfile/EditProfile")
);

const MyPosts = React.lazy(() => import("./dashboard/user/MyPosts/MyPosts"));

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Navigate to="home" replace={true} />} />
            <Route
              path="home"
              element={
                <HomeLayout>
                  <Suspense fallback={<HomePageSkeleton />}>
                    <Home />
                  </Suspense>
                </HomeLayout>
              }
            />
            <Route path="posts/:postId" element={<SinglePost />} />
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<Registration />} />
          </Route>
          {/* user dashboard */}
          <Route
            path="user"
            element={
              <PrivateRoute>
                <UserDashboard />
              </PrivateRoute>
            }>
            <Route
              index
              element={<Navigate to="/user/dashboard" replace={true} />}
            />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="new-post" element={<CreatePost />} />
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="posts" element={<MyPosts />} />
          </Route>
          <Route path="create-profile" element={<CreateProfile />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
