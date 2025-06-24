import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Bills from "../pages/Bills";
import Loading from "../components/Loading";
import BillDetails from "../pages/BillDetails";
import PrivateRoute from "../components/PrivateRoute";
import Profile from "../pages/Profile";
import UpdateProfile from "../pages/UpdateProfile";

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
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
         path: "/updateprofile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/bills",
        element: (
          <PrivateRoute>
            <Bills></Bills>
          </PrivateRoute>
        ),
        loader: () => fetch(`/bills.json`).then((res) => res.json()),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/billdetails/:id",
        element: (
          <PrivateRoute>
            <BillDetails></BillDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/bills.json").then((res) => res.json()),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
]);
