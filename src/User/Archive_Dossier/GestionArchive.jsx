
// import React, { useState } from "react";
// import { Archive, Link as LinkIcon, Check } from "lucide-react";
// import Navbar from "../../Components/NavBar";
// import { FiSend, FiArchive, FiUser, FiCalendar, FiGrid } from "react-icons/fi";
// import { motion } from "framer-motion";
// function AdminPortal() {
//   const [selectedService, setSelectedService] = useState(null);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [formData, setFormData] = useState({
//     reference: "",
//     professorName: "",
//     fileNumber: "", 
//     reservationDate: "",
//     reason: ""
//   });
//   const [errors, setErrors] = useState({});
  
// // secteur de travaill
//   const secteurs = [
//     { id: "Centre-Nord", label: "Centre-Nord" },
//     { id: "Centre-Sud", label: "Centre-Sud" },
//   ];
//   // Services disponibles
//   const services = [
//     {
//       id: "archive",
//       name: "Envoyer un dossier à l'archive",
//       icon: <Archive size={24} />,
//       description: "Soumettre une demande pour archiver un dossier"
//     },
//     {
//       id: "link",
//       name: "Lier un dossier existant",
//       icon: <LinkIcon size={24} />,
//       description: "Associer votre profil à un dossier dans le système"
//     },
//   ];

//   // Gestion du formulaire
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
    
//     // Effacer l'erreur lors de la modification du champ
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: null
//       });
//     }
//   };
  
//   // Validation du formulaire
//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.reference) {
//       newErrors.reference = "La référence est requise";
//     } else if (!/^ARC-\d{4}-\d{3}$/.test(formData.reference)) {
//       newErrors.reference = "Format attendu: ARC-2025-001";
//     }
    
//     if (!formData.professorName) {
//       newErrors.professorName = "Le nom du professeur est requis";
//     }
    
//     if (!formData.fileNumber) {
//       newErrors.fileNumber = "Le numéro du dossier est requis";
//     } else if (!/^\d{4}-\d{3}$/.test(formData.fileNumber)) {
//       newErrors.fileNumber = "Format attendu: 2025-123";
//     }
    
//     if (!formData.reservationDate) {
//       newErrors.reservationDate = "La date de réservation est requise";
//     }
    
//     if (!formData.reason) {
//       newErrors.reason = "Le motif de la demande est requis";
//     } else if (formData.reason.length <= 10) {
//       newErrors.reason = "Veuillez fournir au moins 20 caractères";
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };
  
