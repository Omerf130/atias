import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const useCurrentRoute = () => {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location.pathname]);

  return currentRoute;
};

export default useCurrentRoute;
