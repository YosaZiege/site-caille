"use client"
import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import Container from './ui/Container';
import Button from './ui/Button';

const AboutSection = () => {
   const benefits = [
      "Cailles élevées en plein air et nourries aux grains naturels",
      "Méthodes d'élevage respectueuses du bien-être animal",
      "Produits de qualité supérieure, savoureux et sains",
      "Engagement écoresponsable dans toutes nos pratiques",
      "Traçabilité complète de la naissance à l'assiette",
   ];

   return (
      <Section>
         <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
               >
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                     <img
                        src="https://images.pexels.com/photos/7471309/pexels-photo-7471309.jpeg"
                        alt="Notre ferme d'élevage de cailles"
                        className="w-full h-[500px] object-cover"
                     />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gold-500 rounded-full opacity-20 z-0"></div>
                  <div className="absolute -top-6 -left-6 w-40 h-40 bg-olive-500 rounded-full opacity-20 z-0"></div>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
               >
                  <span className="text-gold-600 font-semibold mb-2 block">Notre Histoire</span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-800 mb-6">
                     Une passion familiale pour l'élevage depuis 1985
                  </h2>

                  <p className="text-brown-700 mb-6">
                     Depuis près de 40 ans, notre famille se consacre à l'élevage de cailles de qualité exceptionnelle. Ce qui a commencé comme une petite exploitation s'est transformé en une entreprise florissante, tout en conservant nos valeurs fondamentales : qualité, respect de l'animal et innovation.
                  </p>

                  <p className="text-brown-700 mb-8">
                     Aujourd'hui, nous combinons notre savoir-faire traditionnel avec les technologies modernes pour offrir les meilleures cailles tout en respectant l'environnement et le bien-être animal.
                  </p>

                  <div className="space-y-3 mb-8">
                     {benefits.map((benefit, index) => (
                        <motion.div
                           key={index}
                           initial={{ opacity: 0, y: 10 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.3, delay: index * 0.1 }}
                           className="flex items-start"
                        >
                           <div className="p-1 bg-olive-100 rounded-full text-olive-600 mr-3 mt-0.5">
                              <Check size={16} />
                           </div>
                           <span className="text-brown-700">{benefit}</span>
                        </motion.div>
                     ))}
                  </div>

                  <Button
                     variant="secondary"
                     size="lg"
                     onClick={() => window.location.href = '/a-propos'}
                  >
                     Découvrir notre histoire
                  </Button>
               </motion.div>
            </div>
         </Container>
      </Section>
   );
};

export default AboutSection;
