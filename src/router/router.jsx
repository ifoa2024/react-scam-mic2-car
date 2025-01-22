import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Homepage from "../pages/Homepage";
import Info from "../pages/Info";
import AuthLayout from "../components/AuthLayout";
import Register from "../pages/Register";
import { getDetailData, getInfoData } from "../loaders/loaders";
import routes from "../routes/routes";
import Detail from "../pages/Detail";

const router = createBrowserRouter([
    {
        path: routes.home,
        Component: Layout,
        children: [
            {
                path: routes.home,
                Component: Homepage
            },
            {
                path: routes.info,
                Component: Info,
                loader: getInfoData
            },
            {
                path: routes.detail,
                Component: Detail,
                loader: getDetailData
            },
            // {
            //     path: routes.todo,
            //     Component: todo,
            // }
        ]
    },
    {
        path: routes.auth,
        Component: AuthLayout,
        children: [
            {
                path: routes.register,
                Component: Register
            }
        ]
    }
])

export default router;