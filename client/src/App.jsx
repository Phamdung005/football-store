import Login from './page/Login';
import Register from './page/Register';
import HomeRedirect from './components/HomeRedirect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Admin from './page/Admin';
import Dashboard from './page/Outlet/Dashboard';
import ProductMn from './page/Outlet/ProductMn';
import UserMn from './page/Outlet/UserMn';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <HomeRedirect />
        } />
        <Route path="/dang-nhap" element={<Login />} />
        <Route path="/dang-ky" element={<Register />} />
        <Route path="/admin" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <Admin />
          </ProtectedRoute>
        } >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="productmn" element={<ProductMn />} />
          <Route path="usermn" element={<UserMn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;