import { Box, Center, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { animate, createTimeline } from "animejs";
import { useEffect, useRef, useState } from "react";

const logoOutlineImages = [
  "/images/logo_outline/logo_outline_blue.png",
  "/images/logo_outline/logo_outline_white.png",
  "/images/logo_outline/logo_outline_red.png",
  "/images/logo_outline/logo_outline_lightblue.png",
  "/images/logo_outline/logo_outline_orange.png",
  "/images/logo_outline/logo_outline_green.png",
];

const MainMenuLogo = ({ hasStarted }: { hasStarted: boolean }) => {
  const isMobile = useMediaQuery("(max-width: 36em)");

  const [outlineIndex, setOutlineIndex] = useState(0);

  useEffect(() => {
    if (hasStarted) return;
    const id = setInterval(() => {
      setOutlineIndex((prev) => (prev + 1) % logoOutlineImages.length);
    }, 200);
    return () => clearInterval(id);
  }, [hasStarted]);

  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!hasStarted) return;

    logoOutlineImages.forEach((_, index) => {
      const id = `#logo-outline-${logoOutlineImages.length - 1 - index}`;
      animate(id, {
        ease: "outExpo",
        scale: [1, 10],
        duration: 1000,
        delay: 50 * index,
        onComplete: () => {
          document.getElementById(id.replace("#", ""))?.remove();
        },
      });
    });

    if (logoRef.current) {
      const timeline = createTimeline({ defaults: { duration: 300, ease: "linear" } });

      timeline
        .add(logoRef.current, { scale: [1, 0.8], duration: 100 }, 0)
        .add(logoRef.current, { scale: [0.8, 1.2], duration: 100 }, 100)
        .add(logoRef.current, { scale: [1.2, 1], duration: 100 }, 200);
    }
  }, [hasStarted]);

  return (
    <Center>
      <Box
        style={{
          position: "absolute",
          borderRadius: "50%",
          zIndex: "0",
          filter: `blur(${isMobile ? "20vh" : "20vw"})`,
          opacity: !hasStarted ? "0" : "100%",
        }}
        w={isMobile ? "60vh" : "60vw"}
        h={isMobile ? "60vh" : "60vw"}
        bg="black"
      />
      <Image ref={logoRef} src="/images/logo.svg" alt="Logo" w={"35vw"} miw={300} maw={1000} style={{ zIndex: 1 }} />
      {logoOutlineImages.map((_, index) => (
        <Image
          src={logoOutlineImages[(logoOutlineImages.length - 1 - index + outlineIndex) % logoOutlineImages.length]}
          w={"35vw"}
          miw={300}
          maw={1000}
          id={`logo-outline-${index}`}
          key={`logo-outline-${index}`}
          style={{
            position: "absolute",
            zIndex: 1,
            transform: `scale(${1 + (index * 0.013 + 0.04)}, ${1 + (index * 0.035 + 0.04)})`,
          }}
        />
      ))}
    </Center>
  );
};

export default MainMenuLogo;
