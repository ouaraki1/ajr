import React, { useState } from 'react';
import { 
  Users, 
  Folder, 
  LogOut, 
  BarChart3,
  UserPlus,
  FileCheck,
  FileClock,
  Search,
  Filter,
  Plus,
  ChevronDown,
  Settings,
  Bell
} from 'lucide-react';

function DashboardAdmin() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [viewType, setViewType] = useState('all'); // 'all', 'normal', 'archive'

  const stats = {
    normalFiles: 145,
    archivedFiles: 89,
    lawyers: 12,
    technicians: 8,
    totalClients: 234,
    activeFiles: 56,
    completedFiles: 89,
    pendingFiles: 34
  };

  const users = [
    { id: 1, name: 'Jean Dupont', role: 'Avocat', status: 'Actif', lastActive: '2024-03-15', email: 'jean.dupont@email.com', cases: 23 },
    { id: 2, name: 'Marie Martin', role: 'Technicien', status: 'Actif', lastActive: '2024-03-14', email: 'marie.martin@email.com', cases: 15 },
    { id: 3, name: 'Lucas Bernard', role: 'Avocat', status: 'Inactif', lastActive: '2024-03-10', email: 'lucas.bernard@email.com', cases: 8 },
    { id: 4, name: 'Sophie Petit', role: 'Technicien', status: 'Actif', lastActive: '2024-03-15', email: 'sophie.petit@email.com', cases: 19 },
  ];

  const files = [
    { id: 'DOS-001', type: 'normal', date: '2024-03-15', client: 'Entreprise ABC', status: 'En cours', lawyer: 'Jean Dupont', priority: 'Haute' },
    { id: 'DOS-002', type: 'archive', date: '2024-03-10', client: 'Jean Michel', status: 'Complété', lawyer: 'Marie Martin', priority: 'Normale' },
    { id: 'DOS-003', type: 'normal', date: '2024-03-14', client: 'Marie Claire', status: 'En attente', lawyer: 'Lucas Bernard', priority: 'Basse' },
    { id: 'DOS-004', type: 'archive', date: '2024-03-08', client: 'Société XYZ', status: 'Complété', lawyer: 'Sophie Petit', priority: 'Haute' },
  ];

  const handleLogout = () => {
    console.log('Logging out...');
  };

  const StatisticsPage = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Dossiers Actifs</p>
              <h3 className="text-3xl font-bold mt-2">{stats.activeFiles}</h3>
              <p className="text-sm text-blue-100 mt-2">+12% ce mois</p>
            </div>
            <div className="bg-blue-400 bg-opacity-30 p-3 rounded-lg">
              <Folder className="w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl shadow-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Dossiers Complétés</p>
              <h3 className="text-3xl font-bold mt-2">{stats.completedFiles}</h3>
              <p className="text-sm text-green-100 mt-2">+5% ce mois</p>
            </div>
            <div className="bg-green-400 bg-opacity-30 p-3 rounded-lg">
              <FileCheck className="w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl shadow-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Total Avocats</p>
              <h3 className="text-3xl font-bold mt-2">{stats.lawyers}</h3>
              <p className="text-sm text-purple-100 mt-2">Stable</p>
            </div>
            <div className="bg-purple-400 bg-opacity-30 p-3 rounded-lg">
              <Users className="w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl shadow-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100">Total Techniciens</p>
              <h3 className="text-3xl font-bold mt-2">{stats.technicians}</h3>
              <p className="text-sm text-orange-100 mt-2">+2 nouveaux</p>
            </div>
            <div className="bg-orange-400 bg-opacity-30 p-3 rounded-lg">
              <UserPlus className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-6">Distribution des Dossiers</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">En cours</span>
              <div className="w-2/3">
                <div className="h-3 bg-gray-200 rounded-full">
                  <div className="h-3 bg-blue-500 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <span className="text-gray-900 font-medium">45%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Archivés</span>
              <div className="w-2/3">
                <div className="h-3 bg-gray-200 rounded-full">
                  <div className="h-3 bg-green-500 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              <span className="text-gray-900 font-medium">30%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">En attente</span>
              <div className="w-2/3">
                <div className="h-3 bg-gray-200 rounded-full">
                  <div className="h-3 bg-yellow-500 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
              <span className="text-gray-900 font-medium">25%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-6">Activité Récente</h3>
          <div className="space-y-4">
            {files.slice(0, 4).map((file, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  {file.type === 'normal' ? (
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileClock className="w-5 h-5 text-blue-600" />
                    </div>
                  ) : (
                    <div className="p-2 bg-green-100 rounded-lg">
                      <FileCheck className="w-5 h-5 text-green-600" />
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-gray-900">{file.id}</p>
                    <p className="text-sm text-gray-500">{file.client}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  file.status === 'En cours' ? 'bg-yellow-100 text-yellow-800' :
                  file.status === 'Complété' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {file.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const UsersPage = () => (
    <div className="bg-white rounded-xl shadow-lg">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Gestion des Utilisateurs</h2>
          <p className="text-sm text-gray-500 mt-1">Gérez les avocats et les techniciens</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          Ajouter Utilisateur
        </button>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un utilisateur..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <div className="relative">
              <select className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                <option value="">Tous les rôles</option>
                <option value="avocat">Avocat</option>
                <option value="technicien">Technicien</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
          <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Filter className="w-4 h-4 mr-2" />
            Filtres avancés
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilisateur</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dossiers</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dernière Activité</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map(user => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium">
                        {user.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.role === 'Avocat' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.cases} dossiers
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.lastActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-3">
                    <button className="text-blue-600 hover:text-blue-900 font-medium">Modifier</button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <Settings className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const FilesPage = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Gestion des Dossiers</h2>
            <p className="text-sm text-gray-500 mt-1">Vue d'ensemble de tous les dossiers</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setViewType('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewType === 'all' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setViewType('normal')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewType === 'normal' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Normaux
            </button>
            <button
              onClick={() => setViewType('archive')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewType === 'archive' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Archivés
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un dossier..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <div className="relative">
              <select className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                <option value="">Tous les statuts</option>
                <option value="en-cours">En cours</option>
                <option value="complete">Complété</option>
                <option value="en-attente">En attente</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Nouveau Dossier
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N° Dossier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avocat</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priorité</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {files
                .filter(file => viewType === 'all' || file.type === viewType)
                .map(file => (
                <tr key={file.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{file.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">{file.client}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">{file.lawyer}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {file.type === 'normal' ? (
                      <span className="flex items-center text-blue-600">
                        <FileClock className="w-4 h-4 mr-2" />
                        Normal
                      </span>
                    ) : (
                      <span className="flex items-center text-green-600">
                        <FileCheck className="w-4 h-4 mr-2" />
                        Archivé
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      file.priority === 'Haute' ? 'bg-red-100 text-red-800' :
                      file.priority === 'Normale' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {file.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      file.status === 'En cours' ? 'bg-yellow-100 text-yellow-800' :
                      file.status === 'Complété' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {file.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">{file.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-3">
                    <button className="text-blue-600 hover:text-blue-900 font-medium">Voir</button>
                    <button className="text-gray-600 hover:text-gray-900 font-medium">Éditer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-10">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">Admin Panel</h1>
          <nav className="space-y-2">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                currentPage === 'dashboard' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BarChart3 className="w-5 h-5 mr-3" />
              Tableau de Bord
            </button>
            <button
              onClick={() => setCurrentPage('users')}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                currentPage === 'users' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Users className="w-5 h-5 mr-3" />
              Utilisateurs
            </button>
            <button
              onClick={() => setCurrentPage('files')}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                currentPage === 'files' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Folder className="w-5 h-5 mr-3" />
              Dossiers
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="px-8 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {currentPage === 'dashboard' && 'Tableau de Bord'}
                {currentPage === 'users' && 'Gestion des Utilisateurs'}
                {currentPage === 'files' && 'Gestion des Dossiers'}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </button>
            </div>
          </div>
        </header>

        <main className="p-8">
          {currentPage === 'dashboard' && <StatisticsPage />}
          {currentPage === 'users' && <UsersPage />}
          {currentPage === 'files' && <FilesPage />}
        </main>
      </div>
    </div>
  );
}

function App() {
  return <DashboardAdmin />;
}

export default App;