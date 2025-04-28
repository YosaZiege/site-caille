import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Button from './Button';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  description: string;
  badge?: string;
}

const ProductCard = ({ id, name, image, price, oldPrice, description, badge }: ProductCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-56 object-cover" 
        />
        {badge && (
          <div className="absolute top-3 right-3 bg-gold-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
            {badge}
          </div>
        )}
      </div>
      
      <div className="p-5">
        <Link href={`/produits/${id}`} className="block">
          <h3 className="text-lg font-bold text-brown-800 mb-2 hover:text-gold-600 transition-colors">
            {name}
          </h3>
        </Link>
        
        <p className="text-brown-600 text-sm line-clamp-2 mb-4">{description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-baseline">
            <span className="text-xl font-bold text-brown-800">{price.toFixed(2)} €</span>
            {oldPrice && (
              <span className="ml-2 text-sm text-brown-400 line-through">{oldPrice.toFixed(2)} €</span>
            )}
          </div>
          
          <Button 
            variant="primary" 
            size="sm"
            aria-label="Ajouter au panier"
          >
            <ShoppingCart size={16} className="mr-1" />
            Ajouter
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
