import { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'https://fakerapi.it/api/v2/persons?_locale=fr_FR&_quantity=5&_seed=42';

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the list of users
        fetch(API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                return response.json();
            })
            .then(data => {
                setUsers(data.data);
            })
            .catch(error => {
                setError(error.message);
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

export default App;