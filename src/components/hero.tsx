import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
   return (
      <section className="relative h-[600px] overflow-hidden">
         <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
               backgroundImage: `url('https://readdy.ai/api/search-image?query=Premium%20quality%20quail%20birds%20in%20a%20natural%20farm%20setting%2C%20soft%20golden%20lighting%2C%20elegant%20composition%2C%20professional%20photography%20with%20blurred%20background%20on%20left%20side%20for%20text%20overlay%2C%20high-end%20gourmet%20food%20presentation&width=1440&height=600&seq=8&orientation=landscape')`,
            }}
         >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-transparent"></div>
         </div>

         <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-lg text-white z-10">
               <h1 className="text-5xl font-bold mb-4">
                  Cailles de Qualité Supérieure
               </h1>
               <p className="text-xl mb-8">
                  Découvrez l&apos;excellence de nos cailles élevées avec passion, pour
                  une expérience gastronomique incomparable.
               </p>
               <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg !rounded-button cursor-pointer whitespace-nowrap">
                  Découvrir nos produits
                  <i className="fas fa-arrow-right ml-2"></i>
               </Button>
            </div>
         </div>
      </section>
   )
}

export default Hero
