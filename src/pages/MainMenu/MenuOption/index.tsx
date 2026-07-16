import { Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import { playSound } from "../../../util/SoundManager";
import { MainMenuOptionType } from "../../../util/type";
import classes from "./index.module.css";

const MenuOption = ({ option, align, dir }: { option: MainMenuOptionType; align: string; dir: string }) => {
  const isMobile = useMediaQuery("(max-width: 36em)");

  const flickDirectionMap: Record<string, string> = {
    "00": "TL",
    "01": "CL",
    "02": "BL",

    "10": "TR",
    "11": "CR",
    "12": "BR",
  };

  const navigate = useNavigate();

  return (
    <Stack
      align={align}
      gap={5}
      className={classes.option}
      onMouseEnter={() => {
        document.getElementById("option-star")?.classList.add(`flick${flickDirectionMap[dir]}`);
        setTimeout(() => {
          document.getElementById("option-star")?.classList.remove(`flick${flickDirectionMap[dir]}`);
        }, 100);
        playSound("hover");
      }}
      onClick={() => {
        playSound("successful");
        !!option.to
          ? option.external
            ? window.open(`${option.to}`, "_blank")
            : navigate(option.to)
          : notifications.show({
              w: "calc(100vw - 2 * var(--mantine-spacing-md))",
              h: "50vh",
              id: "dialogue-box",
              position: "bottom-left",
              withCloseButton: true,
              allowClose: true,
              autoClose: 100000,
              message: (
                <Text c="white" fz={isMobile ? "h4" : "h2"}>
                  This feature will be implemented later.
                </Text>
              ),
              color: "#ffb809",
              style: { backgroundColor: "#534622" },
              styles: {
                closeButton: {
                  color: "white",
                  backgroundColor: "transparent",
                  transform: "scale(2) translateX(-8px)",
                },
              },
            });
      }}
    >
      <Title order={isMobile ? 2 : 1}>{option.title.toUpperCase()}</Title>
      <Text>{option.description}</Text>
    </Stack>
  );
};

export default MenuOption;
