import React from "react";
import {
    createBrowserRouter, Outlet, RouterProvider,
    matchPath, NavLink, useLocation
} from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Home() {
    return <Typography variant="h4">Accueil</Typography>;
}

function Settings() {
    return <Typography variant="h4">Paramètres</Typography>;
}

function Profile() {
    return <Typography variant="h4">Profil</Typography>;
}

const pages = [
    { path: "/", title: "Accueil", element: <Home /> },
    { path: "/settings", title: "Paramètres", element: <Settings /> },
    { path: "/profile", title: "Profile", element: <Profile /> },
];

function useRouteMatch(patterns) {
    const { pathname } = useLocation();

    for (let pattern of patterns) {
        const match = matchPath(pattern, pathname);
        if (match !== null) {
            return match;
        }
    }
    return null;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <RouteLayout />,
        children: [...pages],
    },
]);

function RouteLayout() {
    const paths = pages.map(page => page.path);
    const routeMatch = useRouteMatch(paths);
    const currentTab = routeMatch?.pattern?.path;

    return (
        <Box>
            <Tabs value={currentTab}>
                {pages.map(page => (
                    <Tab key={page.path} label={page.title} component={NavLink} to={page.path} value={page.path} />
                ))}
            </Tabs>
            <Outlet />
        </Box>
    );
}

export default function App() {
    return <RouterProvider router={router} />;
}
