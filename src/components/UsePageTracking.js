import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

function usePageTracking() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      if (window.gtag) {
        window.gtag("config", "G-DM7LKJREB2", {
          page_path: location.pathname,
        });
      }
    });
    return unlisten; // Cleanup the listener when the component unmounts
  }, [history]);

  // Initial page load tracking
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-DM7LKJREB2", {
        page_path: location.pathname,
      });
    }
  }, []);
}

export default usePageTracking;
