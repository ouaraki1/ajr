import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../img/logo.png"; // Ajoute ton logo ici

export default function Login() {
  const {
    register,   
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Formulaire soumis :", data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-blue-800 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-2xl">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="h-16" />
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900">
          Se connecter
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Champ Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
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
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
              placeholder="Entrez votre email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Champ Mot de passe */}
          <div>
            <label className="block text-gray-700 font-medium">
              Mot de passe
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Le mot de passe est requis.",
                minLength: {
                  value: 6,
                  message:
                    "Le mot de passe doit contenir au moins 6 caractères.",
                },
              })}
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 ${
                errors.password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
              placeholder="Entrez votre mot de passe"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Mot de passe oublié */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-blue-500 text-sm hover:underline"
            >
              Mot de passe oublié ?
            </Link>
          </div>

          {/* Bouton Connexion */}
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 focus:outline-none"
          >
            Connexion
          </button>
        </form>

        {/* Lien vers l'accueil */}
        <Link
          to="/"
          className="block w-full text-center mt-4 px-4 py-2 font-bold text-gray-700 bg-gray-300 rounded-lg hover:bg-gray-400 transition-all duration-200"
        >
          Retour à l'accueil
        </Link>

        {/* Lien vers la création de compte */}
        <p className="text-sm text-center text-gray-600">
          Pas encore de compte ?{" "}
          <Link to="/demande" className="text-blue-500 font-medium hover:underline">
            La Demande De Login
          </Link>
        </p>
      </div>
    </div>
  );
}
