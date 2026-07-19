import { Box, Title } from "@mantine/core";

const BackButton = ({ handleClose, right = false }: { handleClose: () => void; right?: boolean }) => {
  return (
    <Box style={{ cursor: "pointer" }} onClick={handleClose}>
      <Box
        style={{
          position: "absolute",
          zIndex: 10,
          bottom: "var(--mantine-spacing-md)",
          right: right || right === undefined ? "var(--mantine-spacing-md)" : "auto",
          left: !right ? "var(--mantine-spacing-md)" : "auto",
          backgroundColor: "#feff13",
          borderRadius: "var(--mantine-radius-md)",
          transform: "rotate(10deg)",
        }}
        py="sm"
        px="xl"
      >
        <Title c="white" order={2} style={{ visibility: "hidden" }}>
          &lt; Back
        </Title>
      </Box>
      <Box
        style={{
          position: "absolute",
          zIndex: 10,
          bottom: "var(--mantine-spacing-md)",
          right: right || right === undefined ? "var(--mantine-spacing-md)" : "auto",
          left: !right ? "var(--mantine-spacing-md)" : "auto",
          backgroundColor: "#212121",
          borderRadius: "var(--mantine-radius-md)",
          cursor: "pointer",
        }}
        py="sm"
        px="xl"
      >
        <Title c="white" order={2}>
          &lt; Back
        </Title>
      </Box>
    </Box>
  );
};

export default BackButton;
