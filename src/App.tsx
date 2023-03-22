import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import CreateGalleryPage from './pages/CreateGallery/CreateGalleryPage';
import LoginPage from './pages/Login/LoginPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            path=""
            element={<CreateGalleryPage />}
            index
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
