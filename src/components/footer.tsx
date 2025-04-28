import React from 'react'
import { Separator } from './ui/separator'
import {
   FaFacebookF,
   FaInstagram,
   FaTwitter,
   FaYoutube,
   FaMapMarkerAlt,
   FaPhoneAlt,
   FaEnvelope
} from 'react-icons/fa'

const Footer = () => {
   return (
      <footer className="bg-amber-900 text-white pt-12 pb-6">
         <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
               <div>
                  <h3 className="text-xl font-semibold mb-4">Cailles Premium</h3>
                  <p className="mb-4 text-amber-200">
                     Spécialiste de l&apos;élevage et de la commercialisation de cailles
                     de qualité supérieure depuis plus de 20 ans.
                  </p>
                  <div className="flex space-x-4">
                     <a
                        href="#"
                        className="text-white hover:text-amber-300 cursor-pointer"
                     >
                        <FaFacebookF />
                     </a>
                     <a
                        href="#"
                        className="text-white hover:text-amber-300 cursor-pointer"
                     >
                        <FaInstagram />
                     </a>
                     <a
                        href="#"
                        className="text-white hover:text-amber-300 cursor-pointer"
                     >
                        <FaTwitter />
                     </a>
                     <a
                        href="#"
                        className="text-white hover:text-amber-300 cursor-pointer"
                     >
                        <FaYoutube />
                     </a>
                  </div>
               </div>

               <div>
                  <h3 className="text-xl font-semibold mb-4">Liens Rapides</h3>
                  <ul className="space-y-2">
                     <li>
                        <a
                           href="#"
                           className="text-amber-200 hover:text-white cursor-pointer"
                        >
                           Accueil
                        </a>
                     </li>
                     <li>
                        <a
                           href="#products"
                           className="text-amber-200 hover:text-white cursor-pointer"
                        >
                           Produits
                        </a>
                     </li>
                     <li>
                        <a
                           href="#about"
                           className="text-amber-200 hover:text-white cursor-pointer"
                        >
                           À propos
                        </a>
                     </li>
                     <li>
                        <a
                           href="#contact"
                           className="text-amber-200 hover:text-white cursor-pointer"
                        >
                           Contact
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="text-amber-200 hover:text-white cursor-pointer"
                        >
                           Blog
                        </a>
                     </li>
                  </ul>
               </div>

               <div>
                  <h3 className="text-xl font-semibold mb-4">Informations</h3>
                  <ul className="space-y-2">
                     <li>
                        <a
                           href="#"
                           className="text-amber-200 hover:text-white cursor-pointer"
                        >
                           Conditions Générales
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="text-amber-200 hover:text-white cursor-pointer"
                        >
                           Politique de Confidentialité
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="text-amber-200 hover:text-white cursor-pointer"
                        >
                           Livraison & Retours
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="text-amber-200 hover:text-white cursor-pointer"
                        >
                           FAQ
                        </a>
                     </li>
                  </ul>
               </div>

               <div>
                  <h3 className="text-xl font-semibold mb-4">Contact</h3>
                  <ul className="space-y-2">
                     <li className="flex items-start">
                        <FaMapMarkerAlt className="mt-1 mr-2 text-amber-300" />
                        <span>Morroco</span>
                     </li>
                     <li className="flex items-start">
                        <FaPhoneAlt className="mt-1 mr-2 text-amber-300" />
                        <span>+06 09 39 88 30</span>
                     </li>
                     <li className="flex items-start">
                        <FaEnvelope className="mt-1 mr-2 text-amber-300" />
                        <span>contact@caillespremium.fr</span>
                     </li>
                  </ul>
               </div>
            </div>

            <Separator className="bg-amber-800 my-6" />

            <div className="text-center text-amber-300 text-sm">
               <p>&copy; 2025 Cailles Premium. Tous droits réservés.</p>
            </div>
         </div>
      </footer>
   )
}

export default Footer
