import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// Componentes
import { HomeContent } from "./Pages/HomeContent";
import { Sucess } from "./Pages/Sucess";
import { Checkout } from "./Pages/Checkout";
//Estilos
import { DefaultTheme } from "./Styles/themes/default";
import { GlobalStyle } from "./Styles/global";
import { Header } from "./components/Header/Header";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<HomeContent />}></Route>
            <Route path="/sucess" element={<Sucess />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Route>
        </Routes>
        {/* importando o tema configurado em styles/global, pois são propriedades globais */}
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
