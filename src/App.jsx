import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Interface Routes
import Home from "./Intrface/Home";
import Login from "./Intrface/Login";
import Demande from "./Intrface/Demande";
//  User Routes
import AccueilU from "./User/AccueilU";
import GestionArchive from "./User/Archive_Dossier/GestionArchive";
import GestionDossier from "./User/GestionDossier";
import AddDossier from "./User/Add_Dossier/AddDossier";
import AddDArchive from "./User/Add_Dossier/AddDArchive";
import GestionListDossier from "./User/GestionListDossier";
import ListDossier from "./User/List_Dossier/ListArchive";
// Admin Routes
import DashboardAdmin from "./Admin/DashboardAdmin"
import DashboardTechnicien from "./Technicien/DashboardTechnicien"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Interface Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Demande" element={<Demande />} />
        {/* User Routes */}
        <Route path="/AccueilU" element={<AccueilU />} />
        <Route path="/GestionArchive" element={<GestionArchive />} />
        <Route path="/GestionDossier" element={<GestionDossier />} />
        <Route path="/AddDossier" element={<AddDossier />} />
        <Route path="/AddDArchive" element={<AddDArchive />} />
        <Route path="/GestionListDossier" element={<GestionListDossier />} />
        <Route path="/ListDossier" element={<ListDossier />} />
        <Route path="/ListArchive" element={<ListDossier />} />
        {/* Admin */}
        <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
        {/* Technicien */}
        <Route path='/DashboardTechnicien' element={<DashboardTechnicien/>}/>
      </Routes>
    </BrowserRouter>
  );
}