import Container from "@/components/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#0e2a22]/10 bg-[#eef1ee]/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display flex h-9 w-9 items-center justify-center rounded-lg bg-[#0e2a22] text-base font-bold text-[#f2a93b]">
            D
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-[#0e2a22]">
            DoorStep Services
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#services" className="font-body text-sm font-medium text-[#122019] hover:text-[#0e2a22]">
            Services
          </a>
          <a href="#how-it-works" className="font-body text-sm font-medium text-[#122019] hover:text-[#0e2a22]">
            How it works
          </a>
          <a href="#faq" className="font-body text-sm font-medium text-[#122019] hover:text-[#0e2a22]">
            FAQ
          </a>
        </nav>
        <a
          href="#booking"
          className="font-body rounded-full bg-[#ef8354] px-5 py-2.5 text-sm font-semibold text-[#0e2a22] hover:bg-[#f0956c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e2a22]"
        >
          Book a service
        </a>
      </Container>
    </header>
  );
}
