"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { testimonials } from "../lib/data"
const Testimonials = () => {
   return (
      <section className="py-16 bg-amber-800 text-white">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
               Ce que disent nos clients
            </h2>

            <Swiper
               modules={[Pagination, Autoplay]}
               spaceBetween={30}
               slidesPerView={1}
               pagination={{ clickable: true }}
               autoplay={{ delay: 5000 }}
               breakpoints={{
                  640: {
                     slidesPerView: 2,
                  },
                  1024: {
                     slidesPerView: 3,
                  },
               }}
               className="testimonial-swiper"
            >
               {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                     <div className="bg-amber-700 p-6 rounded-lg h-full">
                        <div className="flex items-center mb-4">
                           {[...Array(5)].map((_, i) => (
                              <i
                                 key={i}
                                 className={`fas fa-star ${i < testimonial.rating ? "text-yellow-300" : "text-gray-400"} mr-1`}
                              ></i>
                           ))}
                        </div>
                        <p className="italic mb-4">"{testimonial.comment}"</p>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-amber-300 text-sm">
                           {testimonial.role}
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   )
}

export default Testimonials
