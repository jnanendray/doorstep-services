"use client";

import { useState } from "react";
import Container from "@/components/Container";
import { services } from "@/components/Sections";

const timeSlots = ["Morning (9 AM – 12 PM)", "Afternoon (12 PM – 4 PM)", "Evening (4 PM – 8 PM)"];

const areas = [
  "Indiranagar",
  "Koramangala",
  "HSR Layout",
  "Whitefield",
  "Jayanagar",
  "Electronic City",
  "Marathahalli",
  "JP Nagar",
];

function todayISO() {
  const d = new Date();
  return d.toISOString().split("T")[0];
}

export default function BookingForm() {
  const [serviceId, setServiceId] = useState(services[0].id);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState(timeSlots[0]);
  const [area, setArea] = useState(areas[0]);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");

  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
  const digits = rawNumber.replace(/\D/g, "");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!digits) return;

    const service = services.find((s) => s.id === serviceId);
    const lines = [
      `Hi DoorStep Services, I'd like to book a service.`,
      ``,
      `Service: ${service?.name ?? serviceId}`,
      `Date: ${date || "Not specified"}`,
      `Time slot: ${slot}`,
      `Area: ${area}, Bengaluru`,
      name ? `Name: ${name}` : null,
      notes ? `Notes: ${notes}` : null,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${digits}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="booking" className="pine-field border-y border-[#0e2a22] py-16 md:py-20">
      <Container className="max-w-[760px]">
        <h2 className="font-display text-2xl font-semibold text-[#f4f6f5] md:text-3xl">
          Book a service
        </h2>
        <p className="font-body mt-2 text-[#cfdbd4]">
          Fill this in and we'll send your request to our team on WhatsApp — no account needed.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid gap-5 rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:grid-cols-2"
        >
          <label className="font-body flex flex-col gap-1.5 text-sm text-[#cfdbd4] sm:col-span-2">
            Service
            <select
              value={serviceId}
              onChange={(e) => setServiceId(e.target.value)}
              className="rounded-lg border border-white/15 bg-[#0e2a22] px-3 py-2.5 text-[#f4f6f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2a93b]"
            >
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>

          <label className="font-body flex flex-col gap-1.5 text-sm text-[#cfdbd4]">
            Date
            <input
              type="date"
              required
              min={todayISO()}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="rounded-lg border border-white/15 bg-[#0e2a22] px-3 py-2.5 text-[#f4f6f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2a93b]"
            />
          </label>

          <label className="font-body flex flex-col gap-1.5 text-sm text-[#cfdbd4]">
            Time slot
            <select
              value={slot}
              onChange={(e) => setSlot(e.target.value)}
              className="rounded-lg border border-white/15 bg-[#0e2a22] px-3 py-2.5 text-[#f4f6f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2a93b]"
            >
              {timeSlots.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>

          <label className="font-body flex flex-col gap-1.5 text-sm text-[#cfdbd4]">
            Area (Bengaluru)
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="rounded-lg border border-white/15 bg-[#0e2a22] px-3 py-2.5 text-[#f4f6f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2a93b]"
            >
              {areas.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </label>

          <label className="font-body flex flex-col gap-1.5 text-sm text-[#cfdbd4]">
            Your name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Optional"
              className="rounded-lg border border-white/15 bg-[#0e2a22] px-3 py-2.5 text-[#f4f6f5] placeholder:text-[#cfdbd4]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2a93b]"
            />
          </label>

          <label className="font-body flex flex-col gap-1.5 text-sm text-[#cfdbd4] sm:col-span-2">
            Notes
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Anything we should know? (Optional)"
              rows={3}
              className="rounded-lg border border-white/15 bg-[#0e2a22] px-3 py-2.5 text-[#f4f6f5] placeholder:text-[#cfdbd4]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2a93b]"
            />
          </label>

          {digits ? (
            <button
              type="submit"
              className="font-body sm:col-span-2 rounded-full bg-[#ef8354] px-6 py-3.5 font-semibold text-[#0e2a22] hover:bg-[#f0956c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4f6f5]"
            >
              Send booking via WhatsApp
            </button>
          ) : (
            <p className="font-body sm:col-span-2 rounded-lg border border-[#f2a93b]/30 bg-[#f2a93b]/10 px-4 py-3 text-sm text-[#f2a93b]">
              WhatsApp number not configured yet — set NEXT_PUBLIC_WHATSAPP_NUMBER to enable
              bookings.
            </p>
          )}
        </form>
      </Container>
    </section>
  );
}
