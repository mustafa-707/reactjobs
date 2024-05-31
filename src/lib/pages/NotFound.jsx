import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
const NotFoundPage = () => {
  return (
    <section className="not-found-section">
      <FaExclamationTriangle className="not-found-icon" />
      <h1 className="not-found-title">Page not found</h1>
      <p className="not-found-text">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="not-found-btn">
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
