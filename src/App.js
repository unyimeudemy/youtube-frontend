import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import { darkTheme, lightTheme } from "./utils/Theme.js";
import {
  //   createBrowserRouter,
  //   RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  //   Link,
} from "react-router-dom";

import Home from "./pages/Home";
import Video from "./pages/Video";
import Search from "./components/Search";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  /* padding: 96px; */
  /* padding: 22px 96px; */
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route path="trend" element={<Home type="trend" />} />
                  <Route path="subscriptions" element={<Home type="sub" />} />
                  <Route path="tags" element={<Search />} />
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
