import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";

const PageWrapper = () => {
  // const isMobile = useMediaQuery("(max-width: 75em)");

  return (
    <Box h="100vh">
      <Outlet />
    </Box>
  );
};

export default PageWrapper;
