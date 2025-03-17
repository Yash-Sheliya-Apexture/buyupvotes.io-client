import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Scroll_To_Top = ({ children }) => {
  const { pathname } = useLocation();
  const previousPathname = useRef(); // Initialize ref without value

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      window.scrollTo(0, 0);
      previousPathname.current = pathname; // Update ref *after* scroll
    }
  }, [pathname]);

  return children;
};

export default Scroll_To_Top;