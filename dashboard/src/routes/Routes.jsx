import { createBrowserRouter, Navigate } from "react-router-dom";
import MinimalLayout from "../layout/MinimalLayout";
import Root from "../layout/Root";
import CreateNewSite from "../pages/create-new-site";
import Error from "../pages/error";
import Home from "../pages/home";
import MyTemplates from "../pages/my-templates";
import RecommendedTemplates from "../pages/recommended-templates";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            }
        ]
    },
    {
        path: "/create-new-site",
        element: <MinimalLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "",
                element: <CreateNewSite />,
                children: [
                    {
                        path: "recommended",
                        element: <RecommendedTemplates />,
                    },
                    {
                        path: "my-templates",
                        element: <MyTemplates />,
                    },
                    {
                        index: true,
                        element: <Navigate to="recommended" replace />,
                    }
                ]
            },
        ]
    },
]);

export default router;