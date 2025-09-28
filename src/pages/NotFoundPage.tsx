import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-8xl font-bold text-white mb-4">404</h1>
                <p className="text-2xl text-gray-400 mb-8">Page not found</p>
                <p className="text-lg text-gray-500 mb-8">
                    The page you're looking for doesn't exist.
                </p>
                <Link
                    to="/about"
                    className="inline-block px-6 py-3 border-white border-1 text-black rounded-lg hover:bg-gray-200 transition-colors"
                >
                    Go back home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
