import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './pages/home.jsx';
import Proposals from './pages/AllProposals.jsx';
import SelectedProposal from './pages/SelectedProposal1.jsx';
import SelectedProposal2 from './pages/SelectedProposal2.jsx';
import SelectedProposal3 from './pages/SelectedProposal3.jsx';
import SelectedProposal4 from './pages/SelectedProposal4.jsx';
import SelectedProposal5 from './pages/SelectedProposal5.jsx';
import SelectedProposal6 from './pages/SelectedProposal6.jsx';
import RegisterIdeas from './pages/IdeaRegister.jsx';
import Register from './pages/Register.jsx';
import Tutorial from './pages/Tutorial.jsx';    
import Login from './pages/Login.jsx';
import SelectedProposal1 from './pages/SelectedProposal1.jsx';

const root = document.getElementById("root");

createRoot(root).render(
    <StrictMode>
        <BrowserRouter basename="/NotDefined/"> 
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="proposals" element={<Proposals />} />
                    <Route path="selectedProposal/1" element={<SelectedProposal1/>} />
                    <Route path="selectedProposal/2" element={<SelectedProposal2 />} />
                    <Route path="selectedProposal/3" element={<SelectedProposal3 />} />
                    <Route path="selectedProposal/4" element={<SelectedProposal4 />} />
                    <Route path="selectedProposal/5" element={<SelectedProposal5 />} />
                    <Route path="selectedProposal/6" element={<SelectedProposal6 />} />
                    <Route path="registerIdeas" element={<RegisterIdeas />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route path="tutorial" element={<Tutorial />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
