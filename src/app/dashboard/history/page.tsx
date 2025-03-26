// src/app/dashboard/history/page.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import MedicalHistory from "../../../components/MedicalHistory/MedicalHistory";

interface Pet {
  name: string;
  age: number;
  breed: string;
  description: string;
  image: string;
  type: string;
  medicalHistory: { date: string; description: string; treatment: string }[];
}

const initialPets: Pet[] = [
  {
    name: "Max",
    age: 3,
    breed: "Labrador",
    description: "Perro muy amigable y juguetón.",
    image: "/imgs/labrador.webp",
    type: "Perro",
    medicalHistory: [
      {
        date: "2024-01-10",
        description: "Visita al veterinario por fiebre.",
        treatment: "Medicamento antibiótico.",
      },
      {
        date: "2024-02-15",
        description: "Chequeo general.",
        treatment: "Revisión de salud, sin problemas detectados.",
      },
    ],
  },
  {
    name: "Kiwi",
    age: 1,
    breed: "Periquito",
    description: "Ave pequeña y parlanchina.",
    image: "/imgs/perico.jpeg",
    type: "Ave",
    medicalHistory: [],
  },
  {
    name: "Chispa",
    age: 1,
    breed: "Hamster",
    description: "Roedor pequeño y curioso.",
    image: "/imgs/hamster.webp",
    type: "Roedor",
    medicalHistory: [
      {
        date: "2024-02-01",
        description: "Chequeo general de salud.",
        treatment: "Nada relevante.",
      },
    ],
  },
  {
    name: "Spike",
    age: 4,
    breed: "Iguana",
    description: "Reptil tranquilo y de mirada fija.",
    image: "/imgs/iguana.webp",
    type: "Reptil",
    medicalHistory: [
      {
        date: "2024-03-03",
        description: "Revisión de piel y escamas.",
        treatment: "Tratamiento tópico para hidratación.",
      },
    ],
  },
  {
    name: "Luna",
    age: 2,
    breed: "Levkoy Ucraniano",
    description: "Gata elegante y curiosa.",
    image: "/imgs/gato-oriental.webp",
    type: "Gato",
    medicalHistory: [
      {
        date: "2024-01-30",
        description: "Chequeo general de salud y control de peso.",
        treatment: "Nada relevante.",
      },
    ],
  },
  {
    name: "Nemo",
    age: 1,
    breed: "Pez Payaso",
    description: "Pez colorido y activo.",
    image: "/imgs/pez-payaso.webp",
    type: "Pez",
    medicalHistory: [],
  },
];

export default function HistoryPage() {
  const [pets, setPets] = useState<Pet[]>(initialPets);

  const handleAddRecord = (petName: string, newRecord: { date: string; description: string; treatment: string }) => {
    setPets((prevPets) =>
      prevPets.map((pet) =>
        pet.name === petName
          ? {
              ...pet,
              medicalHistory: [...pet.medicalHistory, newRecord],
            }
          : pet
      )
    );
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Historial Médico de Mascotas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <div key={pet.name} className="border p-4 rounded shadow">
            <Image 
              src={pet.image} 
              alt={pet.name} 
              width={6000}
              height={1000}
              className="w-full h-48 object-cover mb-4 rounded" 
            />
            <h2 className="text-xl font-semibold">{pet.name}</h2>
            <p className="text-gray-600">{pet.breed}, {pet.age} años</p>
            <p className="text-gray-500">{pet.description}</p>
            <MedicalHistory 
              petName={pet.name} 
              records={pet.medicalHistory} 
              onAddRecord={(newRecord) => handleAddRecord(pet.name, newRecord)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
