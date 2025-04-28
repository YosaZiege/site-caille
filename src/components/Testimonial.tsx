"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Container from './ui/Container';
import Section from './ui/Section';

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Philippe Durand",
    role: "Chef Restaurateur",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    quote: "Les cailles de CaillesDOR sont d'une qualité exceptionnelle. Leur chair est tendre et savoureuse, ce qui permet de créer des plats raffinés qui ravissent mes clients.",
    rating: 5,
  },
  {
    name: "Marie Leclerc",
    role: "Cliente Particulière",
    image: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg",
    quote: "Je commande régulièrement des œufs de caille et des cailles prêtes à cuire. La fraîcheur est toujours au rendez-vous et le service client est impeccable.",
    rating: 5,
  },
  {
    name: "Jean-Michel Petit",
    role: "Épicier Fine",
    image: "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg",
    quote: "Mes clients recherchent des produits d'exception et les cailles de CaillesDOR répondent parfaitement à cette exigence. Un partenariat de qualité qui dure depuis des années.",
    rating: 4,
  },
];

const Testimonial = ({ name, role, image, quote, rating }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex text-gold-500 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill={i < rating ? "currentColor" : "none"}
            className={i < rating ? "text-gold-500" : "text-gray-300"}
          />
        ))}
      </div>
      
      <p className="text-brown-700 italic mb-6">"{quote}"</p>
      
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-brown-800">{name}</h4>
          <p className="text-sm text-brown-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <Section bgColor="bg-cream-50">
      <Container>
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-serif font-bold text-brown-800 mb-4"
          >
            Ce que disent <span className="text-gold-600">nos clients</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-brown-600 max-w-2xl mx-auto"
          >
            La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages sur la qualité de nos produits.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <Testimonial {...testimonial} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;
