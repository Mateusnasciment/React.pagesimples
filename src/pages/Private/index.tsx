import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Login } from "../Login";
import Redirect  from "react-router-dom";

export const Private = () => {

    const auth = useContext(AuthContext); 
    if (!auth.user) {
        return < Redirect to ="/login"/>
    }
    return (

        <div>Private</div>
    )
    }