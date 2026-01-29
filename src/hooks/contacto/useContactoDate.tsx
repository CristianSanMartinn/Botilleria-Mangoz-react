// hooks/contacto/useContactoData.tsx
import { useState } from "react";

export interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
}

export function useContactoData() {
  const [form, setForm] = useState<FormData>({ nombre: "", email: "", mensaje: "" });
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nombre.trim() || !form.email.trim() || !form.mensaje.trim()) {
      setError("Por favor, completa todos los campos.");
      setSuccess("");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Por favor, ingresa un correo válido.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");

    // Aquí puedes añadir la lógica para enviar el formulario a un servidor, API, etc.

    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return {
    form,
    error,
    success,
    handleChange,
    handleSubmit,
  };
}
