import CreateGallery from "./components/CreateGallery/CreateGallery";
import Gallery from "./components/Gallery/Gallery";

function GalleryPage() {
  return (
    <div>
      {/* A stub for changing the page */}
      {true ? (<CreateGallery />) : (<Gallery />)}
    </div>
  );
}

export default GalleryPage;
