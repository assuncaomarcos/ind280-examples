import "./styles.css";
import React from 'react';
import { createBrowserRouter, RouterProvider, Link, useLoaderData } from 'react-router-dom';

const API_ENDPOINT = "https://jsonplaceholder.typicode.com/users/";

const fetchUserData = async ({ params }) => {
    const response = await fetch(`${API_ENDPOINT}/${params.id}`);
    if (!response.ok) throw new Error("Échec de la récupération des données utilisateur");
    return response.json();
};

function UserList() {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(API_ENDPOINT);
            const data = await response.json();
            setUsers(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Liste des utilisateurs</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function UserProfile() {
    const user = useLoaderData();

    return (
        <div>
            <h1>Profil de l'utilisateur</h1>
            <p><strong>Nom :</strong> {user.name}</p>
            <p><strong>Email :</strong> {user.email}</p>
            <p><strong>Téléphone :</strong> {user.phone}</p>
            <p><strong>Société :</strong> {user.company.name}</p>
            <p><strong>Site web :</strong> {user.website}</p>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserList />,
    },
    {
        path: '/user/:id',
        loader: fetchUserData,
        element: <UserProfile />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;


