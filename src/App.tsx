import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import GalleryPage from './pages/Gallery/GalleryPage';
import LoginPage from './pages/LoginPage/LoginPage';

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
          element={<Layout />}
        >
          <Route
            path=""
            element={<GalleryPage />}
            index
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
