"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  FolderTree,
  FileText,
  CalendarDays,
  CreditCard,
  Building2,
  BarChart3,
  Settings,
} from "lucide-react";

const menu = [
  {
    titulo: "Dashboard",
    ruta: "/",
    icono: LayoutDashboard,
  },
  {
    titulo: "Clientes",
    ruta: "/clientes",
    icono: Users,
  },
  {
    titulo: "Catálogos",
    ruta: "/catalogos",
    icono: FolderTree,
  },
  {
    titulo: "Cotizaciones",
    ruta: "/cotizaciones",
    icono: FileText,
  },
  {
    titulo: "Reservas",
    ruta: "/reservas",
    icono: CalendarDays,
  },
  {
    titulo: "Pagos",
    ruta: "/pagos",
    icono: CreditCard,
  },
  {
    titulo: "Proveedores",
    ruta: "/proveedores",
    icono: Building2,
  },
  {
    titulo: "Reportes",
    ruta: "/reportes",
    icono: BarChart3,
  },
  {
    titulo: "Configuración",
    ruta: "/configuracion",
    icono: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950">

      <div className="border-b border-slate-800 p-6">

        <h1 className="text-2xl font-bold text-amber-400">
          NOVA RUTA
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          CRM · ERP Travel
        </p>

      </div>

      <nav className="flex-1 space-y-2 p-4">

        {menu.map((item) => {

          const Icon = item.icono;

          const activo =
            pathname === item.ruta ||
            pathname.startsWith(item.ruta + "/");

          return (
            <Link
              key={item.ruta}
              href={item.ruta}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                activo
                  ? "bg-amber-500 text-slate-950 font-semibold"
                  : "text-slate-300 hover:bg-slate-900"
              }`}
            >
              <Icon size={20} />

              {item.titulo}

            </Link>
          );
        })}

      </nav>

      <div className="border-t border-slate-800 p-4">

        <div className="rounded-xl bg-slate-900 p-4">

          <p className="text-xs text-slate-400">
            NOVA RUTA CRM
          </p>

          <p className="mt-1 font-semibold text-white">
            Versión 0.3.3
          </p>

        </div>

      </div>

    </aside>
  );
}