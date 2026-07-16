import { Box, Center, Group, Image, Stack, Text, Title } from "@mantine/core";
import { IconBalloonFilled, IconMapPinFilled, IconProps } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { playSound } from "../../util/SoundManager";
import { getHoursUntilNextDate } from "../../util/util";

const LocationGroup = ({
  title,
  description,
  icon: IconElement,
}: {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
}) => {
  return (
    <Group gap="sm" align="start">
      <Box w={60} h={50} bg="#E97405" style={{ borderRadius: "var(--mantine-radius-sm)" }}>
        <Center h="100%" w="100%">
          <IconElement style={{ width: 36, height: 36 }} color="white" />
        </Center>
      </Box>
      <Stack gap="xs">
        <Stack h={50} justify="center">
          <Title order={2} c="#E97405">
            {title}
          </Title>
        </Stack>
        <Title order={2}>{description}</Title>
      </Stack>
    </Group>
  );
};

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* bg layer */}
      <Box
        h="100%"
        w="100%"
        //   className={classes.background}
        style={{ position: "absolute", zIndex: 2, backgroundColor: "#FFFF25" }}
      />

      {/* stripes layer */}
      <Image
        alt="Stripes"
        src="/assets/pages/about/stripes.svg"
        h="100vh"
        w="auto"
        style={{ position: "absolute", zIndex: 3 }}
      />

      <Box h="100%" w="100%" style={{ position: "absolute", zIndex: 4 }}>
        {/* content layer - right     */}
        <Box>
          <Stack gap={0} style={{ transform: "rotate(45deg)", position: "absolute", right: -725, top: -125 }} w="100%">
            <Stack h={500} w="100%" bg="#F31000" justify="end" align="center">
              <Title fz={100} c="white">
                ABOUT ME
              </Title>
            </Stack>
            <Box h={135} w="100%" bg="white">
              <Title fz={100} c="#FFFF24">
                ABOUT ME
              </Title>
            </Box>
          </Stack>

          <Image
            alt="Me"
            src="/assets/pages/about/about_me.png"
            h="90vh"
            w="auto"
            style={{ position: "absolute", bottom: 0, right: 300, filter: "drop-shadow(40px 30px 0 black)" }}
          />
        </Box>

        {/* content layer - left */}
        <Box
          w="max-content"
          style={{
            paddingTop: "calc(2 * var(--mantine-spacing-xl))",
          }}
        >
          <Group gap="0" align="start" w="max-content">
            <Box w={270} h={180} bg="#FFAD00" style={{ position: "relative" }}>
              <Title
                w="max-content"
                style={{
                  fontSize: "calc(2.125rem * var(--mantine-scale) * 2)",
                  position: "absolute",
                  right: 95,
                  top: 20,
                  transform: "rotate(-13deg)",
                }}
                c="#CE6300"
              >
                PLV
              </Title>
              <Title
                ff="Molde Expanded"
                fw={500}
                w="max-content"
                style={{ fontSize: "calc(2.125rem * var(--mantine-scale) * 2.5)", position: "absolute", right: 0 }}
                c="#FFFF8B"
              >
                18
              </Title>
            </Box>
            <Stack gap="0">
              <Stack h={180} justify="center" ml="md">
                <Title order={1}>Benny Nguyen</Title>
                <Title order={2} c="#FFAD00">
                  Comp Sci & Eng Major @ UC Davis
                </Title>
                <Title order={2} c="#FFAD00">
                  Full-stack Web & Software Developer
                </Title>
              </Stack>
              <Group>
                <Title ff="Radiate Sans Semi Expanded" c="#FFAD00">
                  <span style={{ fontSize: "calc(2.125rem * var(--mantine-scale) * 1.5)" }}>N</span>EXT EXP
                </Title>
                <Title ff="Molde Expanded" fw={500} style={{ fontSize: "calc(2.125rem * var(--mantine-scale) * 1.5)" }}>
                  {getHoursUntilNextDate(6, 18)}
                </Title>
              </Group>
            </Stack>
          </Group>
          <Stack
            style={{ marginLeft: "calc(270px + var(--mantine-spacing-md) - 60px - var(--mantine-spacing-sm))" }}
            mt="xl"
            w="max-content"
          >
            <LocationGroup title="Birthplace" description="Ho Chi Minh City, Vietnam" icon={IconBalloonFilled} />
            <LocationGroup title="Based in" description="Antelope, CA / Davis, CA" icon={IconMapPinFilled} />
            <Box
              bg="#FFAC00"
              style={{ borderRadius: "var(--mantine-radius-md)" }}
              w="max-content"
              px="sm"
              pb="sm"
              mt="xl"
            >
              <Title ff="Radiate Sans Semi Expanded" c="#FFFF8B">
                <span style={{ fontSize: "calc(2.125rem * var(--mantine-scale) * 1.5)" }}>O</span>BJECTIVE
              </Title>
              <Box
                bg="#FFFF8B"
                style={{ borderRadius: "var(--mantine-radius-md)" }}
                w="max-content"
                miw={300}
                maw={700}
                p="xs"
              >
                <Text c="#FF7E00">
                  “I’m passionate about turning my ideas into real projects, whether it's creating games or building
                  tools to solve real-world problems. My skill set spans across both software and hardware, constantly
                  improving as I dive deeper into various technologies.”
                </Text>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Box
        style={{
          position: "absolute",
          zIndex: 5,
          bottom: "var(--mantine-spacing-md)",
          right: "var(--mantine-spacing-md)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "var(--mantine-radius-md)",
          cursor: "pointer",
        }}
        p="sm"
        onClick={() => {
          playSound("close");
          navigate("/");
        }}
      >
        <Title c="white" order={2}>
          &lt; Back
        </Title>
      </Box>
    </>
  );
};

export default AboutMe;
