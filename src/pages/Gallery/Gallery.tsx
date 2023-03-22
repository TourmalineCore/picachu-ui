import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Button from "../../components/Button/Button";
import { ReactComponent as IconPlus } from '../../assets/icons/icon-plus.svg';

function GalleryPage() {
  return (
    <div className="gallery">
      <Breadcrumb />
      <Button
        type="button"
        className="button button--light"
      >
        <span className="button--light__title">Create new</span>
        <span className="button--light__icon-container">
          <IconPlus />
        </span>

      </Button>
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

export default GalleryPage;
