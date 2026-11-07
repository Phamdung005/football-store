import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, allowedRoles }) {
    const token = localStorage.getItem("token");
    if (!token) {
        return <Navigate to="/dang-nhap" replace />
    }
    const user = JSON.parse(localStorage.getItem("user"));
    if (!token || !user) {
        return <Navigate to="/dang-nhap" replace />
    }
    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/" replace />;
    } else {
        return children;
    }
}

export default ProtectedRoute;