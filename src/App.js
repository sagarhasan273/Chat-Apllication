/* eslint-disable react/no-unstable-nested-components */
import { useContext } from 'react';
import {
    BrowserRouter,
    Navigate,
    Route, Routes,
} from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './style.scss';

export default function App() {
  const { currentUser } = useContext(AuthContext);

  function ProtectedRoute({ children }) {
    if (!currentUser) {
        return <Navigate to="/login" />;
    }
    return children;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={(
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
)}
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
