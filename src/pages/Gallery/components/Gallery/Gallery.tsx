import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import AddButton from '../../../../components/AddButton/AddButton';

function Gallery() {
  return (
    <div className="gallery">
      <Breadcrumbs />
      <AddButton type="button">Create new</AddButton>
      <div className="gallery__container">
        <div className="gallery__card" />
        <div className="gallery__card" />
        <div className="gallery__card" />
        <div className="gallery__card" />
        <div className="gallery__card" />
        <div className="gallery__card" />
        <div className="gallery__card" />
        <div className="gallery__card" />
        <div className="gallery__card" />
        <div className="gallery__card" />
        <div className="gallery__card" />
      </div>
    </div>
  );
}

export default Gallery;
