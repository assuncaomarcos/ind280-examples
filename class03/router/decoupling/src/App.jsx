import "./styles.css";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Layout from "./Layout";
import usersRoute from "./users";
import messagesRoute from "./messages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <p>Routes imbriquées</p>
            },
            usersRoute,
            messagesRoute
        ],
    },
]);

export default () => <RouterProvider router={router} />;
