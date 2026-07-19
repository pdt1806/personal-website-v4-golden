import { Box, Flex, Group, Image, Progress, Stack, Title, Tooltip } from "@mantine/core";
import {
  IconBrain,
  IconBrandAdobePhotoshop,
  IconBrandCpp,
  IconBrandFlutter,
  IconBrandPython,
  IconBrandReact,
  IconBrandTypescript,
  IconProps,
  IconQuestionMark,
} from "@tabler/icons-react";
import { animate, createTimeline } from "animejs";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
import { playSound } from "../../util/SoundManager";
import { getHoursUntilNextDate, getYearsDifference } from "../../util/util";

type TechnicalSkillType = {
  name: string;
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  value: string;
};

type SkillBarType = {
  label: string;
  value: number;
};

const technicalSkills: TechnicalSkillType[] = [
  { name: "Critical Thinking", icon: IconBrain, value: "Str" },
  { name: "React", icon: IconBrandReact, value: "Str" },
  { name: "Typescript", icon: IconBrandTypescript, value: "Str" },
  { name: "Python", icon: IconBrandPython, value: "—" },
  { name: "Flutter", icon: IconBrandFlutter, value: "—" },
  { name: "C++", icon: IconBrandCpp, value: "Wk" },
  { name: "Photoshop", icon: IconBrandAdobePhotoshop, value: "—" },
];

const skillBars: SkillBarType[] = [
  { label: "Front-end", value: 85 },
  { label: "Back-end", value: 70 },
  { label: "Design", value: 75 },
  { label: "DevOps", value: 40 },
];

const softSkills = [
  "Adaptability",
  "Time Management",
  "Problem Solving",
  "Attention to Detail",
  "Creativity",
  "Active Learning",
  "Collaboration",
  "Communication",
];

const TechnicalSkillBox = ({ skill }: { skill: TechnicalSkillType }) => {
  return (
    <Stack gap="xs" align="center" w="max-content">
      <Tooltip label={skill.name}>
        <Flex
          style={{ borderRadius: "var(--mantine-radius-md)" }}
          w={56}
          h={56}
          bg="#FFFF24"
          align="center"
          justify="center"
        >
          <skill.icon stroke={1.5} width={48} height={48} color="#FFAE00" />
        </Flex>
      </Tooltip>
      <Flex
        style={{ borderRadius: "var(--mantine-radius-md)" }}
        w={104}
        h={56}
        bg="#FFFF24"
        align="center"
        justify="center"
      >
        <Title ff="Arial" fw={500} c="#FFAE00" style={{ fontSize: "calc(2.125rem * var(--mantine-scale) * 1.25)" }}>
          {skill.value}
        </Title>
      </Flex>
    </Stack>
  );
};

