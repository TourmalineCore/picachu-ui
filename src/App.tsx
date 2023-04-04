import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LoginPage from './pages/Login/LoginPage';
import GalleriesPage from './pages/Galleries/GalleriesPage';
import { withPrivateRoute } from './common/auth/authStateProvider/withPrivateRoute';

const WithPrivateRoute = withPrivateRoute(Layout);

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/galleries"
          element={<WithPrivateRoute />}
        >
          <Route
            path=""
            element={<GalleriesPage />}
            index
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
