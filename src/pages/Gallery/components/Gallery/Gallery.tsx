import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb';
import OutlineButton from '../../../../components/OutlineButton/OutlineButton';

function Gallery() {
  return (
    <div className="gallery">
      <Breadcrumb />
      <OutlineButton type="button">Create new</OutlineButton>
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
