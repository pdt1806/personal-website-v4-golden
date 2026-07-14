import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";
import MainMenu from "./pages/MainMenu";
import { theme } from "./theme";
import GlobalSounds from "./util/SoundManager";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <PageWrapper />,
    children: [
      {
        path: "/",
        element: <MainMenu />,
      },
      {
        path: "*",
        element: <MainMenu />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <GlobalSounds />
      <Notifications />
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
