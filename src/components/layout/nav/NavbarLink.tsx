import { useTouchInputQuery } from "@hooks/useMediaQuery";
import cn from "@styles/cssUtils";
import { setMouseHoverCssProperties } from "@utils/mouseHover";
import { Link, useLocation } from "react-router-dom";
import styles, { ClassNames } from "./NavbarLink.module.scss";

const NavbarLink: React.FC<{
  label: string;
  to: string;
  order: 1 | 2 | 3 | 4 | 5;
  isSelected?: boolean;
  inHamburgerMenu?: boolean;
}> = ({ label, to: route, order, isSelected, inHamburgerMenu }) => {
  const location = useLocation();
  const deviceIsTouch = useTouchInputQuery();

  return (
    <Link
      className={cn<ClassNames>()(
        "subtitle px-8 py-2",
        styles._navbarLink,
        {
          [styles._selected]: location.pathname === route || !!isSelected,
        },
        inHamburgerMenu ? styles[`_dropdownItem${order}`] : ""
      )}
      onMouseMove={(e) => setMouseHoverCssProperties(e, true, deviceIsTouch)}
      to={route}
      type="button"
    >
      {label}
    </Link>
  );
};

export default NavbarLink;
