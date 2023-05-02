import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LoginPage from './pages/Login/LoginPage';
import GalleriesPage from './pages/Galleries/GalleriesPage';
import { withPrivateRoute } from './common/auth/authStateProvider/withPrivateRoute';
import MetricsPage from './pages/Metrics/MetricsPage';
import PhotosPage from './pages/Photos/PhotosPage';

const WithPrivateRoute = withPrivateRoute(Layout);

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={<WithPrivateRoute />}
        >
          <Route
            index
            element={<Navigate to="/galleries" />}
          />
          <Route
            path="galleries"
            element={<GalleriesPage />}
          />
          <Route
            path="galleries/:galleryId"
            element={<PhotosPage />}
          />
          <Route
            path="galleries/nature/metric"
            element={<MetricsPage />}
          />
        </Route>
        <Route
          path="/login"
          element={<LoginPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
