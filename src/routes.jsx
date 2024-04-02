import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./components/Layouts/HomeLayout";
import HomePage from "./pages/HomePage";
import HotelsLayout from "./components/Layouts/HotelsLayout";
import HotelsPage from "./pages/HotelsPage";
import HotelDetailsPage from "./pages/HotelDetailsPage";
import MapLayout from "./components/Layouts/MapLayout";
import MapPage from "./pages/MapPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [{ element: <HomePage />, path: "" }],
  },
  {
    path: "/map",
    element: <MapLayout />,
    children: [{ element: <MapPage />, path: "" }],
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
