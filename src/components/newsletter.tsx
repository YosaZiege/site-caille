import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const NewsLetter = () => {
   return (
      <section className="py-16 bg-amber-50">
         <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
               <h2 className="text-3xl font-bold mb-4 text-amber-800">
                  Restez informé
               </h2>
               <p className="text-gray-600 mb-8">
                  Inscrivez-vous à notre newsletter pour recevoir nos offres
                  spéciales et nos conseils de préparation.
               </p>

               <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                     type="email"
                     placeholder="Votre adresse email"
                     className="flex-grow border-amber-300 focus:border-amber-500 focus:ring-amber-500 text-sm"
                  />
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white !rounded-button cursor-pointer whitespace-nowrap">
                     S&apos;inscrire
                     <i className="fas fa-paper-plane ml-2"></i>
                  </Button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default NewsLetter
