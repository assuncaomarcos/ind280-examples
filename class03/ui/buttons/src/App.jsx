import React, { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AndroidIcon from "@mui/icons-material/Android";
import Stack from "@mui/material/Stack";

export default function App() {
    const [color, setColor] = useState("secondary");

    const updateColor = () => {
        setColor((prevColor) => (prevColor === "secondary" ? "primary" : "secondary"));
    };

    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" color={color} onClick={updateColor}>
                Contenu
            </Button>

            <Button color={color} onClick={updateColor}>
                Texte
            </Button>

            <Button variant="outlined" color={color} onClick={updateColor}>
                Contour
            </Button>

            <IconButton color={color} onClick={updateColor}>
                <AndroidIcon />
            </IconButton>
        </Stack>
    );
}