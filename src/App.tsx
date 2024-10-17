//IMPORTAÇÕES
import "./App.css"
import Layout from "./containers/conteudo"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import Cardapio from "./content/cardapio";
import Cardapio2 from "./content/cardapio2";
import Cardapio3 from "./content/cardapio3";
import Cardapio4 from "./content/cardapio4";
import Cardapio5 from "./content/cardapio5";
import Cardapio6 from "./content/cardapio6";
import Homer from "./arquivosTestes/base";
import Cartao from "./components/cartao";

//APLICAÇÃO
const App = () => {
return (
  <>
    {/**PROVIDER */}
    <Provider store={store}>
      {/**ROTAS */}
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Layout />} />
            <Route path="/cardapio1" element={<Cardapio />} />
            <Route path="/cardapio2" element={<Cardapio2 />} />
            <Route path="/cardapio3" element={<Cardapio3 />} />
            <Route path="/cardapio4" element={<Cardapio4 />} />
            <Route path="/cardapio5" element={<Cardapio5 />} />
            <Route path="/cardapio6" element={<Cardapio6 />} />
            <Route path="/testes" element={<Homer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
)
}

//EXPORTAÇÃO APP
export default App
