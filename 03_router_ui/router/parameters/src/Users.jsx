export default function Users({ users }) {
    return (
        <ul>
            {users.map((user) => (
                <li key={user}><strong>{user.name}</strong>, {user.address}, {user.phone}</li>
            ))}
        </ul>
    );
}
