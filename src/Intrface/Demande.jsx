import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../img/logo.png"; // Ajoute ton logo ici

export default function Demande() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); 

  const onSubmit = (data) => {
    console.log("Demande d'accès soumise", data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-blue-800 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-2xl">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="h-16" />
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900">
          Demande d'Accès
        </h2>
        <p className="text-gray-600 text-center">
          Remplissez ce formulaire pour demander un compte en tant que
          Responsable de Service.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Champ Nom complet */}
          <div>
            <label className="block text-gray-700 font-medium">Nom complet</label>
            <input
              type="text"
              {...register("name", { required: "Le nom est requis." })}
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 ${
                errors.name ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
              }`}
              placeholder="Entrez votre nom complet"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Champ Email professionnel */}
          <div>
            <label className="block text-gray-700 font-medium">Email professionnel</label>
            <input
              type="email"
              {...register("email", {
                required: "L'email est requis.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email invalide.",
                },
              })}
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 ${
                errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
              }`}
              placeholder="Entrez votre email professionnel"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Champ Mot de passe */}
          <div>
            <label className="block text-gray-700 font-medium">Mot de passe</label>
            <input
              type="password"
              {...register("password", {
                required: "Le mot de passe est requis.",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
                  message: "Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre.",
                },
              })}
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 ${
                errors.password ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
              }`}
              placeholder="Entrez votre mot de passe"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Champ Rôle */}
          <div>
            <label className="block text-gray-700 font-medium">Rôle</label>
            <select
              {...register("role", { required: "Le rôle est requis." })}
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 ${
                errors.role ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
              }`}
            >
              <option value="">Sélectionnez votre rôle</option>
              <option value="admin">Administrateur</option>
              <option value="manager">Responsable de service</option>
              <option value="employee">Employé</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}
          </div>

          {/* Champ Justification */}
          <div>
            <label className="block text-gray-700 font-medium">Justification</label>
            <textarea
              {...register("justification", { required: "Une justification est requise." })}
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 ${
                errors.justification ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
              }`}
              placeholder="Expliquez pourquoi vous demandez cet accès..."
              rows="3"
            ></textarea>
            {errors.justification && <p className="text-red-500 text-sm mt-1">{errors.justification.message}</p>}
          </div>

          {/* Bouton d'envoi */}
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 focus:outline-none"
          >
            Envoyer la demande
          </button>
        </form>

        {/* Lien vers la page de connexion */}
        <Link
          to="/login"
          className="block w-full text-center mt-4 px-4 py-2 font-bold text-gray-700 bg-gray-300 rounded-lg hover:bg-gray-400 transition-all duration-200"
        >
          Retour à la connexion
        </Link>

        {/* Message d'information */}
        <p className="text-sm text-center text-gray-600">
          Un administrateur examinera votre demande et vous contactera par email.
        </p>
      </div>
    </div>
  );
}