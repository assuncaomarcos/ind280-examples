import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

function App() {
    const [city, setCity] = useState("");

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <FormControl variant="outlined">
            <InputLabel>Ville</InputLabel>
            <Select
                value={city}
                onChange={handleChange}
                label="Ville"
                sx={{ width: 200 }}
            >
                <MenuItem value="">
                    <em>Aucune</em>
                </MenuItem>
                <MenuItem value="Toronto">Toronto</MenuItem>
                <MenuItem value="Montréal">Montréal</MenuItem>
                <MenuItem value="Vancouver">Vancouver</MenuItem>
                <MenuItem value="Calgary">Calgary</MenuItem>
                <MenuItem value="Ottawa">Ottawa</MenuItem>
            </Select>
        </FormControl>
    );
}

export default App;