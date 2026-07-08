import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { nav } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo-mark.png"
              alt="Flexi Work"
              width={30}
              height={24}
              className="h-6 w-auto"
            />
            <span className="font-display text-xl font-bold">
              FLEXI <span className="gradient-text">WORK</span>
            </span>
          </div>
          <p className="mt-3 text-sm text-muted">
            Edit Beyond Limits — premium cinematic video editing for creators
            and businesses across the Philippines and beyond.
          </p>

          <div className="mt-6 flex flex-col gap-2 text-sm text-muted">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-highlight" />
              Marocs, Roxas, Isabela, Philippines
            </span>
            <a
              href="mailto:hello@flexiwork.ph"
              className="flex items-center gap-2 hover:text-white"
            >
              <Mail size={16} className="text-highlight" />
              hello@flexiwork.ph
            </a>
            <a
              href="tel:+639000000000"
              className="flex items-center gap-2 hover:text-white"
            >
              <Phone size={16} className="text-highlight" />
              +63 900 000 0000
            </a>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-highlight hover:text-highlight"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-highlight hover:text-highlight"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-highlight hover:text-highlight text-xs font-bold"
            >
              TT
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/60">
              Navigate
            </div>
            <ul className="flex flex-col gap-2 text-sm text-muted">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/60">
              Services
            </div>
            <ul className="flex flex-col gap-2 text-sm text-muted">
              <li>YouTube Editing</li>
              <li>Short-Form Editing</li>
              <li>Motion Graphics</li>
              <li>Color Grading</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/5 pt-6 text-xs text-muted">
        © {new Date().getFullYear()} Flexi Work. All rights reserved.
      </div>
    </footer>
  );
}
