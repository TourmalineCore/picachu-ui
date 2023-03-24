import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GalleryCard from './pages/Galleries/GalleryCard/GalleryCard';
import LoginPage from './pages/Login/LoginPage';

const galleryCardInfo = {
  imagePath: `src/assets/images/dummy-image.png`,
  imageAlt: `image1`,
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
          path="/galleries"
          element={(
            <GalleryCard
              imagePath={galleryCardInfo.imagePath}
              imageAlt={galleryCardInfo.imageAlt}
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
