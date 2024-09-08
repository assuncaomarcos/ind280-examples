import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Home() {
    return <Typography variant="h4">Accueil</Typography>;
}

function Settings() {
    return <Typography variant="h4">Paramètres</Typography>;
}

function Profile() {
    return <Typography variant="h4">Profil</Typography>;
}

const pages = [
    { url: "/", title: "Accueil", element: <Home /> },
    { url: "/settings", title: "Paramètres", element: <Settings /> },
    { url: "/profile", title: "Profile", element: <Profile /> },
];

const menuStyle = {
    color: "black",
    textDecoration: "none",
};

export default function App() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => setOpen(!open);

    return (
        <BrowserRouter>
            <Box sx={{ display: "flex" }}>
                <Button onClick={toggleDrawer} variant="outlined" sx={{ margin: 2 }}>
                    Ouvrir le menu
                </Button>

                <Drawer open={open} onClose={toggleDrawer}>
                    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
                        <List>
                            {pages.map((page) =>
                                <ListItem button component={NavLink} to={page.url} sx={menuStyle}>
                                    <ListItemText primary={page.title} />
                                </ListItem>
                            )}
                        </List>
                    </Box>
                </Drawer>

                <Box sx={{ flexGrow: 1, padding: 3 }}>
                    <Routes>
                        {pages.map((page) =>
                            <Route path={page.url} element={page.element} />
                        )}
                    </Routes>
                </Box>
            </Box>
        </BrowserRouter>
    );
}
