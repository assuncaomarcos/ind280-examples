import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

import React from "react";

function Button(props) {
    function handleClick() {
        alert("Le bouton a été cliqué.");
    }

    return <button onClick={handleClick}>{props.children}</button>;
}

function ButtonWithCount() {
    const [count, setCount] = React.useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>Cliqué {count} fois</button>
    );
}

root.render(
    <div>
        <Button>Cliquez ici...</Button>
        <ButtonWithCount />
        <ButtonWithCount />
    </div>
);


