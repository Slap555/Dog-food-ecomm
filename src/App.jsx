import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import AuthLayout from "./layout/AuthLayout";
import UserLayout from "./layout/UserLayout";
import Homepage from "./pages/user/Homepage";
import AboutUsPage from "./pages/user/AboutUsPage";
import Account from "./pages/admin/account/Account";
import Category from "./pages/admin/category/Category";
import Product from "./pages/admin/product/Product";
import Blog from "./pages/admin/blog/Blog";
import Order from "./pages/admin/order/Order";

const router = createBrowserRouter([
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
      { index: true, element: <Dashboard /> },
      { path: "account", element: <Account /> },
      { path: "category", element: <Category /> },
      { path: "products", element: <Product /> },
      { path: "blogs", element: <Blog /> },
      { path: "orders", element: <Order /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
