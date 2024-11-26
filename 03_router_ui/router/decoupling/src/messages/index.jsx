import Redirect from "../Redirect";
import Message1 from "./Message1";
import Message2 from "./Message2";

const routes = {
    path: "/messages",
    children: [
        {
            index: true,
            element: <Redirect path="/messages/1" />,
        },
        {
            path: "1",
            element: <Message1 />,
        },
        {
            path: "2",
            element: <Message2 />,
        },
    ],
};

export default routes;