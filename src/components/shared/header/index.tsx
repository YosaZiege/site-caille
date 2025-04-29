import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
   return (
      <header className="sticky top-0 z-50 bg-white shadow-sm">
         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
               <img
                  src="https://readdy.ai/api/search-image?query=Stylized%20quail%20logo%20design%2C%20minimalist%2C%20clean%20lines%2C%20professional%2C%20elegant%2C%20warm%20brown%20and%20gold%20color%20palette%2C%20suitable%20for%20gourmet%20food%20business%2C%20on%20transparent%20background&width=150&height=150&seq=7&orientation=squarish"
                  alt="Logo Cailles Premium"
                  className="h-12 w-auto"
               />
               <span className="text-xl font-bold text-amber-800">
                  Quail
               </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
               <a
                  href="#"
                  className="font-medium text-amber-800 hover:text-amber-600 cursor-pointer whitespace-nowrap"
               >
                  Accueil
               </a>
               <a
                  href="#products"
                  className="font-medium text-gray-700 hover:text-amber-600 cursor-pointer whitespace-nowrap"
               >
                  Produits
               </a>
               <a
                  href="#about"
                  className="font-medium text-gray-700 hover:text-amber-600 cursor-pointer whitespace-nowrap"
               >
                  À propos
               </a>
               <a
                  href="#contact"
                  className="font-medium text-gray-700 hover:text-amber-600 cursor-pointer whitespace-nowrap"
               >
                  Contact
               </a>
            </nav>

            <div className="flex items-center space-x-4">
               <div className="hidden md:flex items-center space-x-2">
                  <a
                     href="#"
                     className="text-gray-700 hover:text-amber-600 cursor-pointer"
                  >
                     FR
                  </a>
                  <span className="text-gray-400">|</span>
                  <a
                     href="#"
                     className="text-gray-500 hover:text-amber-600 cursor-pointer"
                  >
                     EN
                  </a>
               </div>

               <Button
                  variant="outline"
                  className="relative !rounded-button cursor-pointer whitespace-nowrap"
               >
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  Panier
                  <Badge className="absolute -top-2 -right-2 bg-amber-600">0</Badge>
               </Button>

            </div>
         </div>
      </header>
   )
}

export default Header
