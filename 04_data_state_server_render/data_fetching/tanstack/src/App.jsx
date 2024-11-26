import UserList from './userlist';
import {QueryClientProvider, QueryClient, useQuery} from "@tanstack/react-query";
import './App.css';

const userFetcher = (numUsers, seed) => {
    const baseURL = 'https://fakerapi.it/api/v2/';

    return fetch(`${baseURL}persons?_locale=fr_FR&_quantity=${numUsers}&_seed=${seed}`)
        .then(response => response.json()).then(body => body.data);
}

function MainPage(){
    const {data: users, isPending, isError} = useQuery({
            queryKey: ["fakerAPIUsers"],
            queryFn: () => userFetcher(5, 42),
        }
    );

    return (
        <div>
            {isPending && <p>Chargement des données...</p>}
            {isError && <p>Erreur dans la récupération des données.</p>}
            {users && <UserList users={users}/>}
        </div>
    );
}

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <MainPage/>
        </QueryClientProvider>
    );
}

export default App
