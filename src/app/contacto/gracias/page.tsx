import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mensaje enviado — Gracias | Atrancas",
  description: "Hemos recibido tu mensaje. Te contactaremos a la brevedad.",
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-white px-6 py-24">
      <div className="max-w-lg text-center">
        <div className="mb-8 flex justify-center">
          <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#c39f77]/10">
            <svg
              className="h-10 w-10 text-[#c39f77]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </span>
        </div>
        <h1 className="mb-4 text-3xl font-semibold text-gray-900">
          ¡Gracias por contactarnos!
        </h1>
        <p className="mb-8 text-lg text-gray-500">
          Hemos recibido tu mensaje. Nuestro equipo te responderá dentro de las próximas 24 horas hábiles.
        </p>
        <Link
          href="/"
          className="inline-block rounded-md bg-[#c39f77] px-6 py-3 text-white transition hover:opacity-90"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
