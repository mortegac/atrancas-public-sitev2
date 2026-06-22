'use client';

import { useState } from 'react';
import emailjs, { init } from 'emailjs-com';

init('Cj4ceUn7ty-EX0iuD');

const PRODUCTS = [
  { id: 'rincones', label: 'Rincones Campestres' },
  { id: 'buffet', label: 'Buffet, Mesones y Barras' },
  { id: 'lounges', label: 'Lounges Campestres' },
];

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    personas: '',
    productos: [] as string[],
    mensaje: '',
  });

  const set = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const toggleProduct = (id: string) =>
    setForm((prev) => ({
      ...prev,
      productos: prev.productos.includes(id)
        ? prev.productos.filter((p) => p !== id)
        : [...prev.productos, id],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send('service_0g33pau', 'template_scllte8', {
        from_name: form.nombre,
        to_name: form.nombre,
        to_email: form.email,
        to_phone: form.telefono,
        reply_to: form.email,
        message: `Solicitud Chilenidad 2026
Productos: ${form.productos.join(', ') || 'No especificado'}
Fecha del evento: ${form.fecha || 'No especificada'}
Número de personas: ${form.personas || 'No especificado'}
Mensaje: ${form.mensaje}`,
      }, 'Cj4ceUn7ty-EX0iuD');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-bold text-green-700 mb-3">¡Cotización enviada!</p>
        <p className="text-gray-600">Te contactamos en menos de 24 horas hábiles.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre *</label>
          <input
            required
            type="text"
            value={form.nombre}
            onChange={(e) => set('nombre', e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c39f77]"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Teléfono *</label>
          <input
            required
            type="tel"
            value={form.telefono}
            onChange={(e) => set('telefono', e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c39f77]"
            placeholder="+56 9 xxxx xxxx"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c39f77]"
            placeholder="tu@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Fecha del evento</label>
          <input
            type="date"
            value={form.fecha}
            onChange={(e) => set('fecha', e.target.value)}
            min="2026-09-01"
            max="2026-10-31"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c39f77]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Número aproximado de personas
        </label>
        <select
          value={form.personas}
          onChange={(e) => set('personas', e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c39f77]"
        >
          <option value="">Seleccionar...</option>
          <option value="1-20">1 a 20 personas</option>
          <option value="20-50">20 a 50 personas</option>
          <option value="50-100">50 a 100 personas</option>
          <option value="100-200">100 a 200 personas</option>
          <option value="200+">Más de 200 personas</option>
        </select>
      </div>

      <div>
        <p className="block text-sm font-semibold text-gray-700 mb-2">¿Qué producto te interesa?</p>
        <div className="space-y-2">
          {PRODUCTS.map((p) => (
            <label key={p.id} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.productos.includes(p.id)}
                onChange={() => toggleProduct(p.id)}
                className="w-4 h-4 accent-[#c39f77]"
              />
              <span className="text-sm text-gray-700">{p.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Cuéntanos más sobre tu evento
        </label>
        <textarea
          value={form.mensaje}
          onChange={(e) => set('mensaje', e.target.value)}
          rows={4}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c39f77]"
          placeholder="Describe tu evento: tipo de espacio, fecha exacta, decoración que buscas..."
        />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">Hubo un error al enviar. Intenta nuevamente o escríbenos por WhatsApp.</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-[#c39f77] text-white py-3 rounded font-semibold text-lg hover:bg-[#b08a60] transition-colors disabled:opacity-50"
      >
        {status === 'sending' ? 'Enviando...' : 'Solicitar cotización'}
      </button>
    </form>
  );
}
