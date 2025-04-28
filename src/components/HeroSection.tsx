"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const HeroSection = () => {
  return (
    <section className="relative h-screen-80 flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/6265894/pexels-photo-6265894.jpeg" 
          alt="Élevage de cailles" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-900/70 via-brown-800/50 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-xl text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6"
          >
            Des cailles d'exception <br />
            <span className="text-gold-400">élevées avec passion</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-cream-100 mb-8"
          >
            Découvrez nos cailles de qualité supérieure, élevées dans le respect des traditions et avec les techniques les plus innovantes.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '/produits'}
            >
              Découvrir nos produits
              <ArrowRight size={20} className="ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = '/a-propos'}
            >
              En savoir plus
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
