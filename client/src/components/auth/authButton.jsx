import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const AuthButton = (props) => {

    
    
    if (isLoggedIn()) {
        return <Link className="btn btn-outline-info authbutton" to="/logout">Logout</Link>;
    } else {
        return <Link className="btn btn-outline-info authbutton" to="/login">Login</Link>;
    }
    
    
    
};

export default AuthButton;