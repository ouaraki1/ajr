import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../img/logo.png";
import sectionajr from "../img/SectionAJR.jpg";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation avec transition */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo AJR" className="h-12 w-auto" />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex space-x-8">
            {["Accueil", "À propos", "Services", "Actualités", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  className={`font-medium hover:text-blue-600 transition-colors ${
                    isScrolled ? "text-gray-800" : "text-gray-500"
                  }`}
                >
                  {item}
                </Link>
              )
            )}
          </nav>

          {/* Bouton Connexion */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className={`px-5 py-2 font-semibold rounded-lg shadow transition-colors ${
                isScrolled
                  ? "bg-blue-600 text-gray hover:bg-blue-700"
                  : "bg-white text-blue-700 hover:bg-gray-100"
              }`}
            >
              Connexion
            </Link>
          </div>

          {/* Menu Mobile Burger */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke={isScrolled ? "currentColor" : "white"}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white shadow-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col px-6 py-4 space-y-3">
              {["Accueil", "À propos", "Services", "Actualités", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    className="font-medium text-gray-800 hover:text-blue-600 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                )
              )}
              <Link
                to="/login"
                className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Connexion
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section avec parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond avec effet parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${sectionajr})`,
            transform: isScrolled ? "translateY(10%)" : "translateY(0)",
            transition: "transform 0.5s ease-out",
          }}
        ></div>

        {/* Overlay en dégradé amélioré */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-700/80 to-blue-600/70"></div>

        {/* Contenu animé */}
        <motion.div
          className="relative z-10 max-w-4xl px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Agence Judiciaire du Royaume
          </motion.h1>

          <motion.p
            className="mt-4 text-xl md:text-2xl text-white/90 mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Protéger et défendre les intérêts juridiques de l'État marocain avec
            expertise, engagement et excellence depuis 1928.
          </motion.p>

          {/* Boutons CTA */}
          <motion.div
            className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link
              to="/services"
              className="px-8 py-3 text-lg font-semibold bg-white text-blue-700 rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-gray-100 w-full md:w-auto"
            >
              Nos Services
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 text-lg font-semibold border-2 border-white text-white rounded-full transition duration-300 transform hover:scale-105 hover:bg-white/10 w-full md:w-auto"
            >
              Nous Contacter
            </Link>
          </motion.div>
        </motion.div>

        {/* Indicateur de défilement */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </motion.div>
      </section>

      {/* Présentation avec animations */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
              Notre Mission
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Créée en 1928, l'Agence Judiciaire du Royaume (AJR) joue un rôle
              fondamental dans la défense des intérêts de l'État marocain. Notre
              mission couvre la gestion du contentieux, le conseil juridique et
              la protection des institutions publiques.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Nous mettons notre expertise juridique au service de l'État et des
              établissements publics pour garantir une défense efficace de leurs
              intérêts dans toutes les affaires contentieuses.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
            >
              En savoir plus
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <span className="text-blue-600 text-4xl font-bold">124</span>
                <p className="mt-2 text-gray-700">Juristes spécialisés</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <span className="text-blue-600 text-4xl font-bold">95</span>
                <p className="mt-2 text-gray-700">Années d'expertise</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <span className="text-blue-600 text-4xl font-bold">120</span>
                <p className="mt-2 text-gray-700">Juridictions couvertes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <span className="text-blue-600 text-4xl font-bold">12K</span>
                <p className="mt-2 text-gray-700">Affaires traitées/an</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services et Expertise avec cartes améliorées */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Nos Domaines d'Expertise
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Une expertise juridique complète au service de l'État marocain et
              ses institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-2 bg-blue-600"></div>
              <div className="p-6">
                <div className="rounded-full bg-blue-100 w-14 h-14 flex items-center justify-center mb-4">
                  <span className="text-2xl">📜</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  Expertise Juridique
                </h3>
                <p className="text-gray-700">
                  Une équipe de 124 juristes spécialisés en droit public et
                  privé, capables de gérer des affaires complexes avec une
                  approche stratégique et innovante.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-2 bg-blue-600"></div>
              <div className="p-6">
                <div className="rounded-full bg-blue-100 w-14 h-14 flex items-center justify-center mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  Contentieux Administratif
                </h3>
                <p className="text-gray-700">
                  Défense des intérêts de l'État face aux recours en annulation
                  et à la responsabilité administrative devant toutes les
                  juridictions administratives.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-2 bg-blue-600"></div>
              <div className="p-6">
                <div className="rounded-full bg-blue-100 w-14 h-14 flex items-center justify-center mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  Contentieux Judiciaire
                </h3>
                <p className="text-gray-700">
                  Gestion des litiges impliquant l'État devant les juridictions
                  pénales et civiles, avec une expertise reconnue en matière de
                  récupération de créances.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-2 bg-blue-600"></div>
              <div className="p-6">
                <div className="rounded-full bg-blue-100 w-14 h-14 flex items-center justify-center mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  Transactions & Conseils
                </h3>
                <p className="text-gray-700">
                  Résolution des litiges à l'amiable et accompagnement
                  stratégique des administrations publiques dans leurs projets
                  et décisions.
                </p>
              </div>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-2 bg-blue-600"></div>
              <div className="p-6">
                <div className="rounded-full bg-blue-100 w-14 h-14 flex items-center justify-center mb-4">
                  <span className="text-2xl">🖥️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  Système d'Information
                </h3>
                <p className="text-gray-700">
                  Plateforme numérique intégrée pour une gestion efficace des
                  affaires et des documents juridiques, permettant un suivi en
                  temps réel des dossiers.
                </p>
              </div>
            </motion.div>

            {/* Card 6 */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-2 bg-blue-600"></div>
              <div className="p-6">
                <div className="rounded-full bg-blue-100 w-14 h-14 flex items-center justify-center mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  Relations Internationales
                </h3>
                <p className="text-gray-700">
                  Défense des intérêts du Maroc dans les litiges internationaux
                  et assistance pour les accords bilatéraux et multilatéraux.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Actualités */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Actualités Récentes
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Restez informé des dernières nouvelles juridiques et événements de
            l'AJR
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Article 1 */}
          <motion.article
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="h-48 bg-gray-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-900/20"></div>
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-medium px-2 py-1 rounded">
                Événement
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">15 Mars 2025</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Conférence sur les Nouveaux Enjeux du Droit Public
              </h3>
              <p className="text-gray-700 mb-4">
                L'AJR organise une conférence internationale sur les enjeux
                actuels du droit public...
              </p>
              <a
                href="/actualites/conference-droit-public"
                className="text-blue-600 font-medium hover:text-blue-800"
              >
                Lire la suite →
              </a>
            </div>
          </motion.article>

          {/* Article 2 */}
          <motion.article
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="h-48 bg-gray-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-900/20"></div>
              <div className="absolute top-4 left-4 bg-green-600 text-white text-sm font-medium px-2 py-1 rounded">
                Publication
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">2 Mars 2025</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Rapport Annuel 2024 des Activités de l'AJR
              </h3>
              <p className="text-gray-700 mb-4">
                Découvrez le bilan des activités et réalisations de l'Agence
                Judiciaire du Royaume...
              </p>
              <a
                href="/actualites/rapport-annuel-2024"
                className="text-blue-600 font-medium hover:text-blue-800"
              >
                Lire la suite →
              </a>
            </div>
          </motion.article>

          {/* Article 3 */}
          <motion.article
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="h-48 bg-gray-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-900/20"></div>
              <div className="absolute top-4 left-4 bg-yellow-600 text-white text-sm font-medium px-2 py-1 rounded">
                Formation
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">28 Février 2025</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Nouveau Programme de Formation pour les Collectivités
                Territoriales
              </h3>
              <p className="text-gray-700 mb-4">
                L'AJR lance un programme de formation juridique spécialisé
                destiné aux collectivités...
              </p>
              <a
                href="/actualites/programme-formation-collectivites"
                className="text-blue-600 font-medium hover:text-blue-800"
              >
                Lire la suite →
              </a>
            </div>
          </motion.article>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/actualites"
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Voir toutes les actualités
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA Amélioré */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="mb-8 md:mb-0 md:w-2/3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Besoin d'une assistance juridique?
              </h2>
              <p className="text-xl opacity-90 max-w-xl">
                Contactez nos experts pour discuter de vos besoins spécifiques
                et découvrir comment l'AJR peut vous accompagner dans vos
                démarches.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-700 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
              >
                Prendre Contact
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Moderne */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Section Logo et Présentation */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src={logo} alt="Logo AJR" className="h-10 w-auto" />
                <span className="font-bold text-xl">AJR</span>
              </Link>
              <p className="text-gray-400 mt-4">
                Un pôle d'expertise en droit et contentieux pour la défense des
                intérêts de l'État marocain depuis 1928.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="google.com"
                  className="text-gray-400 hover:text-white transition"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="google.com"
                  className="text-gray-400 hover:text-white transition"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="google.com"
                  className="text-gray-400 hover:text-white transition"
                >
                  <span className="sr-only">YouTube</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Section Liens Rapides */}
            <div>
              <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
              <ul className="space-y-3">
                {[
                  "Accueil",
                  "À propos",
                  "Services",
                  "Actualités",
                  "FAQ",
                  "Mentions légales",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to={
                        item === "Accueil"
                          ? "/"
                          : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                      }
                      className="text-gray-400 hover:text-white transition duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section Services */}
            <div>
              <h3 className="text-xl font-bold mb-4">Nos Services</h3>
              <ul className="space-y-3">
                {[
                  "Contentieux administratif",
                  "Contentieux judiciaire",
                  "Conseil juridique",
                  "Études & publications",
                  "Formations",
                  "Relations internationales",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/services/${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="text-gray-400 hover:text-white transition duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 mr-2 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-400">
                    Avenue Mohammed V, Quartier Administratif
                    <br />
                    Rabat, Maroc
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-400">+212 537 718 967</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-400">contact@ajr.ma</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-400">
                    Lun - Ven : 8h30 - 16h30
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Formulaire d'inscription à la newsletter */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Abonnez-vous à notre newsletter
                </h3>
                <p className="text-gray-400">
                  Restez informé des dernières actualités juridiques et des
                  événements de l'AJR
                </p>
              </div>
              <div>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    className="px-4 py-3 w-full rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-r-lg transition"
                  >
                    S'abonner
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Section Copyright */}
          <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500">
            <p>© 2025 Agence Judiciaire du Royaume. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
