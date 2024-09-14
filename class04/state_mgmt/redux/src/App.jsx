import store from './store.js';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from './slice.js';
import {Typography, Grid2, Button, Container} from "@mui/material";

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <Container maxWidth="md">
      <Grid2 maxWidth="md" container spacing={{xs: 2, md: 2}} sx={{textAlign: "center"}}
             columns={{xs: 1, sm: 3, md: 12}}>
        <Grid2 size={{xs: 1, sm: 1, md: 4}}>
          <Button fullWidth variant="contained" onClick={() => dispatch(increment())}>
            Increment
          </Button>
        </Grid2>
        <Grid2 size={{xs: 1, sm: 1, md: 4}}>
          <Typography variant="h2" component="h2">{count}</Typography>
        </Grid2>
        <Grid2 size={{xs: 1, sm: 1, md: 4}}>
          <Button fullWidth variant="contained" onClick={() => dispatch(decrement())}>
            Decrement
          </Button>
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  )
}