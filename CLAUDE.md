# DoorStep Services — project conventions

- Next.js App Router + TypeScript + Tailwind CSS v4, deployed on Vercel (Hobby plan).
- Branch + PR workflow for all changes, **except** the very first commit to this repo (which can go direct to `main` since the repo starts empty).
- Keep `next` and `eslint-config-next` on the latest patched version. Check Vercel build logs for security-advisory warnings after every dependency bump and patch promptly (see https://nextjs.org/blog for advisories).
- WhatsApp number is read from the `NEXT_PUBLIC_WHATSAPP_NUMBER` environment variable (digits only, international format, e.g. `91XXXXXXXXXX`) — never hardcode a phone number in source. Set it in Vercel under Settings → Environments → Production → Environment Variables as "Plain text/Config", then redeploy.
- The booking form and the floating WhatsApp button both degrade gracefully (render nothing / show a notice) if `NEXT_PUBLIC_WHATSAPP_NUMBER` is unset.
- Always test Lighthouse against the **production** URL, never a preview/branch URL — preview deployments carry a `noindex` header and will show an artificially low SEO score.
- Shared `Container` component caps content at `max-width: 1760px`.
- This is a fictional demo business built for a training project — not a real booking platform.
