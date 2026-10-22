import Image from "next/image";
import Container from "@/components/Container";

function CheckIcon() {
  return (
    <span className="badge-tick h-6 w-6 rounded-full bg-[#0e2a22]">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 text-[#f2a93b]"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="pine-field border-b border-[#0e2a22]">
      <Container className="grid gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="font-body inline-block rounded-full border border-[#f2a93b]/40 bg-[#f2a93b]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#f2a93b]">
            Now serving Bengaluru
          </span>
          <h1 className="font-display mt-5 text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.08] text-[#f4f6f5]">
            Trusted home services,
            <br />
            booked in minutes.
          </h1>
          <p className="font-body mt-6 max-w-lg text-lg leading-relaxed text-[#cfdbd4]">
            AC repair, deep cleaning, salon at home, plumbing, electrical work and painting —
            pick a slot, tell us the area, and a verified professional shows up at your door.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="font-body inline-block rounded-full bg-[#ef8354] px-7 py-3.5 font-semibold text-[#0e2a22] hover:bg-[#f0956c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4f6f5]"
            >
              Book a service
            </a>
            <a
              href="#services"
              className="font-body inline-block rounded-full border border-[#cfdbd4]/40 px-7 py-3.5 font-semibold text-[#f4f6f5] hover:border-[#cfdbd4] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4f6f5]"
            >
              See all services
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#cfdbd4]">
            <span className="flex items-center gap-2 font-body">
              <CheckIcon /> Verified professionals
            </span>
            <span className="flex items-center gap-2 font-body">
              <CheckIcon /> Pay after the job is done
            </span>
            <span className="flex items-center gap-2 font-body">
              <CheckIcon /> Same-day slots available
            </span>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="grid-field absolute inset-0 rounded-3xl opacity-40" />
          <div className="relative grid h-full grid-cols-2 gap-4 p-6">
            {[
              { label: "AC Repair", time: "Today, 2–4 PM" },
              { label: "Deep Cleaning", time: "Tomorrow, 9 AM" },
              { label: "Electrician", time: "Today, 6–8 PM" },
              { label: "Plumbing", time: "Tomorrow, 12 PM" },
            ].map((card) => (
              <div
                key={card.label}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm"
              >
                <span className="font-display text-sm font-semibold text-[#f4f6f5]">
                  {card.label}
                </span>
                <span className="font-body mt-6 text-xs text-[#f2a93b]">{card.time}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

type Service = {
  id: string;
  name: string;
  priceFrom: string;
  description: string;
  icon: React.ReactNode;
  image: string;
};

function WrenchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4l-2.3 2.3-2-2 2.3-2.3Z" />
    </svg>
  );
}
function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  );
}
function ScissorsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="6" cy="18" r="2.4" />
      <path strokeLinecap="round" d="M8 7.5 20 18M8 16.5 20 6" />
    </svg>
  );
}
function PipeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h6a4 4 0 0 1 4 4v0a4 4 0 0 0 4 4h2M4 8V5M4 8v3M20 16v3M20 16v-3" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}
function PaintIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c2-1 3-2.5 3-4.5a4 4 0 0 1 4-4h5l5-5-4-4-5 5v5a4 4 0 0 1-4 4C5 16.5 3.5 18 4 20Z" />
    </svg>
  );
}

