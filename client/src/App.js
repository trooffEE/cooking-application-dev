import { ThemeProvider } from "styled-components";
import React, { createContext } from "react";
import Wrapper from "./components/jsxComponents/HandyComponents/Wrapper/Wrapper";
import Header from "./components/jsxComponents/Header/Header";
import { AppStyle } from "./components/styledComponents/HandyComponents/HandyComponents";
import colors from "./assets/theme";
import { useSelector } from "react-redux";
import Content from "./components/jsxComponents/Content";

export const ApiContext = createContext(true);

function App() {
  // isDevMode
  const isDevMode = useSelector((state) => state.recipeReducer.isDevMode);
  const isLoggedIn = useSelector((state) => state.loginReducer.isLoggedIn);

  return (
    <ApiContext.Provider value={isDevMode}>
      <ThemeProvider theme={colors}>
        <AppStyle>
          <Header isLoggedIn={isLoggedIn} />
          <Wrapper>
            <main>
              <Content isLoggedIn={isLoggedIn} />
            </main>
          </Wrapper>
        </AppStyle>
      </ThemeProvider>
    </ApiContext.Provider>
  );
}

export default App;
