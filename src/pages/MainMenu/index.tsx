import { Box, Center, Group, Image, Stack, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { playSound } from "../../util/SoundManager";
import FallingStars from "./FallingStars";
import "./flick-star.css";
import FloatingStars from "./FloatingStars";
import classes from "./index.module.css";
import { MenuOption } from "./MenuOption";

const options = [
  {
    title: "About Me",
    description: "Pursuing my true self.",
    to: "",
  },
  {
    title: "Education",
    description: "Not Yasogami High.",
    to: "",
  },
  {
    title: "Skills",
    description: "What I have to offer.",
    to: "",
  },
  {
    title: "Projects",
    description: "Ideas turned into reality.",
    to: "",
  },
  {
    title: "Portfolio",
    description: "My professional website.",
    to: "https://bennynguyen.dev",
    external: true,
  },
  {
    title: "Contact",
    description: "Let's collaborate.",
    to: "",
  },
];

const MainMenu = () => {
  const isMobile = useMediaQuery("(max-width: 36em)");

  const optionGap = isMobile ? "md" : "xl";

  const firstColumnOptions = options.filter((_, index) => (isMobile ? index < 3 : index % 2 == 0));
  const secondColumnOptions = options.filter((_, index) => (isMobile ? index >= 3 : index % 2 == 1));

  const [hasStarted, setHasStarted] = useState(false);

  const OptionsMap = [firstColumnOptions, secondColumnOptions].map((column, index) => (
    <Stack gap={optionGap} key={`column-${index}`}>
      {column.map((option, i) => (
        <MenuOption
          key={`option-${index}-${i}`}
          align={isMobile ? "center" : index == 0 ? "end" : "start"}
          option={option}
          dir={`${index}${i}`}
        />
      ))}
    </Stack>
  ));

  useEffect(() => {
    const handleInteraction = () => {
      if (hasStarted) return;
      // console.log("here");
      playSound("successful");
      setHasStarted(true);
    };

    const events = ["click", "keydown", "touchend", "pointerup"];
    events.forEach((event) => window.addEventListener(event, handleInteraction, { capture: true }));
    return () => {
      events.forEach((event) => window.removeEventListener(event, handleInteraction, { capture: true }));
    };
  }, [hasStarted]);

  return (
    <Box
      h="100%"
      w="100%"
      className={classes.background}
      style={{ backgroundColor: hasStarted ? "var(--mantine-color-p4g-purple-8)" : "#fbe820" }}
    >
      <FloatingStars />
      <FallingStars hasStarted={hasStarted} />
      <Center w="100%" h="100%" style={{ position: "absolute" }}>
        <Stack align="center" justify="center" gap="xl">
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
            <Image
              src="/images/logo.svg"
              alt="Logo"
              w={"40vw"}
              className={classes.logo}
              miw={300}
              maw={1000}
              style={{ zIndex: 1 }}
            />
          </Center>
          <Center style={{ zIndex: 1 }}>
            <Image
              src="/images/four-point-star.svg"
              w={150}
              visibleFrom="xs"
              className={classes.optionStar}
              id="option-star"
              style={{ opacity: !hasStarted ? "0" : "100%" }}
            />
            <Center>
              <Box
                style={{ opacity: !hasStarted ? "0" : "100%", pointerEvents: !hasStarted ? "none" : "auto" }}
                className={classes.transitionOpacity}
              >
                {isMobile ? <Stack gap={optionGap}>{OptionsMap}</Stack> : <Group gap={100}>{OptionsMap}</Group>}
              </Box>
              <Title
                order={isMobile ? 2 : 1}
                style={{ position: "absolute", visibility: hasStarted ? "hidden" : "visible" }}
              >
                {!isMobile ? "PRESS ANY BUTTON" : "PRESS ANYWHERE"}
              </Title>
            </Center>
          </Center>
        </Stack>
      </Center>
    </Box>
  );
};

export default MainMenu;
