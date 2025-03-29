// import React from "react";
// import logo from "../img/logo.png";
// import { Link } from "react-router-dom";
// import { ChevronRight } from "lucide-react";
// import { motion } from "framer-motion";
// import { Send } from "lucide-react";
// import { useState } from "react";

// const footerVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// export default function Footer() {
//   const [email, setEmail] = useState("");

//   const handleNewsletterSubmit = (e) => {
//     e.preventDefault();
//     console.log("Newsletter submitted with email:", email);
//     // Add your submission logic here
//   };

//   return (
//     <>
//       <motion.footer
//         initial="hidden"
//         whileInView="visible"
//         variants={footerVariants}
//         className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-400 py-16"
//       >
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-5 md:grid-cols-3 gap-8">
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
//     </>
//   );
// }



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FiFile, FiArchive } from 'react-icons/fi';
// import { motion } from 'framer-motion';

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       when: "beforeChildren"
//     }
//   }
// };

// const cardVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 10
//     }
//   },
//   hover: {
//     scale: 1.02,
//     transition: {
//       type: "spring",
//       stiffness: 400,
//       damping: 10
//     }
//   }
// };

// export default function Footer  ()  {
//   const navigate = useNavigate();

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//       className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8"
//     >
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">File Management</h1>
//           <p className="text-gray-600 mb-8">Manage your documents and archives efficiently</p>
//         </motion.div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Matching Files Card */}
//           <motion.div
//             variants={cardVariants}
//             whileHover="hover"
//             onClick={() => {
//               navigate('/matching-files');
//             }}
//             className="group relative bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 shadow-lg overflow-hidden cursor-pointer"
//           >
//             <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <div className="relative z-10">
//               <div className="flex items-center mb-4">
//                 <motion.div 
//                   whileHover={{ rotate: 5, scale: 1.1 }}
//                   className="p-3 rounded-lg bg-white/20 backdrop-blur-sm mr-4"
//                 >
//                   <FiFile className="text-white text-2xl" />
//                 </motion.div>
//                 <h2 className="text-2xl font-bold text-white">Matching File Numbers</h2>
//               </div>
//               <p className="text-blue-100 mb-6">View all file numbers that match and exist in the system</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-white font-medium">Explore Files</span>
//                 <motion.div 
//                   whileHover={{ x: 3 }}
//                   className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full group-hover:bg-white/30 transition-colors"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </motion.div>
//               </div>
//             </div>
//             <motion.div 
//               initial={{ x: 20, y: 20 }}
//               animate={{ x: 0, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity"
//             >
//               <FiFile className="text-white text-8xl" />
//             </motion.div>
//           </motion.div>

//           {/* Archived Files Card */}
//           <motion.div
//             variants={cardVariants}
//             whileHover="hover"
//             onClick={() => {
//               navigate('/archived-files');
//             }}
//             className="group relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg overflow-hidden cursor-pointer"
//           >
//             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <div className="relative z-10">
//               <div className="flex items-center mb-4">
//                 <motion.div 
//                   whileHover={{ rotate: -5, scale: 1.1 }}
//                   className="p-3 rounded-lg bg-white/10 backdrop-blur-sm mr-4"
//                 >
//                   <FiArchive className="text-indigo-300 text-2xl" />
//                 </motion.div>
//                 <h2 className="text-2xl font-bold text-white">Archived Files</h2>
//               </div>
//               <p className="text-gray-300 mb-6">Access all file numbers stored in the archive</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-indigo-200 font-medium">View Archive</span>
//                 <motion.div 
//                   whileHover={{ x: 3 }}
//                   className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-white/20 transition-colors"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-300" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </motion.div>
//               </div>
//             </div>
//             <motion.div 
//               initial={{ x: 20, y: 20 }}
//               animate={{ x: 0, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity"
//             >
//               <FiArchive className="text-indigo-300 text-8xl" />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };









import React, { useState } from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { ChevronRight, Send } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants for footer
const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Quick links configuration
const quickLinks = [
  { label: "Guide d'utilisation", path: "/guide" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

// Social media links
const socialLinks = [
  { 
    name: "Facebook", 
    icon: () => (
      <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
    url: "https://facebook.com"
  },
  { 
    name: "Twitter", 
    icon: () => (
      <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
      </svg>
    ),
    url: "https://twitter.com"
  },
  { 
    name: "LinkedIn", 
    icon: () => (
      <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    ),
    url: "https://linkedin.com"
  }
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter submission logic
    console.log("Newsletter submitted with email:", email);
    // TODO: Implement actual newsletter submission
    setEmail(""); // Clear input after submission
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={footerVariants}
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-400 py-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="col-span-full md:col-span-1">
            <motion.div
              className="flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={logo}
                alt="logo"
                className="h-14 w-auto"
                whileHover={{ rotate: [0, -5, 5, -3, 3, 0] }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            <p className="text-sm text-gray-400 mb-4">
              Solution numérique innovante pour la gestion des documents
              administratifs, simplifiant vos processus documentaires avec
              technologie et efficacité.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.2 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-4">
              &copy; 2025 GestDocs. Tous droits réservés.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:ml-8">
            <h3 className="text-white font-bold text-lg mb-4">
              Liens Rapides
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-blue-400" />
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Restez Informé
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Abonnez-vous à notre newsletter pour recevoir les dernières
              mises à jour et actualités.
            </p>

            <form 
              onSubmit={handleNewsletterSubmit} 
              className="flex flex-col sm:flex-row"
            >
              <input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-4 py-2 mb-2 sm:mb-0 sm:rounded-l-lg text-sm 
                bg-gray-700 text-white 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-blue-600 text-white sm:rounded-r-lg 
                text-sm hover:bg-blue-700 transition-colors 
                flex items-center justify-center"
              >
                <Send className="h-5 w-4 mr-2" />
                S'abonner
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}