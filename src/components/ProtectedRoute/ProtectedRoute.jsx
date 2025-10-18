import { Navigate } from 'react-router-dom';
import { getUserToken } from '../../utils/CookisAuth';

const ProtectedRoute = ({ children }) => {
    const token = getUserToken();
    return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;