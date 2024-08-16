'use client'
import React, { useState } from "react";
import Carousel from "./Carousel";

interface BusinessCardProps {
  name: string;
  contactInfo: {
    phone: string;
    email: string;
  };
  website: string;
  services: string[];
  photoCarousel: string[];
}

export const CardBusiness: React.FC<BusinessCardProps> = ({
  name,
  contactInfo,
  website,
  services,
  photoCarousel,
}) => {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-center">{name}</h2>
          <Carousel
            photos={photoCarousel}
          />
        <p>Teléfono: {contactInfo.phone}</p>
        <p>Email: {contactInfo.email}</p>
        <a href={website} className="text-blue-500 hover:underline">
          Sitio Web
        </a>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Servicios Ofrecidos:</h3>
        <ul className="list-disc pl-3 grid grid-cols-1 gap-y-3 sm:grid-cols-1 ">
          {services.map((service, index) => (
            <li className="col-span-1 text-sm" key={index}>{service}</li>
          ))}
        </ul>
      </div>
        

    </div>
  );
};

