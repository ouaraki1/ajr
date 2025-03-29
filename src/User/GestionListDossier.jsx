// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FiFile, FiArchive } from "react-icons/fi";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Folder, LogOut, Home, File } from "lucide-react";
// import { FiMenu, FiX } from "react-icons/fi";
// import logo from "../../img/logo.png";
// import { Link } from "react-router-dom";
// import { ChevronRight, Send } from "lucide-react";

// export default function ListDossier() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");

//   const footerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const handleNewsletterSubmit = (e) => {
//     e.preventDefault();
//     // Add newsletter subscription logic here
//     console.log("Subscribing with email:", email);
//     setEmail("");
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//       },
//     },
//   };

//   const cardHoverVariants = {
//     hover: {
//       y: -5,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 10,
//       },
//     },
//   };

//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//       {/* Animated Navbar */}
//       <motion.nav
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100 shadow-sm"
//       >
//         <div className="container mx-auto flex justify-between items-center py-4 px-6">
//           {/* Animated Logo */}
//           <motion.div
//             className="flex items-center space-x-3 cursor-pointer group"
//             onClick={() => navigate("/AccueilU")}
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <motion.img
//               src={logo}
//               alt="logo"
//               className="h-12 w-auto"
//               whileHover={{ rotate: [0, -5, 5, -3, 3, 0] }}
//               transition={{ duration: 0.6 }}
//             />
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-6">
//             <motion.button
//               onClick={() => navigate("/AccueilU")}
//               className="flex items-center space-x-2 font-medium text-gray-700 hover:text-blue-600 transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <motion.div whileHover={{ rotate: 5 }}>
//                 <Home className="h-5 w-5" />
//               </motion.div>
//               <span>Accueil</span>
//             </motion.button>

//             <motion.button
//               onClick={() => navigate("/GestionDossier")}
//               className="flex items-center space-x-2 font-medium text-gray-700 hover:text-blue-600 transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <motion.div whileHover={{ rotate: 5 }}>
//                 <File className="h-5 w-5" />
//               </motion.div>
//               <span>Nouveau Dossier</span>
//             </motion.button>

//             <motion.button
//               onClick={() => navigate("/ListDossier")}
//               className="flex items-center space-x-2 font-medium text-gray-700 hover:text-blue-600 transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <motion.div whileHover={{ rotate: 5 }}>
//                 <Folder className="h-5 w-5" />
//               </motion.div>
//               <span>Liste des Dossiers</span>
//             </motion.button>

//             <motion.button
//               className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-all"
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 10px 15px -3px rgba(239, 68, 68, 0.3)",
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <LogOut className="h-5 w-5" />
//               <span>Déconnexion</span>
//             </motion.button>
//           </div>

//           {/* Mobile Menu Button */}
//           <motion.button
//             className="p-2 rounded-lg md:hidden bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all"
//             onClick={() => setMenuOpen(!menuOpen)}
//             whileTap={{ scale: 0.9 }}
//           >
//             {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </motion.button>
//         </div>

//         {/* Animated Mobile Menu */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden border-t border-gray-100 overflow-hidden"
//             >
//               <div className="py-2 space-y-1">
//                 <motion.button
//                   onClick={() => {
//                     navigate("/AccueilU");
//                     setMenuOpen(false);
//                   }}
//                   className="group flex items-center px-6 py-3 w-full rounded-lg transition-all duration-300 hover:bg-blue-100 cursor-pointer"
//                   whileHover={{ x: 5 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <motion.div
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ repeat: Infinity, duration: 2 }}
//                   >
//                     <Home className="h-5 w-5 mr-3 text-gray-700 transition-all duration-300 group-hover:text-blue-700" />
//                   </motion.div>
//                   <span className="text-gray-700 transition-all duration-300 group-hover:text-blue-700">
//                     Accueil
//                   </span>
//                 </motion.button>

//                 <motion.button
//                   onClick={() => {
//                     navigate("/GestionDossier");
//                     setMenuOpen(false);
//                   }}
//                   className="group flex items-center px-6 py-3 w-full rounded-lg transition-all duration-300 hover:bg-blue-100 cursor-pointer"
//                   whileHover={{ x: 5 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <motion.div
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
//                   >
//                     <File className="h-5 w-5 mr-3 text-gray-700 transition-all duration-300 group-hover:text-blue-700" />
//                   </motion.div>
//                   <span className="text-gray-700 transition-all duration-300 group-hover:text-blue-700">
//                     Nouveau Dossier
//                   </span>
//                 </motion.button>

