export default function UserList({users}){
    return (
        <>
        <h3>Liste des utilisateurs</h3>
            <ul>
            {users.map((user, index) => (
                <li key={index}>
                    <h2>{user.firstname} {user.lastname}</h2>
                    <p><strong>Email :</strong> {user.email}</p>
                    <p><strong>Adresse :</strong> {user.address.street}, {user.address.city}</p>
                    <p><strong>Téléphone :</strong> {user.phone}</p>
                    <p><strong>Date de naissance :</strong> {user.birthday}</p>
                </li>
            ))}
            </ul>
        </>
    );
}