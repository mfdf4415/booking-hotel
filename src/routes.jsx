import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./components/Layouts/HomeLayout";
import HomePage from "./pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [{ element: <HomePage />, path: "" }],
  },
]);
