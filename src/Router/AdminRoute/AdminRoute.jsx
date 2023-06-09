import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider.jsx';
import useAdmin from '../../hooks/useAdminSecurity.js';

const AdminRoute = ({children}) => {
    const { user , loading} = useContext(AuthContext);
    const [isAdmin , isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();
    if(loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/register" state={{from: location}} replace></Navigate>;

};

export default AdminRoute;