"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs, { init } from "emailjs-com";

init("Cj4ceUn7ty-EX0iuD");

const PRODUCTS = [
  "Mesón Buffet de Secuoya (extensible 3–30 m)",
  "Bancas de Secuoya 1.5 m",
  "Bancas de Secuoya 0.80 m",
  "Mesones de Montaje 10 personas",
  "Mesones de Montaje 12 personas",
  "Mesón de Mañío (3 m)",
  "Mesón Cedro + Barricas",
  "Barra 01 — Forma de U, secuoya",
  "Barra 02 — Forma de U, cedro",
  "Barra 03 — Gran capacidad",
];

type Status = "idle" | "sending" | "error";

export default function QuoteForm() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", eventDate: "", guests: "", message: "" });
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));
  const toggle = (p: string) =>
    setSelected((prev) => prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send("service_0g33pau", "template_scllte8", {
        from_name: form.name,
        to_name: form.name,
        to_email: form.email,
        to_phone: form.phone,
        reply_to: form.email,
        message: `FECHA: ${form.eventDate} | INVITADOS: ${form.guests}\nPRODUCTOS: ${selected.join(", ") || "No especificado"}\n\n${form.message}`,
      }, "Cj4ceUn7ty-EX0iuD");
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "conversion", { send_to: "AW-808610482/h8JLCIyh2_YCELLVyYED" });
      }
      router.push("/contacto/gracias");
    } catch {
      setStatus("error");
    }
  };

  const cls = "mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#c39f77] focus:ring-1 focus:ring-[#c39f77]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-gray-700">Nombre completo *</label>
          <input type="text" required value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Juan Pérez" className={cls} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">Email *</label>
          <input type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="juan@email.com" className={cls} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">Teléfono *</label>
          <input type="tel" required value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+56 9 XXXX XXXX" className={cls} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">Fecha del evento *</label>
          <input type="date" required value={form.eventDate} onChange={(e) => set("eventDate", e.target.value)} min={new Date().toISOString().split("T")[0]} className={cls} />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-gray-700">N° de invitados (aproximado)</label>
          <input type="number" min={1} value={form.guests} onChange={(e) => set("guests", e.target.value)} placeholder="ej. 80" className={cls} />
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold text-gray-700">¿Qué productos necesitas? (opcional)</p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {PRODUCTS.map((p) => (
            <label key={p} className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="accent-[#c39f77]" checked={selected.includes(p)} onChange={() => toggle(p)} />
              {p}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700">Cuéntanos sobre tu evento</label>
        <textarea rows={4} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Tipo de evento, lugar, detalles adicionales..." className={cls} />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Error al enviar. Intenta nuevamente o escríbenos por WhatsApp.</p>
      )}

      <button type="submit" disabled={status === "sending"}
        className="w-full rounded-lg bg-[#c39f77] px-6 py-4 text-base font-bold text-white transition hover:bg-[#b08a60] disabled:opacity-50">
        {status === "sending" ? "Enviando..." : "Solicitar cotización gratuita →"}
      </button>
      <p className="text-center text-xs text-gray-400">Sin compromiso · Respuesta en menos de 24 horas hábiles</p>
    </form>
  );
}
