import React, {createContext, useContext, useState} from 'react';
import './App.css'

const UserContext = createContext({});

function UserProvider({children}) {
    const user = {name: "Alice", age: 25};

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

function UserProfile() {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Nom : {user.name}</h1>
            <p>Âge : {user.age}</p>
        </div>
    );
}

function App() {
    return (
        <UserProvider>
            <div>
                <h1>Bienvenue à l'application</h1>
                <UserProfile/>
            </div>
        </UserProvider>
    )
}

export default App
