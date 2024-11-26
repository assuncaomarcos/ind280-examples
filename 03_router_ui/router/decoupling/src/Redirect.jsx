import * as React from "react";
import { useNavigate } from "react-router-dom";

function Redirect({path}) {
    const navigate = useNavigate();

    React.useEffect(() => {
        navigate(path);
    }, [navigate, path]);

    return null;
}

export default Redirect;