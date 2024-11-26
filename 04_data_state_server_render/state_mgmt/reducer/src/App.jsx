import React, {useReducer} from 'react';
import {
  Typography,
  TextField,
  Container,
  Grid2,
  Button,
  Box
} from "@mui/material";

const initialState = {
  name: '',
  age: '',
  email: ''
};

function userReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const headerStyle = {
  textAlign: "center",
  padding: "8px 16px",
};

function UserForm() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const handleInputChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.id,
      value: e.target.value
    });
  };

  const handleReset = () => {
    dispatch({type: 'RESET'});
  };

  return (
    <Container maxWidth="md">
      <Typography sx={headerStyle} variant="h3" component="h3">Formulaire utilisateur</Typography>
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <TextField margin="dense" fullWidth variant="outlined"
                     id="name"
                     label="Nom:"
                     placeholder="Entrez votre nom"
                     value={state.name}
                     onChange={handleInputChange}
          />
        </Grid2>
        <Grid2 size={{xs: 12, md: 4}}>
          <TextField fullWidth
                     margin="dense"
                     type="number"
                     id="age"
                     label="Âge"
                     placeholder="Votre age"
                     value={state.age}
                     onChange={handleInputChange}
          />
        </Grid2>
        <Grid2 size={{xs: 12, md: 8}}>
          <TextField fullWidth margin="dense" variant="outlined"
                     type="email"
                     id="email"
                     label="E-mail:"
                     placeholder="Entrez votre adresse courriel"
                     value={state.email}
                     onChange={handleInputChange}
          />
        </Grid2>
        <Grid2 size={12} sx={{textAlign: "center"}}>
          <Button color="primary" variant="contained" onClick={handleReset}>Réinitialiser</Button>
        </Grid2>
      </Grid2>
      <Box sx={{mt: "20px"}}>
        <Typography sx={headerStyle} component="h3" variant="h3">Résumé des
          informations</Typography>
        <Typography sx={{my: 4}} variant="body1">Nom : {state.name}</Typography>
        <Typography sx={{my: 4}} variant="body1">Âge : {state.age}</Typography>
        <Typography sx={{my: 4}} variant="body1">Email : {state.email}</Typography>
      </Box>
    </Container>
  );
}

export default function App() {

  return (
    <div>
      <UserForm/>
    </div>
  )
}
