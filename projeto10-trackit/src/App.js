import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "./context/UserContext";

import TelaLogin from "./telas/TelaLogin";
import TelaCadastro from "./telas/TelaCadastro";
import TelaHabitos from "./telas/TelaHabitos";
import TelaHoje from "./telas/TelaHoje";
import TelaHistorico from "./telas/TelaLogin";

export default function App() {
    const [user, setUser] = useState({});
   
    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<TelaLogin />} />
                    <Route path={"/cadastro"} element={<TelaCadastro />} />
                    <Route path={"/habitos"} element={<TelaHabitos />} />
                    <Route path={"/hoje"} element={<TelaHoje />} />
                    <Route path={"/historico"} element={<TelaHistorico />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}