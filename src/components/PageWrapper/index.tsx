import { Box } from "@mantine/core";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  // const isMobile = useMediaQuery("(max-width: 75em)");

  return <Box h="100vh">{children}</Box>;
};

export default PageWrapper;
