import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oups!</h1>
            <p>Désolé, une erreur inattendue s'est produite.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}