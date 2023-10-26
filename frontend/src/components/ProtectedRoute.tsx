import { Navigate } from 'react-router-dom';
import { getAuth } from '../util/getAuth';

interface ProtectedRouteProps {
    component: React.ReactNode;
}

export default function ProtectedRoute({ component }: ProtectedRouteProps) {
    const auth = getAuth();

    if (auth?.token) {
        return component;
    }
    return <Navigate to="/login" replace />;
}
