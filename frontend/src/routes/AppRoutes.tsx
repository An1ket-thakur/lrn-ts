import AppImports from "@/app";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppImports.AuthPage />,
  },
  {
    path: "/apps",
    children: [
      {
        path: "",
        element: <AppImports.HomePage />,
      },
      {
        path: "todo",
        element: <AppImports.Todo />,
      },
    ],
  },
  {
    path: "*",
    element: <AppImports.NotFound />,
  },
]);

export default router;
