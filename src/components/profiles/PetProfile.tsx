import React, { useState } from 'react';
import Image from 'next/image';

interface Pet {
  name: string;
  age: number;
  breed: string;
  description: string;
  image: string;
  type: string; 
}

interface PetProfileProps {
  pet: Pet;
  onUpdate: (updatedPet: Pet) => void;
}

const PetProfile: React.FC<PetProfileProps> = ({ pet, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPet, setEditedPet] = useState<Pet>({ ...pet });
  const [previewImage, setPreviewImage] = useState<string>(pet.image);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onUpdate(editedPet);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedPet({ ...editedPet, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setEditedPet({ ...editedPet, image: imageUrl });
    }
  };

  return (
    <div className="flex flex-col items-center p-5 border border-gray-300 rounded-lg max-w-md mx-auto bg-white">
      <Image src={previewImage} alt={`Imagen de ${pet.name}`} width={200} height={200} className="rounded-lg" />
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={editedPet.name}
            onChange={handleChange}
            className="mt-4 text-2xl text-primary border p-1 rounded"
          />
          <input
            type="number"
            name="age"
            value={editedPet.age}
            onChange={handleChange}
            className="mt-2 text-lg border p-1 rounded"
          />
          <input
            type="text"
            name="breed"
            value={editedPet.breed}
            onChange={handleChange}
            className="mt-2 text-lg border p-1 rounded"
          />
          <textarea
            name="description"
            value={editedPet.description}
            onChange={handleChange}
            className="mt-4 text-center text-base border p-1 rounded"
          />
          <input type="file" accept="image/*" onChange={handleImageChange} className="mt-2" />
          <button className="btn-primary mt-4" onClick={handleSaveClick}>
            Guardar
          </button>
        </>
      ) : (
        <>
          <h2 className="mt-4 text-2xl text-primary">{pet.name}</h2>
          <p className="mt-2 text-lg">Edad: {pet.age} años</p>
          <p className="mt-2 text-lg">Raza: {pet.breed}</p>
          <p className="mt-4 text-center text-base">{pet.description}</p>
          <button className="btn-primary mt-4" onClick={handleEditClick}>
            Editar Perfil
          </button>
        </>
      )}
    </div>
  );
};

export default PetProfile;
