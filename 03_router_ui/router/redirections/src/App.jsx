import "./styles.css";
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

const checkAuth = () => {
    // Vérification de l'authentification (exemple)
    const isAuthenticated = false;
    if (!isAuthenticated) {
        return redirect('/login');
    }
    return null;
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/dashboard',
        loader: checkAuth,
        element: <Dashboard />,
    },
]);

export default () => <RouterProvider router={router} />;




