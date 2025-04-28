// Product data
export const products = [
   {
      id: "caille-vivante-standard",
      name: "Caille Vivante Standard",
      image: "https://images.pexels.com/photos/7471309/pexels-photo-7471309.jpeg",
      price: 12.99,
      description: "Caille vivante de qualité standard, idéale pour l'élevage ou la production d'œufs.",
      category: "vivant",
      stock: 50,
      details: {
         age: "4-6 semaines",
         poids: "150-180g",
         sexe: "Mixte",
         race: "Coturnix japonica",
      }
   },
   {
      id: "caille-vivante-premium",
      name: "Caille Vivante Premium",
      image: "https://images.pexels.com/photos/6265894/pexels-photo-6265894.jpeg",
      price: 18.99,
      description: "Caille vivante de race supérieure, élevée dans des conditions optimales pour une qualité exceptionnelle.",
      category: "vivant",
      badge: "Premium",
      stock: 25,
      details: {
         age: "4-6 semaines",
         poids: "180-220g",
         sexe: "Femelle",
         race: "Coturnix japonica sélection premium",
      }
   },
   {
      id: "cailles-pretes-a-cuire-4",
      name: "Cailles Prêtes à Cuire (x4)",
      image: "https://images.pexels.com/photos/10313321/pexels-photo-10313321.jpeg",
      price: 24.99,
      oldPrice: 27.99,
      description: "Lot de 4 cailles préparées, vidées et prêtes à cuisiner. Idéal pour un repas familial.",
      category: "viande",
      stock: 30,
      details: {
         poids: "180-200g par caille",
         preparation: "Vidée, prête à cuire",
         conservation: "À consommer sous 3 jours ou à congeler",
         provenance: "Élevage français",
      }
   },
   {
      id: "oeufs-caille-24",
      name: "Œufs de Caille (x24)",
      image: "https://images.pexels.com/photos/4198370/pexels-photo-4198370.jpeg",
      price: 9.99,
      description: "Deux douzaines d'œufs de caille frais, parfaits pour l'apéritif ou la cuisine fine.",
      category: "oeufs",
      stock: 40,
      badge: "Frais",
      details: {
         quantite: "24 œufs",
         calibre: "Standard",
         conservation: "3 semaines au réfrigérateur",
         utilisation: "Cuisine, pâtisserie, apéritif",
      }
   },
   {
      id: "terrine-caille-foie-gras",
      name: "Terrine de Caille au Foie Gras",
      image: "https://images.pexels.com/photos/6605903/pexels-photo-6605903.jpeg",
      price: 19.99,
      description: "Délicieuse terrine artisanale préparée avec nos meilleures cailles et un foie gras de canard d'exception.",
      category: "produits-derives",
      stock: 15,
      details: {
         poids: "180g",
         ingredients: "Viande de caille (40%), foie gras de canard (30%), épices, sel, poivre",
         conservation: "3 mois au réfrigérateur avant ouverture",
         conseils: "Servir frais avec du pain de campagne",
      }
   },
   {
      id: "caille-fumee",
      name: "Caille Fumée",
      image: "https://images.pexels.com/photos/7438093/pexels-photo-7438093.jpeg",
      price: 14.99,
      description: "Caille entière fumée au bois de hêtre, prête à déguster ou à réchauffer légèrement.",
      category: "viande",
      stock: 20,
      details: {
         poids: "200-220g",
         fumage: "Bois de hêtre",
         conservation: "2 semaines au réfrigérateur",
         conseils: "Servir tiède avec une salade de saison",
      }
   },
   {
      id: "kit-elevage-debutant",
      name: "Kit d'Élevage Débutant",
      image: "https://images.pexels.com/photos/4198369/pexels-photo-4198369.jpeg",
      price: 129.99,
      description: "Tout le nécessaire pour débuter l'élevage de cailles: cage, mangeoire, abreuvoir, et guide d'élevage.",
      category: "equipement",
      stock: 8,
      details: {
         contenu: "Cage adaptée, mangeoires, abreuvoirs, guide d'élevage",
         capacite: "Jusqu'à 10 cailles",
         niveau: "Débutant",
         conseils: "Espace minimum recommandé: 2m²",
      }
   },
   {
      id: "aliment-special-cailles-5kg",
      name: "Aliment Spécial Cailles 5kg",
      image: "https://images.pexels.com/photos/867466/pexels-photo-867466.jpeg",
      price: 22.99,
      description: "Mélange de graines et nutriments spécialement formulé pour les cailles, favorisant la ponte et la santé.",
      category: "alimentation",
      stock: 35,
      details: {
         poids: "5kg",
         composition: "Blé, maïs, tourteau de soja, calcium, vitamines et minéraux",
         conservation: "6 mois dans un endroit sec",
         utilisation: "Distribuer 20-30g par caille et par jour",
      }
   },
];

