import { useMobileQuery } from "@hooks/useMediaQuery";
import cn, { cnScoped } from "@styles/cssUtils";
import { Parallax } from "react-scroll-parallax";
import styles from "./ParallaxMountains.module.scss";

/**
 * Background component with parallax effect.
 */
const ParallaxMountains: React.FC = () => {
  const deviceIsMobile = useMobileQuery();
  return (
    <>
      <div className={cnScoped(styles)(styles._gradientBackground)} />
      <div
        className={cn(
          "fixed bg-dark-shades -z-[5] w-screen left-0",
          "top-3/4",
          "h-1/4"
        )}
      />
      {deviceIsMobile ? (
        <div className={cn("flex justify-center w-screen")}>
          <div className={cnScoped(styles)(styles._mountainMiddle)} />
        </div>
      ) : (
        <div className={cn("flex justify-center w-screen")}>
          <div className={cnScoped(styles)(styles._mountainMiddle)} />
          <Parallax speed={-13} style={{ zIndex: -2 }}>
            <div className={cnScoped(styles)(styles._mountainLeft)} />
          </Parallax>
          <Parallax speed={-13} style={{ zIndex: -3 }}>
            <div className={cnScoped(styles)(styles._mountainRight)} />
          </Parallax>
        </div>
      )}
    </>
  );
};

export default ParallaxMountains;
