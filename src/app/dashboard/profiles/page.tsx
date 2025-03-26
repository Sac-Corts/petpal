"use client";

import React, { useState } from "react";
import PetProfile from "../../../components/profiles/PetProfile";

// Se define la interfaz Pet para tipar los objetos de mascotas
interface Pet {
  name: string;
  age: number;
  breed: string;
  description: string;
  image: string;
  type: string;
}
// Lista de mascotas
const initialPets: Pet[] = [
  {
    name: "Max",
    age: 3,
    breed: "Labrador",
    description: "Perro muy amigable y juguetón.",
    image: "/imgs/labrador.webp",
    type: "Perro",
  },
  {
    name: "Kiwi",
    age: 1,
    breed: "Periquito",
    description: "Ave pequeña y parlanchina.",
    image: "/imgs/perico.jpeg",
    type: "Ave",
  },
  {
    name: "Chispa",
    age: 1,
    breed: "Hamster",
    description: "Roedor pequeño y curioso.",
    image: "/imgs/hamster.webp",
    type: "Roedor",
  },
  {
    name: "Spike",
    age: 4,
    breed: "Iguana",
    description: "Reptil tranquilo y de mirada fija.",
    image: "/imgs/iguana.webp",
    type: "Reptil",
  },
  {
    name: "Luna",
    age: 2,
    breed: "Levkoy Ucraniano",
    description: "Gata elegante y curiosa.",
    image: "/imgs/gato-oriental.webp",
    type: "Gato",
  },
  {
    name: "Nemo",
    age: 1,
    breed: "Pez Payaso",
    description: "Pez colorido y activo.",
    image: "/imgs/pez-payaso.webp",
    type: "Pez",
  },
];

export default function ProfilePage() {
  const [pets, setPets] = useState<Pet[]>(initialPets);

  const handleUpdatePet = (updatedPet: Pet) => {
    setPets((prevPets) =>
      prevPets.map((pet) => (pet.name === updatedPet.name ? updatedPet : pet))
    );
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Perfiles de Mascotas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <PetProfile pet={pet} onUpdate={handleUpdatePet} />
          </div>
        ))}
      </div>
    </div>
  );
}
