import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./components/Layouts/HomeLayout";
import HomePage from "./pages/HomePage";
import HotelsLayout from "./components/Layouts/HotelsLayout";
import HotelsPage from "./pages/HotelsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [{ element: <HomePage />, path: "" }],
  },
  {
    path: "/hotels",
    element: <HotelsLayout />,
    children: [{ element: <HotelsPage />, path: "" }],
  },
]);
