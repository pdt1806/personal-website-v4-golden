import { Box, Center, Group, Image, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
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

  return (
    <Box h="100%" w="100%" className={classes.background}>
      <FloatingStars />
      <FallingStars />
      <Center w="100%" h="100%" style={{ position: "absolute", zIndex: 2 }}>
        <Stack align="center" justify="center" gap="xl">
          <Image src="/images/logo.svg" alt="Logo" w={"40vw"} className={classes.logo} miw={300} maw={1000} />
          <Center>
            <Image
              src="/images/four-point-star.svg"
              w={150}
              visibleFrom="xs"
              className={classes.optionStar}
              id="option-star"
            />
            {isMobile ? <Stack gap={optionGap}>{OptionsMap}</Stack> : <Group gap={100}>{OptionsMap}</Group>}
          </Center>
        </Stack>
      </Center>
    </Box>
  );
};

export default MainMenu;
