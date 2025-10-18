import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Page404 from "../pages/Page404/Page404";
import Families from "../pages/Families/Families";
import AllFamilies from "../pages/Families/AllFamilies/AllFamilies";
import AddFamilies from "../pages/Families/AddFamilies/AddFamilies";

const routes = createBrowserRouter([
    { path: "/login", element: <Login /> },

    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Layout />
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <Home /> },
            { path: "*", element: <Page404 /> },
            {
                path: "/families",
                element: <Families />,
                children: [
                    { path: "/families/all-families", element: <AllFamilies /> },
                    { path: "/families/add-families", element: <AddFamilies /> }
                ]
            }
        ]
    }
])

export default routes;