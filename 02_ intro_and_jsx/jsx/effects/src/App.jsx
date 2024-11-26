import "./styles.css";
import React from "react";

const users = [
    { id: 1, name: "Marie" },
    { id: 2, name: "Pierre" },
];

export default function App() {
    const [id, setId] = React.useState("Chargement...");
    const [name, setName] = React.useState("Chargement...");

    const fetchUser = React.useCallback(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(users[0]);
            }, 1000);
        });
    }, []);

    React.useEffect(() => {
        fetchUser().then((user) => {
            setId(user.id);
            setName(user.name);
        });
    });

    return (
        <>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
        </>
    );
}
