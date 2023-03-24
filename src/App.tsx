import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GalleryCard from './pages/Galleries/components/GalleryCard/GalleryCard';
import Layout from './components/Layout/Layout';
import CreateGalleryPage from './pages/CreateGallery/CreateGalleryPage';
import LoginPage from './pages/Login/LoginPage';

const galleryCardInfo = {
  photos: [],
  photosCount: 0,
};
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
        <Route
          path="/galleries"
          element={(
            <GalleryCard
              photos={galleryCardInfo.photos}
              photosCount={galleryCardInfo.photosCount}
              newlyCreated
              name="new gallery"
              onNameApply={() => {}}
            />
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}
