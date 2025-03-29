import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderPlus,
  Archive,
  Folder,
  ChevronRight,
  LogOut,
  Home
} from "lucide-react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../img/logo.png";
import GestionD from "../img/GestionD.jpeg";
import Footer from "../Component/Footer";
export default function GestionDossier() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);

  // Track mouse position for interactive light effect
  useEffect(() => {
    const updateLight = (e) => {
      setLightPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateLight);

    // Track scroll for navbar background change
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", updateLight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      {/* Enhanced Navbar with glassmorphism effect */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-50 backdrop-blur-md ${
          scrolled ? "bg-white/90 shadow-md" : "bg-white/70"
        } border-b border-gray-100 transition-all duration-300`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Animated Logo with subtle hover effect */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => navigate("/AccueilU")}
            whileHover={{ scale: 1.03 }}
          >
            <img src={logo} alt="logo" className="h-12 w-auto drop-shadow-sm" />
          </motion.div>

          {/* Desktop Navigation with improved spacing and icons */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.button
              onClick={() => navigate("/AccueilU")}
              className="flex items-center space-x-2 font-medium text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="h-5 w-5" />
              <span>Accueil</span>
            </motion.button>

            <motion.button
              onClick={() => navigate("/GestionListDossier")}
              className="flex items-center space-x-2 font-medium text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Folder className="h-5 w-5" />
              <span>Afficher Les Dossiers </span>
            </motion.button>

            <div className="flex items-center space-x-3">
              {/* Notification */}
              {/* <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Bell className="h-5 w-5 text-gray-700" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </motion.button> */}

              <motion.button
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogOut className="h-5 w-5" />
                <span>Déconnexion</span>
              </motion.button>
            </div>
          </div>

          {/* Improved Mobile Menu Button */}
          <motion.button
            className="p-2 rounded-lg md:hidden bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu with better animations */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-100 overflow-hidden bg-white/95 backdrop-blur-md"
            >
              <div className="py-2 space-y-1">

                {/* Accueil */}
                <motion.button
                  onClick={() => navigate("/AccueilU")}
                  className="group flex items-center px-6 py-3 w-full rounded-lg transition-all duration-300 hover:bg-blue-100 cursor-pointer"
                  whileHover={{ scale: 1.03, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Home className="h-5 w-5 mr-3 text-gray-700 transition-all duration-300 group-hover:text-blue-700" />
                  <span className="text-gray-700 transition-all duration-300 group-hover:text-blue-700">
                    Accueil
                  </span>
                </motion.button>

                {/* Dossiers */}
                <motion.button
                  onClick={() => navigate("/ListDossier")}
                  className="group flex items-center px-6 py-3 w-full rounded-lg transition-all duration-300 hover:bg-blue-100 cursor-pointer"
                  whileHover={{ scale: 1.03, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Folder className="h-5 w-5 mr-3 text-gray-700 transition-all duration-300 group-hover:text-blue-700" />
                  <span className="text-gray-700 transition-all duration-300 group-hover:text-blue-700">
                    Afficher Les Dossiers
                  </span>
                </motion.button>

                {/* Notifications in mobile */}
                {/* <motion.button
                  className="group flex items-center px-6 py-3 w-full rounded-lg transition-all duration-300 hover:bg-blue-100 cursor-pointer"
                  whileHover={{ scale: 1.03, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Bell className="h-5 w-5 mr-3 text-gray-700 transition-all duration-300 group-hover:text-blue-700" />
                  <span className="text-gray-700 transition-all duration-300 group-hover:text-blue-700">
                    Notifications
                  </span>
                  <span className="ml-2 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
                    2
                  </span>
                </motion.button> */}

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

      {/* Enhanced Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative flex items-center justify-center min-h-[50vh] bg-gradient-radial from-blue-500 via-indigo-600 to-blue-900 overflow-hidden"
      >
        {/* Enhanced interactive light effect */}
        <motion.div
          className="absolute w-96 h-96 bg-blue-300 opacity-20 blur-3xl rounded-full transition-all duration-300"
          animate={{
            x: lightPosition.x - 150,
            y: lightPosition.y - 150,
          }}
        ></motion.div>

        {/* Image with improved overlay */}
        <motion.img
          src={GestionD}
          alt="Gestion des fichiers"
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        />

        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-800/60 to-blue-900/70 backdrop-blur-sm"></div>

        {/* Animated patterns for visual interest */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

        {/* Enhanced content with better typography */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          >
            Gestion <span className="text-blue-300">des fichiers</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-xl text-gray-200 mt-6 max-w-2xl mx-auto drop-shadow-md"
          >
            Organisez, catégorisez et accédez à vos documents en toute
            simplicité grâce à notre plateforme intuitive.
          </motion.p>

          {/* Improved CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-blue-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Commencez maintenant
            </motion.button>
            <motion.button
              className="px-8 py-3 border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 font-semibold rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Plus d'informations
            </motion.button>
          </motion.div>
        </div>

        {/* Enhanced decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1, rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 bg-cyan-300 blur-3xl rounded-full"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1, rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-300 blur-3xl rounded-full"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1, rotate: 180 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-40 w-24 h-24 bg-purple-300 blur-3xl rounded-full"
        ></motion.div>
      </motion.header>

      {/* Enhanced Main Content with Card Design */}
      <div className="flex-grow container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 text-center mb-12"
        >
          Que souhaitez-vous faire aujourd'hui ?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Nouveau Dossier Card with enhanced design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/AddDossier")}
            className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 relative overflow-hidden"
          >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-pattern opacity-5 group-hover:opacity-10 transition-opacity"></div>

            {/* Gradient accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>

            <div className="flex flex-col items-center text-center space-y-6 relative z-10">
              <motion.div
                className="p-5 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors shadow-md group-hover:shadow-lg"
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                
              >
                <FolderPlus className="h-14 w-14 text-blue-600" />
              </motion.div>

              <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                Nouveau Dossier
              </h2>

              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Créer un dossier
                <span className="text-blue-700 font-bold">
                  &nbsp;Normal&nbsp;
                </span>
                ,
                <span className="text-blue-700 font-bold">
                  &nbsp;Duplicata&nbsp;
                </span>
                ou&nbsp;
                <span className="text-blue-700 font-bold">Non Trouvé</span>
              </p>

              {/* Enhanced stats */}
              <div className="grid grid-cols-3 w-full gap-2 py-2">
                <div className="text-center p-2 rounded-lg bg-blue-50">
                  <p className="text-xs text-gray-600">Normal</p>
                  <p className="font-bold text-blue-700">72%</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-blue-50">
                  <p className="text-xs text-gray-600">Duplicata</p>
                  <p className="font-bold text-blue-700">18%</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-blue-50">
                  <p className="text-xs text-gray-600">Non Trouvé</p>
                  <p className="font-bold text-blue-700">10%</p>
                </div>
              </div>

              <motion.button
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg group-hover:from-blue-700 group-hover:to-blue-600 transition-all duration-300 shadow-md group-hover:shadow-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Commencer</span>
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Archive Card with enhanced design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/AddDArchive")}
            className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 relative overflow-hidden"
          >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-pattern opacity-5 group-hover:opacity-10 transition-opacity"></div>

            {/* Gradient accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>

            <div className="flex flex-col items-center text-center space-y-6 relative z-10">
              <motion.div
                className="p-5 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors shadow-md group-hover:shadow-lg"
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Archive className="h-14 w-14 text-purple-600" />
              </motion.div>

              <h2 className="text-2xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                Archiver un Dossier
              </h2>

              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Déplacer un dossier existant vers les archives avec toutes les
                informations nécessaires
              </p>

              {/* Enhanced stats */}
              <div className="w-full p-3 rounded-lg bg-purple-50 mb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-600">
                    Archives cette année
                  </span>
                  <span className="text-xs font-bold text-purple-700">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: "78%" }}
                  ></div>
                </div>
              </div>

              <motion.button
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg group-hover:from-purple-700 group-hover:to-purple-600 transition-all duration-300 shadow-md group-hover:shadow-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Archiver</span>
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Added stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-5xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Aperçu des activités récentes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-100 rounded-xl p-5">
              <h4 className="text-sm font-medium text-gray-600 mb-2">
                Dossiers créés ce mois
              </h4>
              <p className="text-3xl font-bold text-blue-700">127</p>
              <p className="text-sm text-green-600 mt-2">
                +12% vs mois dernier
              </p>
            </div>

            <div className="bg-purple-100 rounded-xl p-5">
              <h4 className="text-sm font-medium text-gray-600 mb-2">
                Dossiers archivés ce mois
              </h4>
              <p className="text-3xl font-bold text-purple-700">85</p>
              <p className="text-sm text-green-600 mt-2">+5% vs mois dernier</p>
            </div>

            <div className="bg-purple-100 rounded-xl p-5">
              <h4 className="text-sm font-medium text-gray-600 mb-2">
                Dossiers en attente
              </h4>
              <p className="text-3xl font-bold text-purple-700">42</p>
              <p className="text-sm text-red-600 mt-2">+8% vs mois dernier</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Footer */}
<Footer/>
    </div>
  );
}
