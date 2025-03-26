// components/profiles/MedicalHistory.tsx

import React, { useState } from "react";

interface MedicalRecord {
  date: string;
  description: string;
  treatment: string;
}

interface MedicalHistoryProps {
  petName: string;
  records: MedicalRecord[];
  onAddRecord: (newRecord: MedicalRecord) => void;
}

const MedicalHistory: React.FC<MedicalHistoryProps> = ({ petName, records, onAddRecord }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newRecord, setNewRecord] = useState<MedicalRecord>({
    date: "",
    description: "",
    treatment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewRecord({ ...newRecord, [name]: value });
  };

  const handleSave = () => {
    onAddRecord(newRecord);
    setIsEditing(false);
    setNewRecord({ date: "", description: "", treatment: "" });
  };

  return (
    <div className="p-6 border border-gray-300 rounded-lg bg-white">
      <h3 className="text-xl font-semibold mb-4">Historial Médico de {petName}</h3>

      {records.length === 0 ? (
        <p>No hay registros médicos.</p>
      ) : (
        <ul>
          {records.map((record, index) => (
            <li key={index} className="mb-4">
              <p><strong>Fecha:</strong> {record.date}</p>
              <p><strong>Descripción:</strong> {record.description}</p>
              <p><strong>Tratamiento:</strong> {record.treatment}</p>
            </li>
          ))}
        </ul>
      )}

      {isEditing ? (
        <div className="mt-4">
          <input
            type="date"
            name="date"
            value={newRecord.date}
            onChange={handleChange}
            className="block w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <textarea
            name="description"
            value={newRecord.description}
            onChange={handleChange}
            placeholder="Descripción"
            className="block w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <textarea
            name="treatment"
            value={newRecord.treatment}
            onChange={handleChange}
            placeholder="Tratamiento"
            className="block w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <button className="btn-primary mt-4" onClick={handleSave}>
            Guardar Registro
          </button>
        </div>
      ) : (
        <button className="btn-primary mt-4" onClick={() => setIsEditing(true)}>
          Agregar Nuevo Registro Médico
        </button>
      )}
    </div>
  );
};

export default MedicalHistory;
