import EmptyGallery from "./components/EmptyGallery/EmptyGallery";
import Gallery from "./components/Gallery/Gallery";

function GalleryPage() {
  return (
    <div>
      {/* A stub for changing the page */}
      {true ? (<EmptyGallery />) : (<Gallery />)}
    </div>
  );
}

export default GalleryPage;
