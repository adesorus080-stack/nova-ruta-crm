import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface CatalogoCardProps {
  titulo: string;
  descripcion: string;
  href: string;
  icono: LucideIcon;
}

export default function CatalogoCard({
  titulo,
  descripcion,
  href,
  icono: Icono,
}: CatalogoCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-slate-800 bg-slate-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-amber-500/70 hover:shadow-lg hover:shadow-amber-500/5"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-amber-500/10 p-3 transition group-hover:bg-amber-500/20">
          <Icono
            size={28}
            className="text-amber-400"
            aria-hidden="true"
          />
        </div>

        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-white">
            {titulo}
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-400">
            {descripcion}
          </p>
        </div>
      </div>
    </Link>
  );
}