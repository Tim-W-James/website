import cn from "@styles/cssUtils";
import { setMouseHoverCssProperties } from "@utils/mouseHover";
import styles, { ClassNames } from "./Logo.module.scss";

/**
 * Circular logo with hover effects
 *
 * @param {{ imageSrc: any; altText?: string; }} { image link, optional alt text
 * }
 * @returns {*}
 */
const Logo: React.FC<{
  imageSrc: string;
  altText?: string;
}> = ({ imageSrc, altText = "logo" }) => (
  <div
    className={cn<ClassNames>()(styles._logoBorder)}
    onMouseMove={(e) => setMouseHoverCssProperties(e)}
  >
    <img
      alt={altText}
      className={cn<ClassNames>()(
        "relative h-56 object-cover aspect-square rounded-full -z-[1]",
        "pointer-events-none"
      )}
      src={imageSrc}
    />
  </div>
);

export default Logo;