// Blog post data
export const blogPosts = [
   {
      id: "conseils-elevage-cailles",
      title: "Les 5 conseils essentiels pour réussir l'élevage de cailles",
      image: "https://images.pexels.com/photos/7471309/pexels-photo-7471309.jpeg",
      date: "15 mars 2025",
      author: "Jean Dupont",
      excerpt: "Découvrez nos conseils d'experts pour élever des cailles en bonne santé et obtenir une production d'œufs optimale.",
      readingTime: "8 min",
   },
   {
      id: "recettes-cailles-fetes",
      title: "3 recettes de cailles pour impressionner vos invités",
      image: "https://images.pexels.com/photos/7438093/pexels-photo-7438093.jpeg",
      date: "2 avril 2025",
      author: "Sophie Martin",
      excerpt: "Des recettes gourmandes et faciles à préparer pour transformer vos cailles en plats dignes des plus grands restaurants.",
      readingTime: "6 min",
   },
   {
      id: "bienfaits-oeufs-caille",
      title: "Les bienfaits méconnus des œufs de caille sur la santé",
      image: "https://images.pexels.com/photos/4198370/pexels-photo-4198370.jpeg",
      date: "18 avril 2025",
      author: "Dr. Pierre Lefèvre",
      excerpt: "Plus petits mais plus nutritifs que les œufs de poule, les œufs de caille sont de véritables concentrés de bienfaits.",
      readingTime: "10 min",
   },
];

// FAQ data
export const faqItems = [
   {
      question: "Quelle est la différence entre vos cailles standards et premium ?",
      answer: "Nos cailles premium sont issues d'une sélection génétique plus rigoureuse, bénéficient d'une alimentation enrichie et d'un espace d'élevage plus important. Elles sont généralement plus grandes et présentent des caractéristiques supérieures en termes de ponte ou de qualité de viande."
   },
   {
      question: "Comment élever des cailles à la maison ?",
      answer: "L'élevage de cailles nécessite un espace adapté (cage ou volière), une alimentation spécifique, un contrôle de la température et de l'hygiène. Nous proposons des kits de démarrage avec tout le nécessaire et un guide complet. N'hésitez pas à consulter notre blog pour des conseils détaillés ou à nous contacter pour un accompagnement personnalisé."
   },
   {
      question: "Quelle est la durée de conservation des œufs de caille ?",
      answer: "Les œufs de caille se conservent jusqu'à 3 semaines au réfrigérateur. Pour une conservation optimale, nous recommandons de les garder à une température constante entre 4°C et 6°C, et de ne pas les laver avant conservation pour préserver leur couche protectrice naturelle."
   },
   {
      question: "Proposez-vous la livraison de cailles vivantes ?",
      answer: "Oui, nous proposons la livraison de cailles vivantes dans toute la France métropolitaine, dans des conditions optimales garantissant leur bien-être durant le transport. Un suivi spécial est mis en place pour ces livraisons qui s'effectuent en 24-48h selon votre région."
   },
   {
      question: "Comment cuisiner une caille pour qu'elle reste juteuse ?",
      answer: "Pour une caille juteuse, nous recommandons une cuisson rapide à feu vif (rôtie ou poêlée) en l'enveloppant de lard ou en la badigeonnant régulièrement de beurre. Une cuisson au four à 180°C pendant 15-20 minutes est également idéale. N'hésitez pas à consulter notre blog pour des recettes détaillées."
   },
   {
      question: "Vos cailles sont-elles élevées en plein air ?",
      answer: "Oui, toutes nos cailles bénéficient d'un accès à des espaces extérieurs couverts et sécurisés. Nos méthodes d'élevage respectent le bien-être animal et les normes environnementales les plus strictes."
   },
];






export const testimonials = [
   {
      name: "Sophie Dupont",
      role: "Chef Cuisinière",
      comment:
         "La qualité des cailles est exceptionnelle. Mes clients sont ravis des plats que je prépare avec ces produits.",
      rating: 5,
   },
   {
      name: "Jean Martin",
      role: "Amateur de Gastronomie",
      comment:
         "Je commande régulièrement des cailles pour mes dîners. La fraîcheur et le goût sont toujours au rendez-vous.",
      rating: 5,
   },
   {
      name: "Marie Leroy",
      role: "Restauratrice",
      comment:
         "Service impeccable et produits de qualité supérieure. Je recommande vivement.",
      rating: 4,
   },
];


