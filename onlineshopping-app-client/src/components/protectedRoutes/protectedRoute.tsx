import { Navigate } from "react-router-dom";


const ProtectedRouteComp = ({ isAuthenticated, children }) => {
  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
};


export default ProtectedRouteComp;