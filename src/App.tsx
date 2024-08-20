import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Demo from "./topbar";
import Post from "./posts";

export default function App() {
  return <MantineProvider theme={theme}>
    <Demo />
    <Post />
    <Post />
    <Post />
    </MantineProvider>;
}
