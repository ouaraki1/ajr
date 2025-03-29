import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  FiFilePlus,
  FiUpload,
  FiCheck,
  FiX,
  FiUser,
  FiFolder,
  FiHash,
  FiFileText,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "../../Component/NavBar";
export default function AddDossier() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [fileName, setFileName] = useState("");

  const onSubmit = (data) => {
    // Simulation d'un délai d'envoi
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Dossier ajouté :", data);
        setSuccessMessage("Dossier ajouté avec succès !");
        setTimeout(() => setSuccessMessage(""), 4000);
        reset();
        setFileName("");
        resolve();
      }, 800);
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* navbar */}
      <NavBar />

      <div className="container mx-auto py-12 px-4">
        {/* En-tête de la page */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Ajouter un Nouveau Dossier
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Complétez le formulaire ci-dessous pour créer un nouveau dossier.
            Tous les champs marqués d'un astérisque (*) sont obligatoires.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-2xl"
          >
            {/* Message de succès avec animation */}
            <AnimatePresence>
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 rounded-r-lg flex items-center shadow-md"
                >
                  <div className="bg-green-500 rounded-full p-1 mr-3 text-white">
                    <FiCheck size={16} />
                  </div>
                  <p className="text-green-700 font-medium">{successMessage}</p>
                  <button
                    onClick={() => setSuccessMessage("")}
                    className="ml-auto text-green-500 hover:text-green-700"
                  >
                    <FiX size={18} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Carte du formulaire */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              {/* En-tête coloré */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-6 px-8">
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-lg mr-4">
                    <FiFilePlus size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      Nouveau Dossier
                    </h2>
                    <p className="text-blue-100 text-sm">
                      Remplissez les informations requises
                    </p>
                  </div>
                </div>
              </div>

              {/* Corps du formulaire */}
              <form className="p-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-6">
                  {/* Nom du Professeur */}
                  <div className="relative">
                    <label className="block text-gray-700 font-medium mb-2">
                      Nom du Professeur <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        {...register("professeur", {
                          required: "Le nom du professeur est requis",
                        })}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 ${
                          errors.professeur
                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                        }`}
                        placeholder="ex: Jean Dupont"
                      />
                    </div>
                    {errors.professeur && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1 flex items-center"
                      >
                        <FiX className="mr-1" /> {errors.professeur.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Nature du Dossier */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nature du Dossier <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiFolder className="text-gray-400" />
                      </div>
                      <select
                        {...register("nature", {
                          required:
                            "Veuillez sélectionner la nature du dossier",
                        })}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg appearance-none bg-white transition-all focus:outline-none focus:ring-2 ${
                          errors.nature
                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                        }`}
                      >
                        <option value="">
                          Sélectionnez la nature du dossier
                        </option>
                        <option value="duplicata">Duplicata</option>
                        <option value="Non Trouver">Non Trouvé</option>
                        <option value="normal">Dossier Normal</option>
                        <option value="tous">Tous les types</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    {errors.nature && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1 flex items-center"
                      >
                        <FiX className="mr-1" /> {errors.nature.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Numéro du Dossier */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Numéro(s) du Dossier
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiHash className="text-gray-400" />
                      </div>
                      <textarea
                        className="w-full pl-10 pr-4 py-3 border rounded-lg min-h-24 transition-all focus:outline-none focus:ring-2 border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                        placeholder="Exemple: 1001, 1002, 1003 (séparés par des virgules)"
                        onChange={(e) => {
                          const nums = e.target.value
                            .split(/[,\s]+/)
                            .map((num) => num.trim())
                            .filter((num) => num !== "");
                          setValue("numeroDossier", nums.join(", "));
                        }}
                      ></textarea>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">
                      Vous pouvez saisir plusieurs numéros séparés par des
                      virgules
                    </p>
                  </div>

                  {/* Importer un fichier Excel */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Importer un fichier Excel{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="file-upload"
                        accept=".xlsx, .xls, .pdf"
                        {...register("fichier", {
                          required: "Veuillez importer un fichier",
                        })}
                        className="hidden"
                        onChange={(e) => {
                          handleFileChange(e);
                          register("fichier").onChange(e);
                        }}
                      />
                      <label
                        htmlFor="file-upload"
                        className={`flex items-center justify-center w-full p-4 border-2 border-dashed rounded-lg cursor-pointer transition-all ${
                          fileName
                            ? "bg-blue-50 border-blue-300 hover:border-blue-400"
                            : errors.fichier
                            ? "bg-red-50 border-red-300 hover:border-red-400"
                            : "bg-gray-50 border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <div className="flex flex-col items-center">
                          <div
                            className={`p-3 rounded-full mb-2 ${
                              fileName
                                ? "bg-blue-100 text-blue-600"
                                : errors.fichier
                                ? "bg-red-100 text-red-600"
                                : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {fileName ? (
                              <FiFileText size={24} />
                            ) : (
                              <FiUpload size={24} />
                            )}
                          </div>
                          {fileName ? (
                            <div className="text-center">
                              <p className="text-blue-600 font-medium truncate max-w-xs">
                                {fileName}
                              </p>
                              <p className="text-gray-500 text-sm">
                                Cliquez pour changer de fichier
                              </p>
                            </div>
                          ) : (
                            <div className="text-center">
                              <p
                                className={`font-medium ${
                                  errors.fichier
                                    ? "text-red-600"
                                    : "text-gray-700"
                                }`}
                              >
                                {errors.fichier
                                  ? "Aucun fichier sélectionné"
                                  : "Glissez-déposez un fichier ou cliquez ici"}
                              </p>
                              <p className="text-gray-500 text-sm">
                                Format supporté : XLS, XLSX, PDF
                              </p>
                            </div>
                          )}
                        </div>
                      </label>
                    </div>
                    {errors.fichier && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1 flex items-center"
                      >
                        <FiX className="mr-1" /> {errors.fichier.message}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => {
                      reset();
                      setFileName("");
                    }}
                    className="px-6 py-3 rounded-lg text-gray-700 border border-gray-300 font-medium bg-white hover:bg-gray-50 shadow-sm transition-all flex-1 flex justify-center items-center"
                  >
                    <FiX className="mr-2" /> Réinitialiser
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-md transition-all flex-1 flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Traitement...
                      </>
                    ) : (
                      <>
                        <FiFilePlus className="mr-2" /> Ajouter Dossier
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>

            {/* Aide */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-8 max-w-2xl mx-auto"
            >
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl overflow-hidden shadow-sm">
                {/* En-tête */} 
                <div className="bg-blue-100/70 px-5 py-3 border-b border-blue-200">
                  <h3 className="text-blue-800 font-medium flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Centre d'assistance
                  </h3>
                </div>

                {/* Contenu */}
                <div className="p-5">
                  {/* Options de support */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="bg-white p-4 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-blue-700 mb-2 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Contact par email
                      </h4>
                      <p className="text-sm text-gray-600">
                        Notre équipe est disponible par email à l'adresse:
                      </p>
                      <a
                        href="mailto:support@gestionnaire.fr"
                        className="mt-1 block text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                      >
                        support@gestionnaire.fr
                      </a>
                    </div>

                    {/* Documentation */}
                    <div className="bg-white p-4 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-blue-700 mb-2 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        Documentation
                      </h4>
                      <p className="text-sm text-gray-600">
                        Consultez notre documentation complète:
                      </p>
                      <a
                        href="google.com"
                        className="mt-1 block text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Guide d'utilisation
                      </a>
                    </div>
                  </div>

                  {/* Heures de disponibilité */}
                  <div className="mt-4 pt-3 border-t border-blue-100 text-xs text-gray-500">
                    <p>
                      Assistance disponible du lundi au vendredi, de 9h à 18h.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
