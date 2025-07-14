import PricingPage from "@/pages/pricing-page";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";
import MinimalLayout from "../layout/MinimalLayout";
import Root from "../layout/Root";
import CreateNewSite from "../pages/create-new-site";
import Dashboard from "../pages/dashboard";
import Error from "../pages/error";
import ForgotPassword from "../pages/forgot-password";
import Home from "../pages/home";
import Login from "../pages/login";
import MyTemplates from "../pages/my-templates";
import RecommendedTemplates from "../pages/recommended-templates";
import ResetPassword from "../pages/reset-password";
import Signup from "../pages/signup";


const router = createBrowserRouter([
    {
        path: "/",
        element:  <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />,
            },
            {
                path: "reset-password",
                element: <ResetPassword />,
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "create-site",
                element: <CreateNewSite />,
            }
        ]
    },
    {
        path: "/templates",
        element: <MinimalLayout />,
        errorElement: <Error />,
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
    {
        path: '/pricing',
        element: <MinimalLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <PricingPage />,
            }
        ]
    }
]);

export default router;