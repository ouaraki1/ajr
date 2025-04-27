import React, { useState } from "react";
import { 
  Folder, FileClock, Archive, Search, 
   Download, Eye, Menu, 
  LogOut, X, PlusCircle,
  Box, DoorOpen
} from "lucide-react";

const StatusBadge = ({ status }) => {
  const statusStyles = {
    "Complété": "bg-emerald-100 text-emerald-800 border-emerald-200",
    "En cours": "bg-blue-100 text-blue-800 border-blue-200",
    "En attente": "bg-amber-100 text-amber-800 border-amber-200",
    "Nouvelle": "bg-indigo-100 text-indigo-800 border-indigo-200",
    "Urgente": "bg-red-100 text-red-800 border-red-200",
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[status] || "bg-gray-100 text-gray-800 border-gray-200"}`}>
      {status}
    </span>
  );
};

export default function TechnicienDashboard() {
  const [activeTab, setActiveTab] = useState("dossiers");
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [archiveModalOpen, setArchiveModalOpen] = useState(false);
  const [newArchive, setNewArchive] = useState({
    number: "",
    box: "",
    room: ""
  });

  // Données des dossiers avec emplacement physique
  const [dossiers, setDossiers] = useState([
    { 
      id: "DOS-2023-456", 
      client: "Entreprise ABC", 
      type: "Contrat", 
      statut: "Complété", 
      date: "15/03/2023", 
      archive: "ARCH-2023-001",
      box: "B12",
      room: "Salle 3"
    },
    { 
      id: "DOS-2023-789", 
      client: "Société XYZ", 
      type: "Maintenance", 
      statut: "En cours", 
      date: "22/05/2023", 
      archive: "",
      box: "",
      room: ""
    },
    { 
      id: "DOS-2023-123", 
      client: "Corporation Tech", 
      type: "Installation", 
      statut: "En attente", 
      date: "30/04/2023", 
      archive: "",
      box: "",
      room: ""
    },
  ]);

  const [demandes, setDemandes] = useState([
    { id: "DEM-2023-001", avocat: "Maître Dupont", type: "Demande de contrat", client: "Société XYZ", date: "15/06/2023", statut: "Nouvelle" },
    { id: "DEM-2023-002", avocat: "Maître Martin", type: "Support technique", client: "Entreprise ABC", date: "14/06/2023", statut: "Urgente" },
    { id: "DEM-2023-003", avocat: "Maître Legrand", type: "Modification contrat", client: "Corporation Tech", date: "12/06/2023", statut: "En attente" },
  ]);

  const [archives, setArchives] = useState([
    { id: "ARCH-2023-001", dossier: "DOS-2023-456", date: "20/03/2023", box: "B12", room: "Salle 3" },
    { id: "ARCH-2022-045", dossier: "DOS-2022-951", date: "15/12/2022", box: "A05", room: "Salle 1" },
  ]);

  // Fonctions
  const updateDemandeStatus = (id, newStatus) => {
    setDemandes(demandes.map(d => d.id === id ? { ...d, statut: newStatus } : d));
  };

  const addArchive = () => {
    if (!newArchive.number || !newArchive.box || !newArchive.room) return;
    
    const dossierToUpdate = dossiers.find(d => d.id === archiveModalOpen);
    if (dossierToUpdate) {
      setDossiers(dossiers.map(d => 
        d.id === archiveModalOpen ? { 
          ...d, 
          archive: newArchive.number,
          box: newArchive.box,
          room: newArchive.room
        } : d
      ));
      
      setArchives([...archives, {
        id: newArchive.number,
        dossier: archiveModalOpen,
        date: new Date().toLocaleDateString(),
        box: newArchive.box,
        room: newArchive.room
      }]);
    }
    
    setArchiveModalOpen(false);
    setNewArchive({ number: "", box: "", room: "" });
  };

  const filteredDossiers = dossiers.filter(d => 
    d.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    d.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDemandes = demandes.filter(d =>
    d.avocat.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredArchives = archives.filter(a =>
    a.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.dossier.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navItems = [
    { id: "dossiers", icon: Folder, label: "Dossiers" },
    { id: "demandes", icon: FileClock, label: "Demandes Avocats" },
    { id: "archives", icon: Archive, label: "Archives" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transition-transform lg:translate-x-0 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div>
            <h1 className="text-xl font-bold text-gray-800">TechPortal</h1>
            <p className="text-sm text-gray-500">Espace Technicien</p>
          </div>
          <button onClick={() => setMobileMenuOpen(false)} className="lg:hidden text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
          <button 
            onClick={() => console.log("Déconnexion")}
            className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-red-50 rounded-lg transition-colors group"
          >
            <LogOut className="w-5 h-5 mr-3 text-red-500 group-hover:text-red-600" />
            <span className="text-red-500 font-medium group-hover:text-red-600">Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(true)} 
                className="lg:hidden text-gray-500 hover:text-gray-700 mr-4"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-semibold text-gray-800">
                {activeTab === "dossiers" && "Gestion des Dossiers"}
                {activeTab === "demandes" && "Demandes des Avocats"}
                {activeTab === "archives" && "Archives des Dossiers"}
              </h1>
            </div>
            
            <div className="relative w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={`Rechercher ${activeTab === "dossiers" ? "un dossier..." : activeTab === "demandes" ? "une demande..." : "une archive..."}`}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {/* Section Dossiers */}
          {activeTab === "dossiers" && (
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N° Dossier</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Archive</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Boîte/Salle</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredDossiers.map((dossier) => (
                      <tr key={dossier.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          {dossier.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {dossier.client}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {dossier.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <StatusBadge status={dossier.statut} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {dossier.archive || (
                            <button 
                              onClick={() => setArchiveModalOpen(dossier.id)}
                              className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                            >
                              <PlusCircle className="w-4 h-4 mr-1" />
                              Ajouter
                            </button>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {dossier.archive ? (
                            <div className="flex items-center space-x-2">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                <Box className="w-3 h-3 mr-1" />
                                {dossier.box}
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                <DoorOpen className="w-3 h-3 mr-1" />
                                {dossier.room}
                              </span>
                            </div>
                          ) : (
                            <span className="text-gray-400">Non archivé</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Eye className="w-5 h-5" />
                            </button>
                            <button className="text-gray-600 hover:text-gray-900">
                              <Download className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Section Demandes */}
          {activeTab === "demandes" && (
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N° Demande</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avocat</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredDemandes.map((demande) => (
                      <tr key={demande.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          {demande.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {demande.avocat}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {demande.client}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {demande.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={demande.statut}
                            onChange={(e) => updateDemandeStatus(demande.id, e.target.value)}
                            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                          >
                            <option value="Nouvelle">Nouvelle</option>
                            <option value="En attente">En attente</option>
                            <option value="Urgente">Urgente</option>
                            <option value="En cours">En cours</option>
                            <option value="Complété">Complété</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900">
                            Voir détails
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Section Archives */}
          {activeTab === "archives" && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-900">Liste des Archives</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N° Archive</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N° Dossier</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Archivage</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Boîte</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salle</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredArchives.map((archive) => (
                        <tr key={archive.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                            {archive.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                            {archive.dossier}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                            {archive.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              <Box className="w-3 h-3 mr-1" />
                              {archive.box}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <DoorOpen className="w-3 h-3 mr-1" />
                              {archive.room}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900">
                              Consulter
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Modal pour ajouter une archive */}
      {archiveModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Archiver le dossier</h3>
              <button 
                onClick={() => {
                  setArchiveModalOpen(false);
                  setNewArchive({ number: "", box: "", room: "" });
                }}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Numéro d'archive
                </label>
                <input
                  type="text"
                  value={newArchive.number}
                  onChange={(e) => setNewArchive({...newArchive, number: e.target.value})}
                  placeholder="ARCH-2023-XXX"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Numéro de boîte
                  </label>
                  <input
                    type="text"
                    value={newArchive.box}
                    onChange={(e) => setNewArchive({...newArchive, box: e.target.value})}
                    placeholder="B12"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Salle
                  </label>
                  <input
                    type="text"
                    value={newArchive.room}
                    onChange={(e) => setNewArchive({...newArchive, room: e.target.value})}
                    placeholder="Salle 3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => {
                  setArchiveModalOpen(false);
                  setNewArchive({ number: "", box: "", room: "" });
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                onClick={addArchive}
                disabled={!newArchive.number || !newArchive.box || !newArchive.room}
                className={`px-4 py-2 rounded-md text-sm font-medium text-white ${(!newArchive.number || !newArchive.box || !newArchive.room) ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}