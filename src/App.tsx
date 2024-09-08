import "./App.css"
import Layout from "./containers/conteudo"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Perfil from "./content/perfil";
import Modal from "./components/modal";
import {store} from "./store";
import { Provider } from "react-redux";
import Carrinho from "./components/carrinho";

const App = () => {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Layout />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/teste" element={<Modal />} />
              <Route path="/carrinho" element={<Carrinho />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>

  )
}

export default App
