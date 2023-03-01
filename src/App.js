import { useState } from "react";
import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import { darkTheme, lightTheme } from "./utils/theme.js";

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import Video from "./pages/Video";

const Container = styled.div`
  display: flex;
`;

const ThemeProvider = styled.div``;

const Main = styled.div`
  flex: 7;
  /* background-color: white; */
  background-color: #f2f2f2;
`;

// bg: "#f9f9f9",
// bgLighter: "white",
// text: "black",
// textSoft: "#606060",
// soft: "#f5f5f5"

const Wrapper = styled.div`
  /* padding: 96px; */
  /* padding: 22px 96px; */
`;

function App() {
  //   const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
