import { FiFilePlus, FiFolderPlus, FiLogOut, FiArchive } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../Component/NavBar";
import Footer from "../Component/Footer";
export default function Accueil() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-50">
      {/* Navbar avec animation améliorée */}
      <Navbar />

      {/* Bannière d'en-tête */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-6"
      >
        <div className="container mx-auto max-w-5xl">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Bienvenue sur votre <br className="md:hidden" />
            <span className="text-yellow-300">Gestionnaire de Dossiers</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg max-w-2xl opacity-90"
          >
            Une solution simple et intuitive pour gérer efficacement tous vos
            dossiers professionnels
          </motion.p>
        </div>

        {/* Formes décoratives */}
        <div className="absolute -bottom-8 left-0 right-0 flex justify-center">
          <div className="bg-white shadow-lg rounded-full p-3 text-blue-600">
            <FiFolderPlus size={32} />
          </div>
        </div>
      </motion.div>

      {/* Contenu principal avec animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="container mx-auto px-6 py-16 max-w-5xl"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-12">
          Que souhaitez-vous faire aujourd'hui ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Carte Ajouter un Dossier avec effet 3D */}
          <motion.div
            whileHover={{ scale: 1.03, translateY: -5 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="h-2 bg-blue-600"></div>
            <div
              className="p-6 cursor-pointer"
              onClick={() => navigate("/GestionDossier")}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <FiFilePlus size={28} />
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                    Recommandé
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Ajouter un Dossier
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Créez un nouveau dossier et ajoutez toutes les informations
                  nécessaires pour votre projet.
                </p>
                <br />
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-3 rounded-lg transition-colors flex items-center justify-center">
                  <span>Créer un dossier</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Carte Afficher les Dossiers */}
          <motion.div
            whileHover={{ scale: 1.03, translateY: -5 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="h-2 bg-amber-500"></div>
            <div
              className="p-6 cursor-pointer"
              onClick={() => navigate("/GestionListDossier")}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-amber-100 rounded-lg text-amber-600">
                    <FiFolderPlus size={28} />
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                    dossiers
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Consulter vos Dossiers
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Accédez à l'ensemble de vos dossiers existants pour les
                  consulter, modifier ou archiver.
                </p>
                <br />
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium px-4 py-3 rounded-lg transition-colors flex items-center justify-center">
                  <span>Voir tous les dossiers</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Carte Demande de Dossier depuis Archive (NOUVELLE CARTE) */}
          <motion.div
            whileHover={{ scale: 1.03, translateY: -5 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="h-2 bg-purple-600"></div>
            <div
              className="p-6 cursor-pointer"
              onClick={() => navigate("/GestionArchive")}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                    <FiArchive size={28} />
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-purple-50 text-purple-600 rounded-full">
                    Archives
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Demande depuis Archive
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Recherchez et demandez des dossiers archivés pour une
                  consultation temporaire ou réactivation.
                </p>

                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-3 rounded-lg transition-colors flex items-center justify-center">
                  <span>Demander un dossier</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Section rapide d'accès */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Accès rapides
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-50 p-4 rounded-lg flex flex-col items-center cursor-pointer"
            >
              <div className="p-3 bg-blue-100 rounded-full text-blue-600 mb-3">
                <FiFilePlus size={24} />
              </div>
              <span className="text-sm font-medium text-gray-700">Nouveau</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-50 p-4 rounded-lg flex flex-col items-center cursor-pointer"
            >
              <div className="p-3 bg-green-100 rounded-full text-green-600 mb-3">
                <FiFilePlus size={24} />
              </div>
              <span className="text-sm font-medium text-gray-700">Récents</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-50 p-4 rounded-lg flex flex-col items-center cursor-pointer"
            >
              <Link to="/DemandeArchive">
                <div className="p-3 bg-purple-100 rounded-full text-purple-600 mb-3">
                  <FiArchive size={24} />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Archives
                </span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-50 p-4 rounded-lg flex flex-col items-center cursor-pointer"
            >
              <div className="p-3 bg-red-100 rounded-full text-red-600 mb-3">
                <FiLogOut size={24} />
              </div>
              <span className="text-sm font-medium text-gray-700">
                Déconnexion
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* Enhanced Footer */}
      <Footer />
    </div>
  );
}
