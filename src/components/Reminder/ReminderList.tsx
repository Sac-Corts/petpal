"use client";

import React from "react";
import { Reminder } from "@/interfaces/reminder";

interface ReminderListProps {
  reminders: Reminder[];
  onDeleteReminder: (id: string) => void;
  onEditReminder: (reminder: Reminder) => void;
}

const ReminderList: React.FC<ReminderListProps> = ({ reminders, onDeleteReminder, onEditReminder }) => (
  <div>
    {reminders.length === 0 ? (
      <p>No hay recordatorios creados.</p>
    ) : (
      <ul className="space-y-4">
        {reminders.map((reminder) => (
          <li key={reminder.id} className="p-4 border rounded bg-white">
            <h3 className="text-xl font-bold">{reminder.title}</h3>
            <p>Recordatorio enviado a: {reminder.email}</p>
            <p>{reminder.description}</p>
            <p>
              <strong>Fecha:</strong> {new Date(reminder.dueDate).toLocaleString()}
            </p>
            <p>
              <strong>Repetición:</strong> {reminder.recurrence}
            </p>
            <div className="mt-2 flex space-x-2">
              <button
                onClick={() => onEditReminder(reminder)}
                className="bg-yellow-500 text-white p-2 rounded"
              >
                Editar
              </button>
              <button
                onClick={() => onDeleteReminder(reminder.id)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ReminderList;
