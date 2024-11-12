import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import AuthLayout from "./layout/AuthLayout";
import UserLayout from "./layout/UserLayout";
import Homepage from "./pages/user/Homepage";
import AboutUsPage from "./pages/user/AboutUsPage";
import LoginPage from "./pages/user/LoginPage";
import SignUpPage from "./pages/user/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/about-us", element: <AboutUsPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignUpPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <AuthLayout />,
    children: [{ index: true, element: <Dashboard /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
