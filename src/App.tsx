import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import PageWrapper from "./components/PageWrapper";
import MainMenu from "./pages/MainMenu";
import { theme } from "./theme";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <PageWrapper>
        <MainMenu />
      </PageWrapper>
    </MantineProvider>
  );
}
