import { ActionIcon, Box, Center, Group, Image, Stack, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconDisc, IconDiscOff, IconProps, IconVolume, IconVolumeOff } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../../contexts/global";
import { playSound } from "../../util/SoundManager";
import FallingStars from "./FallingStars";
import "./flick-star.css";
import FloatingStars from "./FloatingStars";
import classes from "./index.module.css";
import MainMenuLogo from "./Logo";
import MenuOption from "./MenuOption";

const options = [
  {
    title: "About Me",
    description: "Pursuing my true self.",
    to: "/about",
  },
  {
    title: "Education",
    description: "Not Yasogami High.",
    to: "",
  },
  {
    title: "Skills",
    description: "What I have to offer.",
    to: "/skills",
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

const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
const gainNode = audioCtx.createGain();
gainNode.connect(audioCtx.destination);

const SoundButton = ({
  state,
  setState,
  iconEnabled: IconEnabled,
  iconDisabled: IconDisabled,
}: {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  iconEnabled: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  iconDisabled: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
}) => {
  return (
    <ActionIcon
      variant="filled"
      color="#3b3b3b"
      style={{ border: "2px solid white" }}
      size="xl"
      onClick={() => setState(!state)}
    >
      {state ? <IconEnabled /> : <IconDisabled />}
    </ActionIcon>
  );
};

const MainMenu = () => {
  const isMobile = useMediaQuery("(max-width: 36em)");

  const optionGap = isMobile ? "md" : "xl";

  const firstColumnOptions = options.filter((_, index) => (isMobile ? index < 3 : index % 2 == 0));
  const secondColumnOptions = options.filter((_, index) => (isMobile ? index >= 3 : index % 2 == 1));

  const [hasStarted, setHasStarted] = useState(false);
  const [arrayBuffer, setArrayBuffer] = useState<ArrayBuffer | null>(null);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);

  const [bgmEnabled, setBGMEnabled] = useState<boolean>(true);
  const { sfxEnabled, setSFXEnabled } = useGlobalContext();

  const makeArrayBuffer = async () => {
    const fetchedArrayBuffer = await fetch("/audio/bgm/a_corner_of_memory.mp3").then((res) => res.arrayBuffer());
    setArrayBuffer(fetchedArrayBuffer);
  };

  const decodeAudio = async () => {
    if (arrayBuffer) {
      const decodedAudioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
      setAudioBuffer(decodedAudioBuffer);
    }
  };

  useEffect(() => {
    makeArrayBuffer();
  }, []); // initial array buffer fetch

  useEffect(() => {
    decodeAudio();
  }, [arrayBuffer]);

  const playBGM = () => {
    try {
      // iOS silent buffer trick to unlock audio context
      if (audioCtx.state === "suspended") {
        const silentBuffer = audioCtx.createBuffer(1, 1, 22050);
        const unlockSource = audioCtx.createBufferSource();
        unlockSource.buffer = silentBuffer;
        unlockSource.connect(audioCtx.destination);
        unlockSource.start(0);
        audioCtx.resume();
      }

      const source = audioCtx.createBufferSource();
      source.buffer = audioBuffer;
      source.loop = true;

      gainNode.gain.value = bgmEnabled ? 0.5 : 0;
      source.connect(gainNode);
      source.start(0);
    } catch (error) {
      console.error("Autoplay prevented or audio error:", error);
    }
  };

  useEffect(() => {
    if (!audioBuffer) return;
    gainNode.gain.value = bgmEnabled ? 0.5 : 0;
  }, [bgmEnabled]);

  const handleHasStarted = () => {
    if (hasStarted) return;
    playBGM();
    playSound("successful");
    setHasStarted(true);
  };

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
    <Box
      h="100vh"
      w="100vw"
      className={classes.background}
      style={{ backgroundColor: hasStarted ? "var(--mantine-color-p4g-purple-8)" : "#fbe820" }}
    >
      <>
        <FloatingStars />
        <FallingStars hasStarted={hasStarted} />
        <Center w="100%" h="100%" style={{ position: "absolute" }}>
          <Stack align="center" justify="center" gap="xl">
            <MainMenuLogo hasStarted={hasStarted} />
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
                <Stack style={{ position: "absolute", visibility: hasStarted ? "hidden" : "visible" }} align="center">
                  <Stack align="end">
                    <Group gap="xl">
                      <Title order={2}>Toggle SFX</Title>
                      <SoundButton
                        state={sfxEnabled}
                        setState={setSFXEnabled}
                        iconEnabled={IconVolume}
                        iconDisabled={IconVolumeOff}
                      />
                    </Group>
                    <Group gap="xl">
                      <Title order={2}>Toggle BGM</Title>
                      <SoundButton
                        state={bgmEnabled}
                        setState={setBGMEnabled}
                        iconEnabled={IconDisc}
                        iconDisabled={IconDiscOff}
                      />
                    </Group>
                  </Stack>
                  <Title mt="xl" order={isMobile ? 2 : 1} style={{ cursor: "pointer" }} onClick={handleHasStarted}>
                    &gt; START
                  </Title>
                </Stack>
              </Center>
            </Center>
          </Stack>
        </Center>
        <Group
          style={{
            position: "absolute",
            visibility: !hasStarted ? "hidden" : "visible",
            bottom: "var(--mantine-spacing-md)",
            right: "var(--mantine-spacing-md)",
          }}
        >
          <SoundButton
            state={sfxEnabled}
            setState={setSFXEnabled}
            iconEnabled={IconVolume}
            iconDisabled={IconVolumeOff}
          />
          <SoundButton state={bgmEnabled} setState={setBGMEnabled} iconEnabled={IconDisc} iconDisabled={IconDiscOff} />
        </Group>
      </>
      <Outlet />
    </Box>
  );
};

export default MainMenu;
