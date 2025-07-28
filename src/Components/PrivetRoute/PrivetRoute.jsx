import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <p className="text-center mt-10 text-xl">Loading...</p>;
    };

    if (user) {
        return children;
    };

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
