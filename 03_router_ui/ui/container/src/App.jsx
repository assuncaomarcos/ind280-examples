import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function App() {
    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Exemple d'utilisation de Container
                </Typography>
                <Typography variant="body1">
                    Contenu centré horizontalement et limité à une largeur maximale définie par le conteneur.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 3 }}>
                    Cliquez ici
                </Button>
            </Box>
        </Container>
    );
}

export default App;