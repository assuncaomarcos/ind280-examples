const users = [
    { name: "Francois", address: "123 Rue de Montreal, Quebec", phone: "(418) 111-1111"},
    { name: "Lucas", address: "456 Rue de Quebec, Montreal", phone: "(514) 222-2222"},
    { name: "Sophie", address: "789 Chemin de Toronto, Ottawa", phone: "(613) 333-3333"}
];

export function fetchUsers(order) {
    return new Promise((resolve) => {
        order === "desc" ? resolve([...users].reverse()) : resolve(users);
    });
}