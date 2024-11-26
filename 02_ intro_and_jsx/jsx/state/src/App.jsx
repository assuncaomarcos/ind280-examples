import "./styles.css";
import React from "react";

export default function App() {
    consst [name, setName] = React.useState("Marcos");
    const [age, setAge] = React.useState(18);

    return (
        <>
            <section>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <p>Mon prénom est {name}</p>
            </section>
            <section>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                />
                <p>Mon age est {age}</p>
            </section>
        </>
    );
}
