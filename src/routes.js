import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import Trailer from "pages/Trailer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase";

function AppRoutes() {
  return (
      <BrowserRouter> 
            <Routes>
              <Route path='/' element={<PaginaBase />}>
                <Route index element={<Inicio />}></Route>
                <Route path='favoritos' element={<Favoritos />}></Route>
                <Route path=':id' element={<Trailer />}></Route>
                <Route path='*' element={<NaoEncontrada />}></Route>
              </Route>
            </Routes>
            
      </BrowserRouter>
  )
}

export default AppRoutes;