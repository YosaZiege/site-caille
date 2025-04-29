import React from 'react'
import { Separator } from './ui/separator'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaShieldAlt,
  FaTruck,
  FaUndoAlt,
  FaHeadset,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay
} from 'react-icons/fa'

const Contact = () => {
   return (
      <>
         <section id="contact" className="py-16 bg-white">
            <div className="container mx-auto px-4">
               <h2 className="text-3xl font-bold text-center mb-12 text-amber-800">
                  Contactez-nous
               </h2>

               <div className="grid md:grid-cols-2 gap-12">
                  <div>
                     <h3 className="text-xl font-semibold mb-4 text-amber-800">
                        Envoyez-nous un message
                     </h3>

                     <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                           <Input
                              type="text"
                              placeholder="Nom"
                              className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                           />
                           <Input
                              type="text"
                              placeholder="Prénom"
                              className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                           />
                        </div>

                        <Input
                           type="email"
                           placeholder="Email"
                           className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                        />

                        <Input
                           type="tel"
                           placeholder="Téléphone"
                           className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                        />

                        <textarea
                           placeholder="Votre message"
                           rows={5}
                           className="w-full rounded-md border border-gray-300 focus:border-amber-500 focus:ring-amber-500 p-3"
                        ></textarea>

                        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white !rounded-button cursor-pointer whitespace-nowrap">
                           Envoyer le message
                        </Button>
                     </div>
                  </div>

                  <div>
                     <h3 className="text-xl font-semibold mb-4 text-amber-800">
                        Nos coordonnées
                     </h3>

                     <div className="space-y-6">
                        <div className="flex items-start">
                           <div className="bg-amber-100 p-3 rounded-full mr-4">
                              <FaMapMarkerAlt className="text-amber-600" />
                           </div>
                           <div>
                              <h4 className="font-medium">Adresse</h4>
                              <p className="text-gray-600">
                                 Morroco
                              </p>
                           </div>
                        </div>

                        <div className="flex items-start">
                           <div className="bg-amber-100 p-3 rounded-full mr-4">
                              <FaPhoneAlt className="text-amber-600" />
                           </div>
                           <div>
                              <h4 className="font-medium">Téléphone</h4>
                              <p className="text-gray-600">06 09 39 88 30</p>
                           </div>
                        </div>

                        <div className="flex items-start">
                           <div className="bg-amber-100 p-3 rounded-full mr-4">
                              <FaEnvelope className="text-amber-600" />
                           </div>
                           <div>
                              <h4 className="font-medium">Email</h4>
                              <p className="text-gray-600">contact@caillespremium.fr</p>
                           </div>
                        </div>

                        <div className="flex items-start">
                           <div className="bg-amber-100 p-3 rounded-full mr-4">
                              <FaClock className="text-amber-600" />
                           </div>
                           <div>
                              <h4 className="font-medium">Horaires d&apos;ouverture</h4>
                              <p className="text-gray-600">
                                 Lundi - Vendredi: 9h00 - 18h00
                              </p>
                              <p className="text-gray-600">Samedi: 9h00 - 12h00</p>
                           </div>
                        </div>

                        <div className="flex space-x-4 mt-6">
                           <a
                              href="#"
                              className="bg-amber-100 hover:bg-amber-200 text-amber-600 p-3 rounded-full cursor-pointer"
                           >
                              <FaFacebookF />
                           </a>
                           <a
                              href="#"
                              className="bg-amber-100 hover:bg-amber-200 text-amber-600 p-3 rounded-full cursor-pointer"
                           >
                              <FaInstagram />
                           </a>
                           <a
                              href="#"
                              className="bg-amber-100 hover:bg-amber-200 text-amber-600 p-3 rounded-full cursor-pointer"
                           >
                              <FaTwitter />
                           </a>
                           <a
                              href="#"
                              className="bg-amber-100 hover:bg-amber-200 text-amber-600 p-3 rounded-full cursor-pointer"
                           >
                              <FaYoutube />
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="py-10 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4">
               <div className="flex flex-wrap justify-center items-center gap-8">
                  <div className="text-center">
                     <FaShieldAlt className="text-3xl text-gray-500 mb-2 mx-auto" />
                     <p className="text-sm text-gray-600">Paiement Sécurisé</p>
                  </div>

                  <div className="text-center">
                     <FaTruck className="text-3xl text-gray-500 mb-2 mx-auto" />
                     <p className="text-sm text-gray-600">Livraison Rapide</p>
                  </div>

                  <div className="text-center">
                     <FaUndoAlt className="text-3xl text-gray-500 mb-2 mx-auto" />
                     <p className="text-sm text-gray-600">Retours sous 14 jours</p>
                  </div>

                  <div className="text-center">
                     <FaHeadset className="text-3xl text-gray-500 mb-2 mx-auto" />
                     <p className="text-sm text-gray-600">Support 7j/7</p>
                  </div>
               </div>

               <Separator className="my-8" />

               <div className="flex flex-wrap justify-center items-center gap-6">
                  <FaCcVisa className="text-3xl text-gray-500" />
                  <FaCcMastercard className="text-3xl text-gray-500" />
                  <FaCcPaypal className="text-3xl text-gray-500" />
                  <FaCcApplePay className="text-3xl text-gray-500" />
               </div>
            </div>
         </section>
      </>
   )
}

export default Contact
