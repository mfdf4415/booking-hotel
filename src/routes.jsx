import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./components/Layouts/HomeLayout";
import HomePage from "./pages/HomePage";
import HotelsLayout from "./components/Layouts/HotelsLayout";
import HotelsPage from "./pages/HotelsPage";
import HotelDetailsPage from "./pages/HotelDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [{ element: <HomePage />, path: "" }],
  },
  {
    path: "/hotels",
    element: <HotelsLayout />,
    children: [
      { element: <HotelsPage />, path: "" },
      { element: <HotelDetailsPage />, path: ":id" },
    ],
  },
]);
