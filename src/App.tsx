//IMPORTAÇÕES
import "./App.css"
import Layout from "./containers/conteudo"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Perfil from "./content/perfil";
import Perfil2 from "./content/perfil2";
import Perfil3 from "./content/perfil3";
import Perfil4 from "./content/perfil4";
import Perfil5 from "./content/perfil5";
import Modal from "./components/modal";
import { store } from "./store";
import { Provider } from "react-redux";
import Entrega from "./components/entrega";
import Perfil6 from "./content/perfil6";
import Cardapio from "./content/cardapio";
import Cardapio2 from "./content/cardapio2";
import Cardapio3 from "./content/cardapio3";
import Cardapio4 from "./content/cardapio4";
import Cardapio5 from "./content/cardapio5";
import Cardapio6 from "./content/cardapio6";
import Load from "./content/load";

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
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/perfil2" element={<Perfil2 />} />
            <Route path="/perfil3" element={<Perfil3 />} />
            <Route path="/perfil4" element={<Perfil4 />} />
            <Route path="/perfil5" element={<Perfil5 />} />
            <Route path="/perfil6" element={<Perfil6 />} />
            <Route path="/cardapio1" element={<Cardapio />} />
            <Route path="/cardapio2" element={<Cardapio2 />} />
            <Route path="/cardapio3" element={<Cardapio3 />} />
            <Route path="/cardapio4" element={<Cardapio4 />} />
            <Route path="/cardapio5" element={<Cardapio5 />} />
            <Route path="/cardapio6" element={<Cardapio6 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </>

)
}

export default App
