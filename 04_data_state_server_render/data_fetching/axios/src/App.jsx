import { useState, useEffect } from 'react';
import API from './api.js';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        API.getUsers(5, 42)
            .then(response => {
                setUsers(response.data);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <div>Chargement des données...</div>;
    }

    if (error) {
        return <div>Erreur : {error}</div>;
    }

    return (
        <>
            <h1>Liste des utilisateurs</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <h2>{user.firstname} {user.lastname}</h2>
                        <p><strong>Email :</strong> {user.email}</p>
                        <p><strong>Adresse :</strong> {user.address.street}, {user.address.city}</p>
                        <p><strong>Téléphone :</strong> {user.phone}</p>
                        <p><strong>Date de naissance :</strong> {user.birthday}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App
