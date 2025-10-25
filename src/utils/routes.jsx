import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Page404 from "../pages/Page404/Page404";
import Families from "../pages/Families/Families";
import AllFamilies from "../pages/Families/AllFamilies/AllFamilies";
import AddFamilies from "../pages/Families/AddFamilies/AddFamilies";
import BrothersOfTheLord from "../pages/BrothersOfTheLord/BrothersOfTheLord";
import AllBrothers from "../pages/BrothersOfTheLord/AllBrothers/AllBrothers";
import AddBrother from "../pages/BrothersOfTheLord/AddBrother/AddBrother";
import Additions from "../pages/Additions/Additions";
import Areas from "../pages/Additions/Areas/Areas";
import Streets from "../pages/Additions/Streets/Streets";
import ReligiousSects from "../pages/Additions/ReligiousSects/ReligiousSects";
import Qualifications from "../pages/Additions/Qualifications/Qualifications";
import FinancialCases from "../pages/Additions/FinancialCases/FinancialCases";
import HealthConditions from "../pages/Additions/HealthConditions/HealthConditions";
import SocialSituations from "../pages/Additions/SocialSituations/SocialSituations";

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
                    { path: "/families/add-familie", element: <AddFamilies /> }
                ]
            },
            {
                path: "/brothers-of-the-lord",
                element: <BrothersOfTheLord />,
                children: [
                    { path: "/brothers-of-the-lord/all-brothers", element: <AllBrothers /> },
                    { path: "/brothers-of-the-lord/add-brother", element: <AddBrother /> }
                ]
            },
            {
                path: "/additions",
                element: <Additions />,
                children: [
                    { path: "/additions/areas", element: <Areas /> },
                    { path: "/additions/streets", element: <Streets /> },
                    { path: "/additions/religious-sects", element: <ReligiousSects /> },
                    { path: "/additions/qualifications", element: <Qualifications /> },
                    { path: "/additions/financial-cases", element: <FinancialCases /> },
                    { path: "/additions/health-conditions", element: <HealthConditions /> },
                    { path: "/additions/social-situations", element: <SocialSituations /> },
                ]
            }
        ]
    }
])

export default routes;