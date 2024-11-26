import { Outlet } from "react-router-dom";
import Redirect from "../Redirect";
import User1 from "./User1";
import User2 from "./User2";

const routes= {
    path: "/users",
    element: <Outlet />,
    children: [
        {
            index: true,
            element: <Redirect path="/users/1" />,
        },
        {
            path: "1",
            element: <User1 />,
        },
        {
            path: "2",
            element: <User2 />,
        },
    ],
};

export default routes;