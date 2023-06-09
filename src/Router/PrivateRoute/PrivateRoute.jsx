import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';

const PrivateRouts = ({children}) => {
    const { user , loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/register" state={{from: location}} replace></Navigate>;

};

export default PrivateRouts;