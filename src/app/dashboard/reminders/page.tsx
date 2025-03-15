"use client";

import React, { useEffect, useState } from "react";
import ReminderForm from "@/components/Reminder/ReminderForm";
import ReminderList from "@/components/Reminder/ReminderList";
import { Reminder } from "@/interfaces/reminder";

export default function RemindersPage() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [reminderToEdit, setReminderToEdit] = useState<Reminder | null>(null);

  // Cargar los recordatorios del localStorage al iniciar
  useEffect(() => {
    const storedReminders = localStorage.getItem("reminders");
    if (storedReminders) {
      setReminders(JSON.parse(storedReminders));
    }
  }, []);

  // Guardar los recordatorios en el localStorage al modificarse
  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }, [reminders]);

  // Función para agregar o editar un recordatorio
  const handleAddReminder = (newReminder: Omit<Reminder, "id">) => {
    if (reminderToEdit) {
      // Si estamos editando, reemplazamos el recordatorio editado
      setReminders((prev) =>
        prev.map((reminder) =>
          reminder.id === reminderToEdit.id ? { ...reminder, ...newReminder } : reminder
        )
      );
    } else {
      // Si estamos agregando, creamos un nuevo recordatorio
      const reminderWithId: Reminder = {
        id: Date.now().toString(),
        ...newReminder,
      };
      setReminders((prev) => [...prev, reminderWithId]);
    }
    setReminderToEdit(null); // Limpiar los datos del recordatorio en edición
  };

  // Función para seleccionar un recordatorio para editar
  const handleEditReminder = (reminder: Reminder) => {
    setReminderToEdit(reminder);
  };

  // Función para eliminar un recordatorio
  const handleDeleteReminder = (id: string) => {
    setReminders((prev) => prev.filter((reminder) => reminder.id !== id));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Recordatorios</h1>
      <ReminderForm
        onAddReminder={handleAddReminder}
        reminderToEdit={reminderToEdit} // Pasamos el recordatorio en edición
      />
      <ReminderList
        reminders={reminders}
        onDeleteReminder={handleDeleteReminder}
        onEditReminder={handleEditReminder}
      />
    </div>
  );
}
