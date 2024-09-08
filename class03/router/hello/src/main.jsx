import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ErrorPage from "./ErrorPage";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

function MyComponent() {
    return (<div>Hello world (<strong>Router</strong>)</div>);
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <MyComponent />,
        errorElement: <ErrorPage />,
    },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);