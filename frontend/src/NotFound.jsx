import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <div className="not-found-screen">
            <div className="not-found-container">
                <div className="not-found-code">404</div>
                <h1 className="not-found-title">Page not found</h1>
                <p className="not-found-text">
                    Seems like this song doesn't exist or you clicked on a broken link.
                </p>
                <Link to="/" className="not-found-button">
                    ← Back to home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;