//   // Soumission du formulaire
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (validateForm()) {
//       console.log("Formulaire soumis:", formData);
//       setShowSuccess(true);
//       setFormData({
//         reference: "",
//         professorName: "",
//         fileNumber: "",
//         reservationDate: "",
//         reason: ""
//       });
//       setTimeout(() => setShowSuccess(false), 4000);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
//       <Navbar/>
//       <div className="max-w-6xl mx-auto px-4 py-12">
//         {/* En-tête */}
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">
//             Portail de Services Administratifs
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Gérez vos demandes d'archives et documents administratifs en quelques clics
//           </p>
//         </div>
        
//         {/* Conteneur principal */}
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
//           {/* En-tête secondaire */}
//           <div className="bg-gradient-to-r from-purple-600 to-purple-400 p-6 text-white">
//             <h2 className="text-2xl font-semibold">Nouvelle Demande</h2>
//             <p className="opacity-80">Complétez les informations ci-dessous</p>
//           </div>
          
//           {/* Contenu */}
//           <div className="p-6">
//             {/* Premier cadre: Sélection de service */}
//             <div className="mb-8">
//               <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
//                 <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-400 text-white text-sm mr-3">1</span>
//                 Sélectionnez un service
//               </h3>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {services.map((service) => (
//                   <div
//                     key={service.id}
//                     className={`rounded-xl cursor-pointer transition-all duration-300 overflow-hidden ${
//                       selectedService === service.id 
//                         ? "ring-2 ring-purple-500 bg-purple-50" 
//                         : "border border-gray-200 hover:shadow-md"
//                     }`}
//                     onClick={() => {
//                       setSelectedService(service.id);
//                       setShowSuccess(false);
//                     }}
//                   >
//                     <div className="flex p-6">
//                       <div className={`p-4 rounded-xl mr-4 ${
//                         selectedService === service.id 
//                           ? "bg-purple-600 text-white" 
//                           : "bg-purple-100 text-purple-600"
//                       }`}>
//                         {service.icon}
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-lg text-gray-800 mb-1">{service.name}</h4>
//                         <p className="text-gray-600 text-sm">{service.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Séparateur */}
//             {selectedService && (
//               <div className="w-full border-t border-gray-200 my-8"></div>
//             )}
            
//             {/* Deuxième cadre: Formulaire */}
//             {selectedService === "archive" && (
//               <div>
//                 <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
//                   <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-400 text-white text-sm mr-3">2</span>
//                   Compléter la demande
//                 </h3>
                
//                 {!showSuccess ? (
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="text-gray-700 font-medium flex items-center">
//                         <FiUser className="mr-2 text-purple-500" />
//                         Nom Complet
//                       </label>
//                       <input
//                         type="text"
//                         name="nom"
//                         value={formData.nom}
//                         onChange={handleChange}
//                         autoComplete="off"
//                         placeholder="Entrez votre nom complet"
//                         className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
//                       />
//                       {errors.nom && (
//                         <p className="text-red-500 text-sm">{errors.nom}</p>
//                       )}
//                     </div>
      
//                     <div>
//                       <label className="text-gray-700 font-medium flex items-center">
//                         <FiGrid className="mr-2 text-purple-500" />
//                         Secteur de Travail
//                       </label>
//                       <select
//                         name="secteurTravail"
//                         value={formData.secteurTravail}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 bg-white"
//                       >
//                         <option value="" disabled>
//                           Sélectionnez votre secteur de travail
//                         </option>
//                         {secteurs.map((secteur) => (
//                           <option key={secteur.id} value={secteur.id}>
//                             {secteur.label}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
      
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="text-gray-700 font-medium flex items-center">
//                         <FiArchive className="mr-2 text-purple-500" />
//                         Numéro du Dossier
//                       </label>
//                       <input
//                         type="text"
//                         name="dossierID"
//                         value={formData.dossierID}
//                         onChange={handleChange}
//                         autoComplete="off"
//                         placeholder="Exemple: DOS-12345"
//                         className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
//                       />
//                       {errors.dossierID && (
//                         <p className="text-red-500 text-sm">{errors.dossierID}</p>
//                       )}
//                     </div>
      
//                     <div>
//                       <label className="text-gray-700 font-medium flex items-center">
//                         <FiCalendar className="mr-2 text-purple-500" />
//                         Date de Réservation
//                       </label>
//                       <input
//                         type="date"
//                         name="dateReservation"
//                         value={formData.dateReservation}
//                         onChange={handleChange}
//                         min={new Date().toISOString().split("T")[0]}
//                         className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
//                       />
//                       {errors.dateReservation && (
//                         <p className="text-red-500 text-sm">
//                           {errors.dateReservation}
//                         </p>
//                       )}
//                     </div>
//                   </div>
      
//                   <div>
//                     <label className="text-gray-700 font-medium flex items-center">
//                       <FiSend className="mr-2 text-purple-500" />
//                       Motif de la Demande
//                     </label>
//                     <textarea
//                       name="motif"
//                       value={formData.motif}
//                       onChange={handleChange}
//                       placeholder="Veuillez expliquer la raison de votre demande..."
//                       rows={4}
//                       className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
//                     ></textarea>
//                     {errors.motif && (
//                       <p className="text-red-500 text-sm">{errors.motif}</p>
//                     )}
//                   </div>
      
//                   <motion.button
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                     type="submit"
//                     className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center transition-colors shadow-md"
//                   >
//                     <span>Envoyer la Demande</span>
//                     <FiSend className="ml-2" />
//                   </motion.button>
//                 </form>
//                 ) : (
//                   <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg animate-fadeIn">
//                     <div className="flex">
//                       <div className="flex-shrink-0">
//                         <div className="bg-green-100 rounded-full p-2">
//                           <Check size={24} className="text-green-600" />
//                         </div>
//                       </div>
//                       <div className="ml-4">
//                         <h3 className="text-lg font-medium text-green-800">Demande soumise avec succès!</h3>
//                         <div className="mt-2 text-green-700">
//                           <p>Votre demande a été enregistrée et sera traitée par nos services.</p>
//                           <p className="mt-1">Un email de confirmation vous sera envoyé prochainement.</p>
//                         </div>
//                         <div className="mt-4">
//                           <div className="inline-block px-4 py-2 bg-white border border-green-300 rounded-lg text-sm text-green-800">
//                              Référence de suivi: {/*<span className="font-semibold">REQ-{Math.floor(Math.random() * 900000) + 100000}</span> */}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
          
//           {/* Pied de page */}
//           <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
//             <p className="text-sm text-gray-600 text-center">
//               Service des archives administratives © 2025 - Tous droits réservés
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminPortal;




import React, { useState } from "react";
import { Archive, Link as LinkIcon, Check } from "lucide-react";
import { FiSend, FiArchive, FiUser, FiCalendar, FiGrid } from "react-icons/fi";
import { motion } from "framer-motion";
import NavBar from "../../Component/NavBar"
export default function GestionArchive() {
  const [selectedService, setSelectedService] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    secteurTravail: "",
    dossierID: "",
    dateReservation: "",
    motif: ""
  });
  const [errors, setErrors] = useState({});
  
  // Secteur de travail
  const secteurs = [
    { id: "Centre-Nord", label: "Centre-Nord" },
    { id: "Centre-Sud", label: "Centre-Sud" },
  ];
  
  // Services disponibles
  const services = [
    {
      id: "archive",
      name: "Envoyer un dossier à l'archive",
      icon: <Archive size={24} />,
      description: "Soumettre une demande pour archiver un dossier"
    },
    {
      id: "link",
      name: "Lier un dossier existant",
      icon: <LinkIcon size={24} />,
      description: "Associer votre profil à un dossier dans le système"
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const formFieldVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }
  };

  // Gestion du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Effacer l'erreur lors de la modification du champ
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  // Validation du formulaire
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nom) {
      newErrors.nom = "Le nom est requis";
    }
    
    if (!formData.secteurTravail) {
      newErrors.secteurTravail = "Le secteur de travail est requis";
    }
    
    if (!formData.dossierID) {
      newErrors.dossierID = "Le numéro du dossier est requis";
    } else if (!/^DOS-\d{5}$/.test(formData.dossierID)) {
      newErrors.dossierID = "Format attendu: DOS-12345";
    }
    
    if (!formData.dateReservation) {
      newErrors.dateReservation = "La date de réservation est requise";
    }
    
    if (!formData.motif) {
      newErrors.motif = "Le motif de la demande est requis";
    } else if (formData.motif.length <= 10) {
      newErrors.motif = "Veuillez fournir au moins 20 caractères";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Formulaire soumis:", formData);
      setShowSuccess(true);
      setFormData({
        nom: "",
        secteurTravail: "",
        dossierID: "",
        dateReservation: "",
        motif: ""
      });
      setTimeout(() => setShowSuccess(false), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <NavBar/>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 py-12"
      >
        {/* En-tête */}
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Portail de Services Administratifs
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gérez vos demandes d'archives et documents administratifs en quelques clics
          </p>
        </motion.div>
        
        {/* Conteneur principal */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8"
        >
          {/* En-tête secondaire */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-400 p-6 text-white relative overflow-hidden">
            <motion.div
              animate={{ 
                x: [0, 10, 0],
                y: [0, 5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 8,
                ease: "easeInOut"
              }}
              className="absolute top-0 right-0 w-64 h-64 rounded-full bg-purple-300 opacity-20 -mt-24 -mr-24"
            />
            <motion.div
              animate={{ 
                x: [0, -15, 0],
                y: [0, 10, 0] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 10,
                ease: "easeInOut"
              }}
              className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-purple-300 opacity-20 -mb-16 -ml-16"
            />
            <h2 className="text-2xl font-semibold relative z-10">Nouvelle Demande</h2>
            <p className="opacity-80 relative z-10">Complétez les informations ci-dessous</p>
          </div>
          
          {/* Contenu */}
          <div className="p-6">
            {/* Premier cadre: Sélection de service */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-400 text-white text-sm mr-3">1</span>
                Sélectionnez un service
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {services.map((service) => (
                  <motion.div
                    variants={itemVariants}
                    key={service.id}
                    className={`rounded-xl cursor-pointer transition-all duration-300 overflow-hidden border ${
                      selectedService === service.id 
                        ? "ring-2 ring-purple-500 bg-purple-50 border-transparent" 
                        : "border-gray-200 hover:shadow-md"
                    }`}
                    onClick={() => {
                      setSelectedService(service.id);
                      setShowSuccess(false);
                    }}
                    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(124, 58, 237, 0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex p-6">
                      <motion.div 
                        className={`p-4 rounded-xl mr-4 ${
                          selectedService === service.id 
                            ? "bg-purple-600 text-white" 
                            : "bg-purple-100 text-purple-600"
                        }`}
                        animate={selectedService === service.id ? 
                          { scale: [1, 1.2, 1], rotate: [0, 5, 0] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        {service.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800 mb-1">{service.name}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Séparateur */}
            {selectedService && (
              <motion.div 
                initial={{ scaleX: 0 }} 
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full border-t border-gray-200 my-8"
              ></motion.div>
            )}
            
            {/* Deuxième cadre: Formulaire */}
            {selectedService === "archive" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-400 text-white text-sm mr-3">2</span>
                  Compléter la demande
                </h3>
                
                {!showSuccess ? (
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={formFieldVariants}>
                        <label className="text-gray-700 font-medium flex items-center">
                          <FiUser className="mr-2 text-purple-500" />
                          Nom Complet
                        </label>
                        <input
                          type="text"
                          name="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          autoComplete="off"
                          placeholder="Entrez votre nom complet"
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                        />
                        {errors.nom && (
                          <motion.p 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.nom}
                          </motion.p>
                        )}
                      </motion.div>
        
                      <motion.div variants={formFieldVariants}>
                        <label className="text-gray-700 font-medium flex items-center">
                          <FiGrid className="mr-2 text-purple-500" />
                          Secteur de Travail
                        </label>
                        <select
                          name="secteurTravail"
                          value={formData.secteurTravail}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 bg-white transition-all duration-300"
                        >
                          <option value="" disabled>
                            Sélectionnez votre secteur de travail
                          </option>
                          {secteurs.map((secteur) => (
                            <option key={secteur.id} value={secteur.id}>
                              {secteur.label}
                            </option>
                          ))}
                        </select>
                        {errors.secteurTravail && (
                          <motion.p 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.secteurTravail}
                          </motion.p>
                        )}
                      </motion.div>
                    </div>
        
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={formFieldVariants}>
                        <label className="text-gray-700 font-medium flex items-center">
                          <FiArchive className="mr-2 text-purple-500" />
                          Numéro du Dossier
                        </label>
                        <input
                          type="text"
                          name="dossierID"
                          value={formData.dossierID}
                          onChange={handleChange}
                          autoComplete="off"
                          placeholder="Exemple: DOS-12345"
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                        />
                        {errors.dossierID && (
                          <motion.p 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.dossierID}
                          </motion.p>
                        )}
                      </motion.div>
        
                      <motion.div variants={formFieldVariants}>
                        <label className="text-gray-700 font-medium flex items-center">
                          <FiCalendar className="mr-2 text-purple-500" />
                          Date de Réservation
                        </label>
                        <input
                          type="date"
                          name="dateReservation"
                          value={formData.dateReservation}
                          onChange={handleChange}
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                        />
                        {errors.dateReservation && (
                          <motion.p 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.dateReservation}
                          </motion.p>
                        )}
                      </motion.div>
                    </div>
        
                    <motion.div variants={formFieldVariants}>
                      <label className="text-gray-700 font-medium flex items-center">
                        <FiSend className="mr-2 text-purple-500" />
                        Motif de la Demande
                      </label>
                      <textarea
                        name="motif"
                        value={formData.motif}
                        onChange={handleChange}
                        placeholder="Veuillez expliquer la raison de votre demande..."
                        rows={4}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
                      ></textarea>
                      {errors.motif && (
                        <motion.p 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.motif}
                        </motion.p>
                      )}
                    </motion.div>
        
                    <motion.button
                      whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(124, 58, 237, 0.3)" }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md"
                    >
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      >
                        Envoyer la Demande
                      </motion.span>
                      <FiSend className="ml-2" />
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg"
                  >
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.2, 1] }}
                          transition={{ duration: 0.5 }}
                          className="bg-green-100 rounded-full p-2"
                        >
                          <Check size={24} className="text-green-600" />
                        </motion.div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-green-800">Demande soumise avec succès!</h3>
                        <div className="mt-2 text-green-700">
                          <p>Votre demande a été enregistrée et sera traitée par nos services.</p>
                          <p className="mt-1">Un email de confirmation vous sera envoyé prochainement.</p>
                        </div>
                        <div className="mt-4">
                          <motion.div 
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="inline-block px-4 py-2 bg-white border border-green-300 rounded-lg text-sm text-green-800"
                          >
                            Référence de suivi: <span className="font-semibold">REQ-{Math.floor(Math.random() * 900000) + 100000}</span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>
          
          {/* Pied de page */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              Service des archives administratives © 2025 - Tous droits réservés
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

