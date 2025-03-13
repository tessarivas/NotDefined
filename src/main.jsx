import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './pages/home.jsx';
import Proposals from './pages/AllProposals.jsx';
import RegisterIdeas from './pages/IdeaRegister.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';

const root = document.getElementById("root");

createRoot(root).render(
    <StrictMode>
        <BrowserRouter basename="/NotDefined">
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="proposals" element={<Proposals />} />
                    <Route path="registerIdeas" element={<RegisterIdeas />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);