//                 <motion.button
//                   onClick={() => {
//                     navigate("/ListDossier");
//                     setMenuOpen(false);
//                   }}
//                   className="group flex items-center px-6 py-3 w-full rounded-lg transition-all duration-300 hover:bg-blue-100 cursor-pointer"
//                   whileHover={{ x: 5 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <motion.div
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
//                   >
//                     <Folder className="h-5 w-5 mr-3 text-gray-700 transition-all duration-300 group-hover:text-blue-700" />
//                   </motion.div>
//                   <span className="text-gray-700 transition-all duration-300 group-hover:text-blue-700">
//                     Liste des Dossiers
//                   </span>
//                 </motion.button>

//                 <motion.button
//                   className="flex items-center w-full px-6 py-3 text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
//                   whileHover={{ x: 5 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <motion.div
//                     animate={{ rotate: [0, 10, -10, 0] }}
//                     transition={{ repeat: Infinity, duration: 1.5 }}
//                   >
//                     <LogOut className="h-5 w-5 mr-3" />
//                   </motion.div>
//                   <span>Déconnexion</span>
//                 </motion.button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>

//       {/* Main Content */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="w-auto mx-auto px-4 py-8 "
//       >
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.h1
//             variants={itemVariants}
//             className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
//           >
//             Gestion des Fichiers
//           </motion.h1>

//           <motion.p variants={itemVariants} className="text-gray-600 mb-8">
//             Gérez vos documents et archives avec efficacité
//           </motion.p>

//           <motion.div
//             variants={containerVariants}
//             className="grid grid-cols-1 md:grid-cols-2 gap-6"
//           >
//             {/* Matching Files Card */}
//             <motion.div
//               variants={itemVariants}
//               whileHover="hover"
//               onClick={() => navigate("/matching-files")}
//               className="group relative bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 shadow-lg overflow-hidden cursor-pointer"
//               initial={{ scale: 0.95 }}
//               animate={{ scale: 1 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <motion.div variants={cardHoverVariants} className="h-full">
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="relative z-10 h-full flex flex-col">
//                   <div className="flex items-center mb-4">
//                     <motion.div
//                       className="p-3 rounded-lg bg-white/20 backdrop-blur-sm mr-4"
//                       whileHover={{ rotate: 5 }}
//                     >
//                       <FiFile className="text-white text-2xl" />
//                     </motion.div>
//                     <h2 className="text-2xl font-bold text-white">
//                       Fichiers Correspondants
//                     </h2>
//                   </div>
//                   <p className="text-blue-100 mb-6">
//                     Consultez tous les numéros de fichiers qui correspondent et
//                     existent dans le système
//                   </p>
//                   <div className="mt-auto flex justify-between items-center">
//                     <span className="text-white font-medium">
//                       Explorer les Fichiers
//                     </span>
//                     <motion.div
//                       className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full group-hover:bg-white/30 transition-colors"
//                       whileHover={{ rotate: 90 }}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 text-white"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </motion.div>
//                   </div>
//                 </div>
//                 <motion.div
//                   className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity"
//                   animate={{
//                     x: [0, -5, 5, 0],
//                     y: [0, 5, -5, 0],
//                   }}
//                   transition={{
//                     duration: 8,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <FiFile className="text-white text-8xl" />
//                 </motion.div>
//               </motion.div>
//             </motion.div>

//             {/* Archived Files Card */}
//             <motion.div
//               variants={itemVariants}
//               whileHover="hover"
//               onClick={() => navigate("/archived-files")}
//               className="group relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg overflow-hidden cursor-pointer"
//               initial={{ scale: 0.95 }}
//               animate={{ scale: 1 }}
//               transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
//             >
//               <motion.div variants={cardHoverVariants} className="h-full">
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="relative z-10 h-full flex flex-col">
//                   <div className="flex items-center mb-4">
//                     <motion.div
//                       className="p-3 rounded-lg bg-white/10 backdrop-blur-sm mr-4"
//                       whileHover={{ rotate: 5 }}
//                     >
//                       <FiArchive className="text-indigo-300 text-2xl" />
//                     </motion.div>
//                     <h2 className="text-2xl font-bold text-white">Archives</h2>
//                   </div>
//                   <p className="text-gray-300 mb-6">
//                     Accédez à tous les numéros de fichiers stockés dans
//                     l'archive
//                   </p>
//                   <div className="mt-auto flex justify-between items-center">
//                     <span className="text-indigo-200 font-medium">
//                       Voir les Archives
//                     </span>
//                     <motion.div
//                       className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-white/20 transition-colors"
//                       whileHover={{ rotate: 90 }}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 text-indigo-300"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </motion.div>
//                   </div>
//                 </div>
//                 <motion.div
//                   className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity"
//                   animate={{
//                     x: [0, -5, 5, 0],
//                     y: [0, 5, -5, 0],
//                   }}
//                   transition={{
//                     duration: 10,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: 0.5,
//                   }}
//                 >
//                   <FiArchive className="text-indigo-300 text-8xl" />
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* Animated Footer */}

