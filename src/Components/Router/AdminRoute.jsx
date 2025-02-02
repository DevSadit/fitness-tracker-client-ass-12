import { Navigate } from "react-router-dom";

import PropTypes from "prop-types";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../Shared/LoadingSpinner";
const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <LoadingSpinner />;
  if (role === "Admin") return children;
  return <Navigate to="/dashboard" />;
};

export default AdminRoute;

AdminRoute.propTypes = {
  children: PropTypes.element,
};
