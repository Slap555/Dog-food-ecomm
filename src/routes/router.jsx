import { createBrowserRouter, Navigate } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import AuthLayout from "../layout/AuthLayout";
import Homepage from "../pages/user/Homepage";
import AboutUsPage from "../pages/user/AboutUsPage";
import Account from "../pages/admin/account/Account";
import Blog from "../pages/admin/blog/Blog";
import Category from "../pages/admin/category/Category";
import Orders from "../pages/admin/order/Order";
import Product from "../pages/admin/product/Product";
import LoginPage from "../pages/user/LoginPage";
import SignUpPage from "../pages/user/SignUpPage";
import Dashboard from "../pages/admin/Dashboard";
import AddProduct from "../pages/admin/product/AddProduct";
import OrderDetail from "../pages/admin/order/OrderDetail";
import ForgotPasswordPage from "../pages/user/ForgotPasswordPage";

export const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/forgot-pw", element: <ForgotPasswordPage /> },
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/about-us", element: <AboutUsPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <AuthLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "account", element: <Account /> },
      { path: "category", element: <Category /> },
      { path: "products", element: <Product /> },
      { path: "products/add", element: <AddProduct /> },
      { path: "products/edit/:id", element: <AddProduct /> },
      { path: "blogs", element: <Blog /> },
      { path: "orders", element: <Orders /> },
      { path: "orders/:orderId", element: <OrderDetail /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
