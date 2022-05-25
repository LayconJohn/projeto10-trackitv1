import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaLogin from "./telas/TelaLogin";
import TelaCadastro from "./telas/TelaCadastro";
import TelaHabitos from "./telas/TelaHabitos";
import TelaHoje from "./telas/TelaHoje";
import TelaHistorico from "./telas/TelaLogin";

export default function App() {
    const [teste, setTeste] = useState("Anônimo")
   
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<TelaLogin />} />
                <Route path={"/cadastro"} element={<TelaCadastro />} />
                <Route path={"/habitos"} element={<TelaHabitos />} />
                <Route path={"/hoje"} element={<TelaHoje />} />
                <Route path={"/historico"} element={<TelaHistorico />} />
            </Routes>
        </BrowserRouter>
    )
}