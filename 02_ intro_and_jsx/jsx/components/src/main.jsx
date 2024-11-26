import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

import React from "react";

class ClassComponent extends React.Component {
    render() {
        return <p>{this.props.nom}, ceci est un composant basé sur une classe!</p>;
    }
}

function MyComponent(props) {
    return (
        <div>
            <h1>Bonjour, {props.nom}!</h1>
            <p>Ceci est mon premier composant...</p>
        </div>
    );
}

function ButtonComponent(props) {
    return (
        <button className='btn'>
            {props.children}
        </button>
    );
}

root.render(
    <div>
        <MyComponent nom="Marcos"/>
        <ButtonComponent>
            Cliquez ici...
        </ButtonComponent>
        <ClassComponent nom="Marcos" />
    </div>
);
