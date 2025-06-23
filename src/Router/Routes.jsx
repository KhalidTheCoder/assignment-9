import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Bills from "../pages/Bills";
import Loading from "../components/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/bills",
        Component: Bills,
        loader: () => fetch(`/bills.json`).then((res) => res.json()),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
]);
