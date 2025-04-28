import React from 'react'
import { Badge } from './ui/badge'
import { FaCertificate, FaAward } from 'react-icons/fa'

const About = () => {
   return (
      <section id="about" className="py-16 bg-white">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                  <img
                     src="caille.jpg"
                     alt="Notre élevage de cailles"
                     className="rounded-lg shadow-lg w-full h-auto"
                  />
               </div>

               <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-6 text-amber-800">
                     À propos de notre élevage
                  </h2>
                  <p className="text-gray-700 mb-4">
                     Depuis plus de 20 ans, notre ferme familiale se consacre à
                     l&apos;élevage de cailles de qualité supérieure. Nous avons à cœur
                     de proposer des produits d&apos;excellence, dans le respect du
                     bien-être animal et de l&apos;environnement.
                  </p>
                  <p className="text-gray-700 mb-4">
                     Nos cailles sont élevées en plein air, nourries avec des
                     aliments naturels et sans OGM. Nous privilégions les méthodes
                     d&apos;élevage traditionnelles pour garantir une qualité gustative
                     incomparable.
                  </p>
                  <p className="text-gray-700 mb-6">
                     Notre passion pour l&apos;élevage de qualité nous a permis
                     d&apos;obtenir plusieurs certifications qui témoignent de notre
                     engagement pour l&apos;excellence.
                  </p>

                  <div className="flex space-x-4">
                     <Badge className="px-3 py-1 bg-green-100 text-green-800 border border-green-300">
                        <FaCertificate className="mr-2 inline" />
                        Agriculture Biologique
                     </Badge>
                     <Badge className="px-3 py-1 bg-blue-100 text-blue-800 border border-blue-300">
                        <FaAward className="mr-2 inline" />
                        Label Rouge
                     </Badge>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About
