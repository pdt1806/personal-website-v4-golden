import { Box, Center, Group, Stack, Title } from "@mantine/core";
import { IconProps } from "@tabler/icons-react";
import React, { ReactNode } from "react";

const InfoWithIcon = ({
  title,
  children,
  icon: IconElement,
}: {
  title: string;
  children: ReactNode;
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
        {children}
      </Stack>
    </Group>
  );
};

export default InfoWithIcon;