const Skills = () => {
  const navigate = useNavigate();

  const pageRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const stripesRef = useRef<HTMLImageElement>(null);

  const redStripesMain = useRef<HTMLDivElement>(null);
  const redStripesBottom = useRef<HTMLDivElement>(null);

  const mainRedStripe = useRef<HTMLDivElement>(null);
  const upperRunningText = useRef<HTMLDivElement>(null);
  const lowerRunningText = useRef<HTMLDivElement>(null);

  const imageMeRef = useRef<HTMLImageElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current)
      animate(pageRef.current, {
        opacity: [0, 1],
        x: [-20, 0],
        duration: 500,
        ease: "outExpo",
      });

    if (stripesRef.current)
      animate(stripesRef.current, {
        x: ["-100vw", 0],
        width: ["100vw", "300px"],
        duration: 500,
        ease: "outExpo",
        delay: 100,
      });

    if (imageMeRef.current)
      animate(imageMeRef.current, {
        x: ["100vw", 0],
        duration: 500,
        ease: "outExpo",
        delay: 250,
      });

    if (redStripesMain.current)
      animate(redStripesMain.current, {
        x: ["100vw", 0],
        y: ["-100vh", 0],
        duration: 500,
        ease: "outExpo",
        delay: 500,
      });

    if (redStripesBottom.current)
      animate(redStripesBottom.current, {
        x: ["-100vw", 0],
        y: ["100vh", 0],
        duration: 500,
        ease: "outExpo",
        delay: 500,
      });

    if (mainRedStripe.current)
      animate(mainRedStripe.current, {
        height: [300, 500],
        duration: 500,
        ease: "outExpo",
        delay: 700,
      });

    // ----------

    if (upperRunningText.current) {
      const timeline = createTimeline({ defaults: { duration: 5000, loop: true } });
      timeline.add(
        upperRunningText.current,
        {
          x: ["55vw", "-55vw"],
          ease: "linear",
        },
        "start",
      );
    }

    if (lowerRunningText.current) {
      const timeline = createTimeline({ defaults: { duration: 5000, loop: true } });
      timeline.add(
        lowerRunningText.current,
        {
          x: ["67vw", "-75vw"],
          ease: "linear",
        },
        "start",
      );
    }
  }, []);

  const handleClose = () => {
    playSound("close");

    if (contentRef.current)
      animate(contentRef.current, {
        opacity: [1, 0],
        x: [0, -20],
        duration: 200,
        ease: "outExpo",
      });

    if (redStripesMain.current)
      animate(redStripesMain.current, {
        x: [0, "100vw"],
        y: [0, "-100vh"],
        duration: 1000,
        ease: "outExpo",
      });

    if (redStripesBottom.current)
      animate(redStripesBottom.current, {
        x: [0, "-100vw"],
        y: [0, "100vh"],
        duration: 1000,
        ease: "outExpo",
      });

    if (imageMeRef.current)
      animate(imageMeRef.current, {
        x: [0, "-100vw"],
        opacity: [1, 0],
        duration: 500,
        ease: "outExpo",
      });

    if (stripesRef.current)
      animate(stripesRef.current, {
        x: [0, "-100vw"],
        duration: 500,
        ease: "outExpo",
        delay: 100,
      });

    if (bgRef.current)
      animate(bgRef.current, {
        x: [0, "-100vw"],
        duration: 500,
        ease: "outExpo",
        delay: 200,
        onComplete: () => {
          navigate("/");
        },
      });
  };

  return (
    <Box ref={pageRef} h="100vh" w="100vw" style={{ overflow: "hidden", zIndex: 2 }} pos="relative">
      {/* bg layer */}
      <Box
        h="100%"
        w="100%"
        style={{
          position: "absolute",
          background: "linear-gradient(155deg,rgba(255, 184, 0, 1) 0%, rgba(255, 255, 38, 1) 30%)",
        }}
        ref={bgRef}
      />

      {/* stripes layer */}
      <Image
        alt="Stripes"
        src="/assets/pages/skills/stripes.svg"
        w={300}
        h="100vh"
        style={{ position: "absolute", zIndex: 3, right: 0, objectFit: "fill" }}
        ref={stripesRef}
      />

      {/* red stripes - main */}
      <Stack
        gap={0}
        style={{
          position: "absolute",
          zIndex: 4,
          transform: "rotate(45deg)",
          right: "-40vw",
          top: "3vh",
        }}
        w="100vw"
        ref={redStripesMain}
      >
        <Box h={22} w="100%" bg="#F31000" mb="lg"></Box>
        <Box h={48} w="100%" bg="#F31000" mb="lg"></Box>
        <Stack w="100%" bg="#F31000" justify="space-between" c="#B70000" mt="lg" ref={mainRedStripe}>
          <Flex justify="space-around" align="end" ref={upperRunningText}>
            <Title fz={100} w="max-content">
              SKILLS
            </Title>
            <Title fz={100} w="max-content">
              SKILLS
            </Title>
          </Flex>
          <Flex
            justify="space-around"
            align="end"
            style={{ transform: "translateX(calc(50vw - 480px))" }}
            ref={lowerRunningText}
          >
            <Title fz={100} w="max-content">
              SKILLS
            </Title>
            <Title fz={100} w="max-content">
              SKILLS
            </Title>
          </Flex>
        </Stack>
      </Stack>

      {/* red stripes - bottom */}
      <Stack
        gap={0}
        style={{ position: "absolute", zIndex: 4, transform: "rotate(45deg)", left: "-55vw", bottom: "-10vh" }}
        w="100vw"
        ref={redStripesBottom}
      >
        <Box h={22} w="100%" bg="#F31000" mb="lg"></Box>
        <Box h={48} w="100%" bg="#F31000" mb="lg"></Box>
        <Stack h={500} w="100%" bg="#F31000" justify="space-between" c="#B70000" mt="lg"></Stack>
      </Stack>

      {/* my image layer */}
      <Image
        alt="Me"
        src="/assets/pages/skills/performative_me.png"
        h="160vh"
        w="auto"
        style={{
          position: "absolute",
          bottom: "-63vh",
          right: 250,
          filter: "drop-shadow(-16px -12px 0 #FFFF8B)",
          zIndex: 5,
        }}
        ref={imageMeRef}
      />

      {/* content layer */}
      <Box h="100%" w="100%" style={{ position: "absolute", zIndex: 6 }} ref={contentRef}>
        <Box id="personal-info" mt="xl">
          <Flex
            style={{ borderRadius: "0 var(--mantine-radius-md) var(--mantine-radius-md) 0" }}
            bg="#121411"
            w={700}
            py="xs"
            justify="center"
          >
            <Title c="white">Benny Nguyen</Title>
          </Flex>
          <Group gap="xs">
            <Stack
              style={{ borderRadius: "0 var(--mantine-radius-md) var(--mantine-radius-md) 0", position: "relative" }}
              bg="#121411"
              w={275}
              h={130}
              mt="sm"
              justify="space-between"
            >
              <Title
                ff="Arial Narrow"
                c="white"
                mx="auto"
                w="max-content"
                pt="xs"
                style={{ fontSize: "calc(2.125rem * var(--mantine-scale) * 1.25)" }}
              >
                Magician
              </Title>
              <Group
                c="white"
                w="max-content"
                gap="lg"
                align="end"
                style={{ position: "absolute", right: 0, bottom: 0 }}
              >
                <Title
                  ff="Radiate Sans Semi Expanded"
                  style={{ fontSize: "calc(2.125rem * var(--mantine-scale) * 1.5)" }}
                  lh="44px"
                >
                  LV
                </Title>
                <Title ff="Molde Expanded" style={{ fontSize: "calc(2.125rem * var(--mantine-scale) * 2)" }} lh="60px">
                  {getYearsDifference(new Date("2008-06-18"), new Date())}
                </Title>
              </Group>
            </Stack>
            <Stack justify="space-between" h={130}>
              <Title pt="lg">Web & Software Developer</Title>
              <Group>
                <Title ff="Radiate Sans Semi Expanded">
                  <span style={{ fontSize: "calc(2.125rem * var(--mantine-scale) * 1.5)" }}>N</span>EXT EXP
                </Title>
                <Title ff="Molde Expanded" fw={500} style={{ fontSize: "calc(2.125rem * var(--mantine-scale) * 1.5)" }}>
                  {getHoursUntilNextDate(6, 18)}
                </Title>
              </Group>
            </Stack>
          </Group>
        </Box>
        <Box id="skills-info" mt="xs" h={391}>
          <Flex
            style={{ borderRadius: "0 var(--mantine-radius-md) var(--mantine-radius-md) 0" }}
            bg="#FFAD00"
            w={907}
            py="xs"
            justify="flex-end"
            px="xs"
            gap="xs"
          >
            {technicalSkills.map((skill, index) => {
              return (
                <Box mr={index == 0 ? "calc(var(--mantine-spacing-md) * 2)" : "0"} key={`technical-skill-${index}`}>
                  <TechnicalSkillBox skill={skill} />
                </Box>
              );
            })}
          </Flex>
          <Box style={{ position: "relative" }} mt="xs">
            <Box
              style={{ borderRadius: "0 var(--mantine-radius-md) var(--mantine-radius-md) 0", position: "absolute" }}
              bg="#FFAD00"
              w={163}
              h={244}
            />
            <Box w={907} h={244} style={{ position: "absolute" }}>
              <Flex py="xs">
                <Stack w={163} align="flex-end" pr="xs" justify="space-between">
                  {skillBars.map((skill, index) => {
                    return (
                      <Title ff="Arial Narrow" w="max-content" c="#FFFF26" key={`skill-bar-label-${index}`}>
                        {skill.label}
                      </Title>
                    );
                  })}
                </Stack>
                <Stack align="center" px="md" justify="space-between">
                  {skillBars.map((skill, index) => {
                    return (
                      <Title ff="Molde Expanded" w="max-content" key={`skill-bar-value-${index}`}>
                        {skill.value}
                      </Title>
                    );
                  })}
                </Stack>
                <Stack style={{ flexGrow: 1 }} justify="space-around">
                  {skillBars.map((skill, index) => {
                    return (
                      <Box
                        style={{ borderRadius: "var(--mantine-radius-md)" }}
                        bg="#FFAD00"
                        key={`skill-bar-progress-${index}`}
                      >
                        <Progress
                          value={skill.value}
                          my="xs"
                          mx="xs"
                          size="xl"
                          color="#FFFF8B"
                          styles={{
                            root: {
                              backgroundColor: "#FFAD00",
                            },
                          }}
                        />
                      </Box>
                    );
                  })}
                </Stack>
              </Flex>
            </Box>
          </Box>
        </Box>

        <Box id="soft-skills-info" mt="xs">
          <Group grow gap="xs" mx="calc(var(--mantine-spacing-xl) * 2)">
            {[softSkills.slice(0, 4), softSkills.slice(4, 8)].map((column, columnIndex) => (
              <Stack gap={10} key={`soft-skills-col-${columnIndex}`}>
                {column.map((value, index) => (
                  <Flex
                    style={{ borderRadius: "var(--mantine-radius-md)" }}
                    align="center"
                    justify="center"
                    bg="#FFFF89"
                    py={4}
                    key={`soft-skill-${columnIndex * 4 + index}`}
                  >
                    <Title c="#FA7800">{value}</Title>
                  </Flex>
                ))}
              </Stack>
            ))}
            <Stack justify="flex-start" h="stretch" gap={10}>
              <Box bg="#FFAC00" style={{ borderRadius: "var(--mantine-radius-md)" }} px={"xs"} pb={"xs"}>
                <Group gap={0} c="#FFFF8B">
                  <Title ff="Radiate Sans Semi Expanded">
                    <span style={{ fontSize: "calc(2.125rem * var(--mantine-scale) * 1.25)" }}>N</span>EXT LV
                  </Title>
                  <Title
                    ff="Molde Expanded"
                    fw={500}
                    style={{ fontSize: "calc(2.125rem * var(--mantine-scale) * 1.25)" }}
                  >
                    {getYearsDifference(new Date("2008-06-18"), new Date()) + 1}
                  </Title>
                </Group>
                <Flex
                  style={{ borderRadius: "var(--mantine-radius-md)" }}
                  align="center"
                  justify="center"
                  bg="#FFFF89"
                  py={4}
                >
                  <Title c="#FA7800">Success</Title>
                </Flex>
              </Box>
              <Group>
                {[...Array(4).keys()].map((_, index) => (
                  <Flex
                    style={{ borderRadius: "var(--mantine-radius-md)" }}
                    bg="#FFAD00"
                    align="center"
                    justify="center"
                    key={`question-mark-box-${index}`}
                    px="sm"
                  >
                    <IconQuestionMark stroke={2} width={48} height={48} color="#FFFF89" />
                  </Flex>
                ))}
              </Group>
            </Stack>
          </Group>
        </Box>

        <BackButton handleClose={handleClose} right />
      </Box>
    </Box>
  );
};

export default Skills;
