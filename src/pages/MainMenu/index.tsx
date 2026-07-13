import { Box, Center, Group, Image, Stack, Text, Title } from "@mantine/core";
import classes from "./index.module.css";

const MainMenu = () => {
  return (
    <Box h="100%" w="100%" className={classes.background}>
      <Center h="100%">
        <Stack align="center" justify="center">
          <Image src="/images/logo.svg" alt="Logo" w={"40vw"} className={classes.logo} />
          <Group gap={100}>
            <Stack gap="xs">
              <Stack align="end" gap={5} className={classes.option}>
                <Title>ABOUT ME</Title>
                <Text>Description.</Text>
              </Stack>
              <Stack align="end" gap={5} className={classes.option}>
                <Title>SKILLS</Title>
                <Text>Description.</Text>
              </Stack>
            </Stack>
            <Stack gap="xs">
              <Stack align="start" gap={5} className={classes.option}>
                <Title>EDUCATION</Title>
                <Text>Description.</Text>
              </Stack>
              <Stack align="start" gap={5} className={classes.option}>
                <Title>PROJECTS</Title>
                <Text>Description.</Text>
              </Stack>
            </Stack>
          </Group>
          <Stack align="center" gap={5} className={classes.option}>
            <Title>CONTACT</Title>
            <Text>Description.</Text>
          </Stack>
        </Stack>
      </Center>
    </Box>
  );
};

export default MainMenu;
