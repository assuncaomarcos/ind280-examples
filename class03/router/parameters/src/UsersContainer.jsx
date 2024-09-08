import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchUsers } from "./Api";
import Users from "./Users";

function UsersContainer() {
    const [users, setUsers] = useState([]);
    const [search] = useSearchParams();

    useEffect(() => {
        const order = search.get("order");

        fetchUsers(order).then((users) => {
            setUsers(users);
        });
    }, [search]);

    return <Users users={users} />;
}

export default UsersContainer;
