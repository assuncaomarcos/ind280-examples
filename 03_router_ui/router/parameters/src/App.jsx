import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersContainer from "./UsersContainer";


const router = createBrowserRouter([
    {
        path: "/",
        element: <UsersContainer />,
        errorElement: <p>Route introuvable</p>
    },
]);

export default () => <RouterProvider router={router} />;

