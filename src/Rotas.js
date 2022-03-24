import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from "./views/Home"
import CadastroProduto from './views/produtos/CadastroProduto'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/cadastro-produtos" element={<CadastroProduto/>} />
                <Route exact path="/" element={<Home />} />
            </Routes>
        </HashRouter>
    )
}