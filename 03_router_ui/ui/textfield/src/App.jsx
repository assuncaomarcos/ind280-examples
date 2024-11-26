import React, { useState } from "react";
import TextField from "@mui/material/TextField";

function App() {
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <TextField
            variant="outlined"
            label="Nom"
            value={name}
            onChange={handleChange}
            helperText="Veuillez entrer votre nom complet"
        />
    );
}

export default App;