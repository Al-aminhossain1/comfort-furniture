import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from "../Loading/Loading";

function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (!user.emailVerified) {
        return <div className="text-center">
            <h4 className="text-danger">your Email is not verify !!</h4>
            <h4 className="text-success">please verify your email</h4>
        </div>
    }

    return children;
}

export default RequireAuth;