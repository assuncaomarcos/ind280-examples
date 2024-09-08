import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid2';
import Typography from "@mui/material/Typography";
import { Stack, styled } from "@mui/material";

const headerFooterStyle = {
    textAlign: "center",
    height: 50,
};
const mainStyle = {
    textAlign: "center",
    padding: "8px 16px",
};

const Item = styled(Paper)(() => ({
    textAlign: "center",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export default function App() {
    return (
        <Grid container spacing={2} sx={{ backgroundColor: "#F3F6F9" }}>
            <Grid size={12}>
                <Item sx={headerFooterStyle}>
                    <Typography sx={mainStyle}>En-tête</Typography>
                </Item>
            </Grid>
            <Grid size="auto">
                <Item>
                    <Stack spacing={1}>
                        <Typography sx={mainStyle}>Élément nav. 1</Typography>
                        <Typography sx={mainStyle}>Élément nav. 2</Typography>
                        <Typography sx={mainStyle}>Élément nav. 3</Typography>
                        <Typography sx={mainStyle}>Élément nav. 4</Typography>
                    </Stack>
                </Item>
            </Grid>
            <Grid size="grow">
                <Item>
                    <Typography sx={mainStyle}>Contenu Principal</Typography>
                </Item>
            </Grid>
            <Grid size={12}>
                <Item sx={headerFooterStyle}>
                    <Typography sx={mainStyle}>Pied de Page</Typography>
                </Item>
            </Grid>
        </Grid>
    );
}