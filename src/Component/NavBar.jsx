import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, LogOut, Home, File } from "lucide-react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../img/logo.png";

export default function Navbar({ onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Animated Logo */}
        <motion.div
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => navigate("/AccueilU")}
          whileHover={{ scale: 1.03 }}
        >
              <motion.img
                src={logo}
                alt="logo"
                className="h-12 w-auto"
                whileHover={{ rotate: [0, -5, 5, -3, 3, 0] }}
                transition={{ duration: 0.6 }}
              />        </motion.div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <motion.button
            onClick={() => navigate("/AccueilU")}
            className="flex items-center space-x-2 font-medium text-gray-700 hover:text-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home className="h-5 w-5" />
            <span>Accueil</span>
          </motion.button>
          <motion.button
            onClick={() => navigate("/GestionDossier")}
            className="flex items-center space-x-2 font-medium text-gray-700 hover:text-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <File className="h-5 w-5" />
            <span>Nouveau Dossier</span>
          </motion.button>
          <motion.button
            onClick={() => navigate("/GestionListDossier")}
            className="flex items-center space-x-2 font-medium text-gray-700 hover:text-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Folder className="h-5 w-5" />
            <span>Liste des Dossiers</span>
          </motion.button>

          <motion.button
            className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogOut className="h-5 w-5" />
            <span>Déconnexion</span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="p-2 rounded-lg md:hidden bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-100 overflow-hidden"
          >
            <div className="py-2 space-y-1">
              {/* Accueil */}
              <motion.button
                onClick={() => navigate("/AccueilU")}
                className="group flex items-center px-6 py-3 w-full rounded-lg transition-all duration-300 hover:bg-blue-100 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Home className="h-5 w-5 mr-3 text-gray-700 transition-all duration-300 group-hover:text-blue-700" />
                <span className="text-gray-700 transition-all duration-300 group-hover:text-blue-700">
                  Accueil
                </span>
              </motion.button>

              {/* Dossier */}
              <motion.button
                onClick={() => navigate("/GestionDossier")}
                className="group flex items-center px-6 py-3 w-full rounded-lg transition-all duration-300 hover:bg-blue-100 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <File className="h-5 w-5 mr-3 text-gray-700 transition-all duration-300 group-hover:text-blue-700" />
                <span className="text-gray-700 transition-all duration-300 group-hover:text-blue-700">
                  Nouveau Dossier
                </span>
              </motion.button>
              {/* List */}
              <motion.button
                onClick={() => navigate("/GestionListDossier")}
                className="group flex items-center px-6 py-3 w-full rounded-lg transition-all duration-300 hover:bg-blue-100 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Folder className="h-5 w-5 mr-3 text-gray-700 transition-all duration-300 group-hover:text-blue-700" />
                <span className="text-gray-700 transition-all duration-300 group-hover:text-blue-700">
                  Liste des Dossiers
                </span>
              </motion.button>

              {/* Déconnexion */}
              <motion.button
                className="flex items-center w-full px-6 py-3 text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                whileTap={{ scale: 0.98 }}
              >
                <LogOut className="h-5 w-5 mr-3" />
                <span>Déconnexion</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
