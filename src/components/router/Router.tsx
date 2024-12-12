import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Registration from "../Registration";
import App from "../../App";



const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/login",
              element: <Login />,
            },
            {
              path: "/registration",
              element: <Registration />,
            },
        ]
    },

])

export default router