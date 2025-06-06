import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home";
import Error from "../pages/error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            
        ]
    },
]);

export default router;