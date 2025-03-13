import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './pages/home.jsx';
import Iniciatives from './pages/Initiatives.jsx';
import Legislators from './pages/Legislators.jsx';
import Register from './pages/Register.jsx';

const root = document.getElementById("root");

createRoot(root).render(
    <StrictMode>
        <BrowserRouter basename="/NotDefined">
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="iniciatives" element={<Iniciatives />} />
                    <Route path="legislators" element={<Legislators />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
