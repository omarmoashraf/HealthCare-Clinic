import React, { Suspense } from "react";
import { RouterProvider } from "react-router";
import { router } from "./app/routes";
import LoadingScreen from "./app/components/LoadingScreen";

export default function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
