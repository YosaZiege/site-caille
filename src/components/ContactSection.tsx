"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';
import Section from './ui/Section';

const ContactSection = () => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-600 font-semibold mb-2 block">Contact</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-800 mb-6">
              Une question ? Contactez-nous
            </h2>
            
            <p className="text-brown-700 mb-8">
              Nous sommes à votre disposition pour répondre à toutes vos questions concernant nos produits, nos méthodes d'élevage ou pour prendre votre commande.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="p-3 bg-cream-200 rounded-full text-brown-700 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-800 mb-1">Téléphone</h3>
                  <p className="text-brown-600">+33 1 23 45 67 89</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-cream-200 rounded-full text-brown-700 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-800 mb-1">Email</h3>
                  <p className="text-brown-600">contact@caillesdor.fr</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-cream-200 rounded-full text-brown-700 mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-brown-800 mb-1">Horaires</h3>
                  <p className="text-brown-600">Lundi - Vendredi: 9h - 18h</p>
                  <p className="text-brown-600">Samedi: 9h - 12h</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-brown-800 mb-6">Envoyez-nous un message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-brown-700 mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-cream-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Votre prénom"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-brown-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-cream-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brown-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-cream-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Votre email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-brown-700 mb-1">
                  Sujet
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-cream-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="order">Passer une commande</option>
                  <option value="info">Demande d'information</option>
                  <option value="support">Support</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brown-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-cream-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input
                  id="privacy"
                  type="checkbox"
                  className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-cream-300 rounded"
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-brown-600">
                  J'accepte la politique de confidentialité
                </label>
              </div>
              
              <Button variant="primary" size="lg" type="submit" fullWidth>
                Envoyer le message
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;
