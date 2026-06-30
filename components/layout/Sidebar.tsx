"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  FileText,
  Plane,
  CreditCard,
  Calendar,
  BarChart3,
  Settings,
} from "lucide-react";

const menu = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Clientes", href: "/clientes", icon: Users },
  { name: "Cotizaciones", href: "/cotizaciones", icon: FileText },
  { name: "Reservas", href: "/reservas", icon: Plane },
  { name: "Pagos", href: "/pagos", icon: CreditCard },
  { name: "Calendario", href: "/calendario", icon: Calendar },
  { name: "Reportes", href: "/reportes", icon: BarChart3 },
  { name: "Configuración", href: "/configuracion", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col">
      <div className="p-8 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-amber-400">
          NOVA RUTA
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          CRM para Agencias de Viajes
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-800 p-5 text-xs text-slate-500">
        NOVA RUTA CRM v0.1
      </div>
    </aside>
  );
}