//       <motion.footer
//         initial="hidden"
//         whileInView="visible"
//         variants={footerVariants}
//         className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-400 py-16 m-"
//       >
//         <div className="container mx-auto px-4 ">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Company Info */}
//             <div>
//               <motion.div
//                 className="flex items-center space-x-3 mb-4"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <motion.img
//                   src={logo}
//                   alt="logo"
//                   className="h-14 w-auto"
//                   whileHover={{ rotate: [0, -5, 5, -3, 3, 0] }}
//                   transition={{ duration: 0.6 }}
//                 />{" "}
//               </motion.div>

//               <p className="text-sm text-gray-400 mb-4">
//                 Solution numérique innovante pour la gestion des documents
//                 administratifs, simplifiant vos processus documentaires avec
//                 technologie et efficacité.
//               </p>

//               <p className="text-xs text-gray-500">
//                 &copy; 2025 GestDocs. Tous droits réservés.
//               </p>
//             </div>

//             {/* Quick Links */}
//             <div className="md:ml-8">
//               <h3 className="text-white font-bold text-lg mb-4">
//                 Liens Rapides
//               </h3>
//               <div className="space-y-2">
//                 {[
//                   { label: "Guide d'utilisation", path: "/guide" },
//                   { label: "FAQ", path: "/faq" },
//                   { label: "Contact", path: "/contact" },
//                   { label: "Politique de confidentialité", path: "/privacy" },
//                 ].map((link, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ x: 5 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     <Link
//                       to={link.path}
//                       className="text-sm text-gray-300 hover:text-white transition-colors flex items-center"
//                     >
//                       <ChevronRight className="h-4 w-4 mr-2 text-blue-400" />
//                       {link.label}
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Newsletter */}
//             <div>
//               <h3 className="text-white font-bold text-lg mb-4">
//                 Restez Informé
//               </h3>
//               <p className="text-sm text-gray-400 mb-4">
//                 Abonnez-vous à notre newsletter pour recevoir les dernières
//                 mises à jour et actualités.
//               </p>

//               <form onSubmit={handleNewsletterSubmit} className="flex">
//                 <input
//                   type="email"
//                   placeholder="Votre adresse email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="flex-grow px-4 py-2 rounded-l-lg text-sm
//                   bg-gray-700 text-white
//                   focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-r-lg
//                   text-sm hover:bg-blue-700 transition-colors
//                   flex items-center"
//                 >
//                   <Send className="h-5 w-4 mr-2" />
//                   S'abonner
//                 </motion.button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </motion.footer>
//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import { FiFile, FiArchive } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, LogOut, Home, File } from "lucide-react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../img/logo.png";
import Footer from "../Component/Footer";

