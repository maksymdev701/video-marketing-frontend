import { useCookies } from "react-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { userApi } from "../redux/api/user-api";
import FullScreenLoader from "./fullscreen-loader";

const RequireUser = ({ allowedRoles }) => {
  const [cookies] = useCookies(["logged_in"]);
  const location = useLocation();

  const { isLoading, isFetching } = userApi.endpoints.getMe.useQuery(null, {
    skip: false,
    refetchOnMountOrArgChange: true,
  });

  const loading = isLoading || isFetching;

  const user = userApi.endpoints.getMe.useQueryState(null, {
    selectFromResult: ({ data }) => data,
  });

  if (loading) {
    return <FullScreenLoader />;
  }

  if (user && !user.verified)
    return <Navigate to="/verify" state={{ from: location }} replace />;

  if (cookies.logged_in || user) {
    if (user && allowedRoles.includes(user.role)) return <Outlet />;
  }
  if (cookies.logged_in && user) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default RequireUser;
