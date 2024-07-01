import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import EditBlog from "./pages/EditBlog";
import DeleteBlog from "./pages/DeleteBlog.jsx";
import UserProfile from "./pages/UserProfile";
import Authors from "./pages/Authors";
import CategoryBlogs from "./pages/CategoryBlogs";
import AuthorBlogs from "./pages/AuthorBlogs";
import Dashboard from "./components/Dashboard.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CreateBlog from "./pages/CreateBlog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "blogs/:id", element: <BlogDetail /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "blogs/:id/edit", element: <EditBlog /> },
      { path: "blogs/:id/delete", element: <DeleteBlog /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "authors", element: <Authors /> },
      { path: "create", element: <CreateBlog /> },
      { path: "blogs/categories/:category", element: <CategoryBlogs /> },
      { path: "blogs/users/:id", element: <AuthorBlogs /> },
      { path: "myBlogs/:id", element: <Dashboard /> },
      { path: "logout", element: <Logout /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "userProfile", element: <UserProfile /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
