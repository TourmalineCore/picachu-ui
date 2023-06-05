import notFoundImage from '../../assets/images/404.png';

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <h1 className="not-found-page__title">Whoops!</h1>

      <img
        src={notFoundImage}
        className="not-found-page__photo"
        alt="error 404"
        draggable={false}
      />

      <div className="not-found-page__description">The page you’re looking for doesn’t exist. </div>
    </section>
  );
}

export default NotFoundPage;
