import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, allowedRoles }) {
    const token = localStorage.getItem("token");
    if (!token) {
        return <Navigate to="/" replace />
    }
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        return <Navigate to="/" replace />
    }
    if (!allowedRoles.includes(user.role)) {
        if (user.role === "admin") {
            return <Navigate to="/admin" replace />
        } else {
            return <Navigate to="/" replace />;
        }
    } else {
        return children;
    }
}

export default ProtectedRoute;