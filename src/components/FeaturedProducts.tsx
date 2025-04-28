"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import ProductCard from './ui/ProductCard';
import Button from './ui/Button';
import Section from './ui/Section';
import { products } from '@/util/data';

const FeaturedProducts = () => {
  // Select just a few products to feature
  const featuredProducts = products.slice(0, 4);
  
  return (
    <Section bgColor="bg-cream-100">
      <Container>
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-serif font-bold text-brown-800 mb-4"
          >
            Nos produits <span className="text-gold-600">vedettes</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-brown-600 max-w-2xl mx-auto"
          >
            Découvrez notre sélection de cailles et produits dérivés, élevés et préparés avec soin pour vous offrir une qualité exceptionnelle.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => window.location.href = '/produits'}
          >
            Voir tous nos produits
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
};

export default FeaturedProducts;
