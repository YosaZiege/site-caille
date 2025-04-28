import React from 'react'
import { advantages } from "../lib/data"
import '@fortawesome/fontawesome-free/css/all.min.css';
const Advantages = () => {
   return (
      <section className="py-16 bg-amber-50">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-amber-800">
               Pourquoi choisir nos cailles ?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {advantages.map((advantage, index) => (
                  <div
                     key={index}
                     className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                  >
                     <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i
                           className={`fas ${advantage.icon} text-2xl text-amber-600`}
                        ></i>
                     </div>
                     <h3 className="text-xl font-semibold mb-2 text-amber-800">
                        {advantage.title}
                     </h3>
                     <p className="text-gray-600">{advantage.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Advantages 
