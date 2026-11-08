import { useAuth } from '../context/AuthContext';
import {Navigate} from 'react-router-dom';
import Home from '../page/Home';

function HomeRedirect() {
    const {user} = useAuth();

    if (user?.role === "admin") {
        return <Navigate to="/admin" replace/>
    }

    return <Home />;
}

export default HomeRedirect;