export default function ListDossier() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();




  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex flex-col">
      {/* Animated Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100 shadow-sm"
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Animated Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => navigate("/AccueilU")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={logo}
              alt="logo"
              className="h-12 w-auto"
              whileHover={{ rotate: [0, -5, 5, -3, 3, 0] }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.button
              onClick={() => navigate("/AccueilU")}
              className="flex items-center space-x-2 font-medium text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div whileHover={{ rotate: 5 }}>
                <Home className="h-5 w-5" />
              </motion.div>
              <span>Accueil</span>
            </motion.button>

            <motion.button
              onClick={() => navigate("/GestionDossier")}
              className="flex items-center space-x-2 font-medium text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div whileHover={{ rotate: 5 }}>
                <File className="h-5 w-5" />
              </motion.div>
              <span>Nouveau Dossier</span>
            </motion.button>

            <motion.button
              onClick={() => navigate("/GestionListDossier")}
              className="flex items-center space-x-2 font-medium text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div whileHover={{ rotate: 5 }}>
                <Folder className="h-5 w-5" />
              </motion.div>
              <span>Liste des Dossiers</span>
            </motion.button>

            <motion.button
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-all"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(239, 68, 68, 0.3)",
              }}
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
                <motion.button
                  onClick={() => {
                    navigate("/AccueilU");
                    setMenuOpen(false);
                  }}
                  className="group flex items-center px-6 py-3 w-full rounded-lg transition-all duration-300 hover:bg-blue-100 cursor-pointer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Home className="h-5 w-5 mr-3 text-gray-700 transition-all duration-300 group-hover:text-blue-700" />
                  </motion.div>
                  <span className="text-gray-700 transition-all duration-300 group-hover:text-blue-700">
                    Accueil
                  </span>
                </motion.button>

                <motion.button
                  onClick={() => {
                    navigate("/GestionDossier");
                    setMenuOpen(false);
                  }}
                  className="group flex items-center px-6 py-3 w-full rounded-lg transition-all duration-300 hover:bg-blue-100 cursor-pointer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
                  >
                    <File className="h-5 w-5 mr-3 text-gray-700 transition-all duration-300 group-hover:text-blue-700" />
                  </motion.div>
                  <span className="text-gray-700 transition-all duration-300 group-hover:text-blue-700">
                    Nouveau Dossier
                  </span>
                </motion.button>

                <motion.button
                  onClick={() => {
                    navigate("/GestionListDossier");
                    setMenuOpen(false);
                  }}
                  className="group flex items-center px-6 py-3 w-full rounded-lg transition-all duration-300 hover:bg-blue-100 cursor-pointer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
                  >
                    <Folder className="h-5 w-5 mr-3 text-gray-700 transition-all duration-300 group-hover:text-blue-700" />
                  </motion.div>
                  <span className="text-gray-700 transition-all duration-300 group-hover:text-blue-700">
                    Liste des Dossiers
                  </span>
                </motion.button>

                <motion.button
                  className="flex items-center w-full px-6 py-3 text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <LogOut className="h-5 w-5 mr-3" />
                  </motion.div>
                  <span>Déconnexion</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-auto mx-auto px-4 py-8 flex-grow"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
          >
            Gestion des Fichiers
          </motion.h1>

          <motion.p variants={itemVariants} className="text-gray-600 mb-8">
            Gérez vos documents et archives avec efficacité
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Matching Files Card */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              onClick={() => navigate("/ListDossier")}
              className="group relative bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 shadow-lg overflow-hidden cursor-pointer"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div variants={cardHoverVariants} className="h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <motion.div
                      className="p-3 rounded-lg bg-white/20 backdrop-blur-sm mr-4"
                      whileHover={{ rotate: 5 }}
                    >
                      <FiFile className="text-white text-2xl" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-white">
                      Fichiers Correspondants
                    </h2>
                  </div>
                  <p className="text-blue-100 mb-6">
                    Consultez tous les numéros de fichiers qui correspondent et
                    existent dans le système
                  </p>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-white font-medium">
                      Explorer les Fichiers
                    </span>
                    <motion.div
                      className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full group-hover:bg-white/30 transition-colors"
                      whileHover={{ rotate: 90 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity"
                  animate={{
                    x: [0, -5, 5, 0],
                    y: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiFile className="text-white text-8xl" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Archived Files Card */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              onClick={() => navigate("/ListArchive")}
              className="group relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg overflow-hidden cursor-pointer"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <motion.div variants={cardHoverVariants} className="h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <motion.div
                      className="p-3 rounded-lg bg-white/10 backdrop-blur-sm mr-4"
                      whileHover={{ rotate: 5 }}
                    >
                      <FiArchive className="text-indigo-300 text-2xl" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-white">Archives</h2>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Accédez à tous les numéros de fichiers stockés dans
                    l'archive
                  </p>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-indigo-200 font-medium">
                      Voir les Archives
                    </span>
                    <motion.div
                      className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-white/20 transition-colors"
                      whileHover={{ rotate: 90 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity"
                  animate={{
                    x: [0, -5, 5, 0],
                    y: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <FiArchive className="text-indigo-300 text-8xl" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated Footer */}
      <Footer />
    </div>
  );
}
