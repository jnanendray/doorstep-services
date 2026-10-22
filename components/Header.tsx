import Container from "@/components/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#15293d]/10 bg-[#eef1f5]/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display flex h-9 w-9 items-center justify-center rounded-lg bg-[#15293d] text-base font-bold text-[#f2a93b]">
            D
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-[#15293d]">
            DoorStep Services
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#services" className="font-body text-sm font-medium text-[#101d29] hover:text-[#15293d]">
            Services
          </a>
          <a href="#how-it-works" className="font-body text-sm font-medium text-[#101d29] hover:text-[#15293d]">
            How it works
          </a>
          <a href="#faq" className="font-body text-sm font-medium text-[#101d29] hover:text-[#15293d]">
            FAQ
          </a>
        </nav>
        <a
          href="#booking"
          className="font-body rounded-full bg-[#ef8354] px-5 py-2.5 text-sm font-semibold text-[#15293d] hover:bg-[#f0956c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15293d]"
        >
          Book a service
        </a>
      </Container>
    </header>
  );
}
