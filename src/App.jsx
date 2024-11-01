import Rodape from "./components/Rodape";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Igrejas from "./pages/Igrejas";
import 'bootstrap/dist/css/bootstrap.min.css';
import Igreja from "./pages/Igreja";
import Fortes from "./pages/Fortes";
import Museus from "./pages/Museus";
import Monumentos from "./pages/Monumentos";
import NotFound from './pages/NotFound';


function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Igrejas />} path="/igrejas" />
                <Route element={<Igreja />} path="/igreja/:id" />
                <Route element={<Fortes />} path="/fortes" />
                <Route element={<Museus />} path="/museus" />
                <Route element={<Monumentos />} path="/monumentos" />
                <Route element={<NotFound />} path="*" />
            </Routes>
        </BrowserRouter>
        <Rodape />
    </>
  )
}

export default App
