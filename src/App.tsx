import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import { createMemoryRouter, RouteObject, RouterProvider } from "react-router-dom";
import { GlobalProvider } from "./contexts/global";
import AboutMe from "./pages/AboutMe";
import MainMenu from "./pages/MainMenu";
import { theme } from "./theme";
import GlobalSounds from "./util/SoundManager";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainMenu />,
    children: [
      {
        path: "/",
        element: <></>,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "*",
        element: <></>,
      },
    ],
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: ["/"],
  initialIndex: 0,
});

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <GlobalProvider>
        <GlobalSounds />
        <Notifications />
        <RouterProvider router={router} />
      </GlobalProvider>
    </MantineProvider>
  );
}
