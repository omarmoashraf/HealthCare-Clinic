import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "booking", Component: BookingPage },
    ],
  },
]);