export const services: Service[] = [
  {
    id: "ac-repair",
    name: "AC Repair & Service",
    priceFrom: "₹499",
    description: "Gas top-up, filter cleaning, and full diagnostics for split and window ACs.",
    icon: <WrenchIcon />,
    image: "/services/ac-repair.jpg",
  },
  {
    id: "deep-cleaning",
    name: "Home Deep Cleaning",
    priceFrom: "₹1,999",
    description: "Kitchen, bathroom and full-home deep cleaning with sanitisation.",
    icon: <SparkleIcon />,
    image: "/services/deep-cleaning.jpg",
  },
  {
    id: "salon-at-home",
    name: "Salon at Home",
    priceFrom: "₹349",
    description: "Haircuts, facials, waxing and grooming by certified beauticians.",
    icon: <ScissorsIcon />,
    image: "/services/salon-at-home.jpg",
  },
  {
    id: "plumbing",
    name: "Plumbing",
    priceFrom: "₹199",
    description: "Leak fixes, tap and pipe repair, bathroom fittings installation.",
    icon: <PipeIcon />,
    image: "/services/plumbing.jpg",
  },
  {
    id: "electrician",
    name: "Electrician",
    priceFrom: "₹199",
    description: "Wiring, switchboard repair, fan and appliance installation.",
    icon: <BoltIcon />,
    image: "/services/electrician.jpg",
  },
  {
    id: "painting",
    name: "Painting",
    priceFrom: "₹12/sqft",
    description: "Interior and exterior painting with free colour consultation.",
    icon: <PaintIcon />,
    image: "/services/painting.jpg",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#eef1ee] py-16 md:py-20">
      <Container>
        <h2 className="font-display text-2xl font-semibold text-[#0e2a22] md:text-3xl">
          Our services
        </h2>
        <p className="font-body mt-2 max-w-2xl text-[#4a5a52]">
          Six of our most-booked categories. More services added every month.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#0e2a22]/10 bg-white shadow-[0_4px_18px_rgba(14,42,34,0.06)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0e2a22]/5">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0e2a22] shadow-[0_4px_10px_rgba(14,42,34,0.25)]">
                  {service.icon}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-base font-semibold text-[#0e2a22]">
                  {service.name}
                </h3>
                <p className="font-body mt-2 flex-1 text-sm text-[#4a5a52]">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-[#0e2a22]/10 pt-4">
                  <span className="font-body text-xs font-semibold uppercase tracking-wide text-[#4a5a52]">
                    Starts at <span className="font-display text-base text-[#0e2a22]">{service.priceFrom}</span>
                  </span>
                  <a
                    href={`#booking?service=${service.id}`}
                    className="font-body rounded-full bg-[#0e2a22] px-4 py-2 text-xs font-semibold text-white hover:bg-[#143a2f]"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const steps = [
  {
    title: "Pick a service & slot",
    description: "Choose what you need, your preferred date and time window.",
  },
  {
    title: "We confirm on WhatsApp",
    description: "A booking request goes straight to our team with all your details.",
  },
  {
    title: "Professional arrives",
    description: "A verified DoorStep professional reaches your address on time.",
  },
  {
    title: "Pay after the job",
    description: "Cash or UPI, only once you're satisfied with the work.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-[#0e2a22]/10 bg-white py-16 md:py-20">
      <Container>
        <h2 className="font-display text-2xl font-semibold text-[#0e2a22] md:text-3xl">
          How it works
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative rounded-2xl bg-[#eef1ee] p-6">
              <span className="font-display text-4xl font-semibold text-[#0e2a22]/15">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-3 font-semibold text-[#0e2a22]">{step.title}</h3>
              <p className="font-body mt-1 text-sm text-[#4a5a52]">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const testimonials = [
  {
    name: "Ritika M.",
    area: "Koramangala",
    quote:
      "Booked an AC service on WhatsApp in the evening, had a technician the next morning. No surprises on price.",
  },
  {
    name: "Arjun P.",
    area: "Whitefield",
    quote:
      "The deep cleaning team was thorough and on time. Easier than calling five different numbers to compare.",
  },
  {
    name: "Fathima S.",
    area: "HSR Layout",
    quote:
      "Salon at home saved me a whole Saturday. Booking took two minutes on my phone.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#eef1ee] py-16 md:py-20">
      <Container>
        <h2 className="font-display text-2xl font-semibold text-[#0e2a22] md:text-3xl">
          What customers say
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-[#0e2a22]/10 bg-white p-6 shadow-[0_4px_18px_rgba(14,42,34,0.06)]"
            >
              <p className="font-body text-sm leading-relaxed text-[#122019]">“{t.quote}”</p>
              <p className="font-body mt-4 text-sm font-semibold text-[#0e2a22]">
                {t.name}
                <span className="ml-2 font-normal text-[#4a5a52]">{t.area}</span>
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const faqs = [
  {
    q: "Which areas in Bengaluru do you cover?",
    a: "We currently serve Indiranagar, Koramangala, HSR Layout, Whitefield, Jayanagar, Electronic City, Marathahalli and JP Nagar, with more areas added regularly.",
  },
  {
    q: "How do I book a service?",
    a: "Fill in the booking form below with your service, date, time slot and area — it opens a WhatsApp message to our team with all the details pre-filled, and we confirm within a few hours.",
  },
  {
    q: "When do I pay?",
    a: "You pay the professional directly after the service is completed, by cash or UPI. No advance payment is required for most services.",
  },
  {
    q: "Can I reschedule or cancel?",
    a: "Yes, just message us on WhatsApp with your original booking details at least 2 hours before the slot and we'll rearrange it.",
  },
  {
    q: "Are the professionals verified?",
    a: "Every professional on DoorStep Services goes through an identity and background check before they're listed on the platform.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-t border-[#0e2a22]/10 bg-white py-16 md:py-20">
      <Container className="max-w-[900px]">
        <h2 className="font-display text-2xl font-semibold text-[#0e2a22] md:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-8 flex flex-col gap-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="faq-item rounded-2xl border border-[#0e2a22]/10 bg-[#eef1ee] p-5"
            >
              <summary className="font-display flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-[#0e2a22]">
                {item.q}
                <svg
                  className="faq-chevron h-5 w-5 flex-shrink-0 text-[#0e2a22]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="font-body mt-3 text-sm leading-relaxed text-[#4a5a52]">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#0e2a22]/10 bg-[#eef1ee] py-10">
      <Container className="text-center sm:text-left">
        <p className="font-body text-sm text-[#4a5a52]">
          &copy; {new Date().getFullYear()} DoorStep Services. Fictional demo marketplace for a
          training project — not an actual booking platform, and not affiliated with any real
          company.
        </p>
      </Container>
    </footer>
  );
}
