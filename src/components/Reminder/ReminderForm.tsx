"use client";

import React, { useState, useEffect } from "react";
import { Reminder } from "@/interfaces/reminder";

interface ReminderFormProps {
  onAddReminder: (reminder: Omit<Reminder, "id">) => void;
  reminderToEdit: Reminder | null; // Propiedad para editar recordatorio
}

export default function ReminderForm({ onAddReminder, reminderToEdit }: ReminderFormProps) {
  const [title, setTitle] = useState(reminderToEdit?.title || "");
  const [description, setDescription] = useState(reminderToEdit?.description || "");
  const [dueDate, setDueDate] = useState(reminderToEdit?.dueDate || "");
  const [recurrence, setRecurrence] = useState(reminderToEdit?.recurrence || "none");
  const [email, setEmail] = useState(reminderToEdit?.email || "");

  useEffect(() => {
    if (reminderToEdit) {
      setTitle(reminderToEdit.title);
      setDescription(reminderToEdit.description);
      setDueDate(reminderToEdit.dueDate);
      setRecurrence(reminderToEdit.recurrence);
      setEmail(reminderToEdit.email);
    }
  }, [reminderToEdit]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  
    // Verificar que los campos obligatorios no estén vacíos
    if (!title || !dueDate || !email) {
      alert("Todos los campos son obligatorios.");
      return;
    }
  
    // Si estamos editando un recordatorio, lo actualizamos
    if (reminderToEdit) {
      const updatedReminder: Reminder = {
        id: reminderToEdit.id, // Usamos el ID original para la edición
        title,
        description,
        dueDate,
        recurrence,
        email,
      };
      onAddReminder(updatedReminder); // Llamamos a onAddReminder para editar el recordatorio
    } else {
      // Si no estamos editando, creamos un nuevo recordatorio
      onAddReminder({ title, description, dueDate, recurrence, email });
    }
  
    // Limpiar los campos después de enviar el formulario
    setTitle("");
    setDescription("");
    setDueDate("");
    setRecurrence("none");
    setEmail("");
  }
  
  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg mb-6">
      <div className="mb-2">
        <label className="block font-semibold">Correo Electrónico:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block font-semibold">Título:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block font-semibold">Descripción:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-2">
        <label className="block font-semibold">Fecha de vencimiento:</label>
        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Recurrencia:</label>
        <select
          value={recurrence}
          onChange={(e) => setRecurrence(e.target.value as Reminder["recurrence"])}
          className="w-full p-2 border rounded"
        >
          <option value="none">Ninguna</option>
          <option value="daily">Diario</option>
          <option value="weekly">Semanal</option>
          <option value="monthly">Mensual</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        {reminderToEdit ? "Actualizar Recordatorio" : "Agregar Recordatorio"}
      </button>
    </form>
  );
}
