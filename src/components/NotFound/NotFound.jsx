import image from './error-404.webp';

export const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src={image} alt="not found" style={{ width: 300 }} />
      <p className="my-3">Something wrong...</p>
    </div>
  );
};
