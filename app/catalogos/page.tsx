import {
  BadgeDollarSign,
  Building2,
  CircleDollarSign,
  CreditCard,
  Flag,
  Map,
  MapPin,
  Plane,
  Tags,
} from "lucide-react";

import MainLayout from "@/components/layout/MainLayout";
import CatalogoCard from "@/components/catalogos/CatalogoCard";

const catalogos = [
  {
    titulo: "Países",
    descripcion: "Administra los países disponibles.",
    href: "/catalogos/paises",
    icono: Flag,
  },
  {
    titulo: "Estados",
    descripcion: "Administra estados y regiones.",
    href: "/catalogos/estados",
    icono: Map,
  },
  {
    titulo: "Ciudades",
    descripcion: "Administra ciudades y destinos.",
    href: "/catalogos/ciudades",
    icono: MapPin,
  },
  {
    titulo: "Aerolíneas",
    descripcion: "Registra aerolíneas y códigos comerciales.",
    href: "/catalogos/aerolineas",
    icono: Plane,
  },
  {
    titulo: "Hoteles",
    descripcion: "Administra hoteles y propiedades.",
    href: "/catalogos/hoteles",
    icono: Building2,
  },
  {
    titulo: "Monedas",
    descripcion: "Configura monedas y símbolos.",
    href: "/catalogos/monedas",
    icono: CircleDollarSign,
  },
  {
    titulo: "Formas de pago",
    descripcion: "Administra los métodos de cobro.",
    href: "/catalogos/formas-pago",
    icono: CreditCard,
  },
  {
    titulo: "Estatus",
    descripcion: "Configura estados de clientes y operaciones.",
    href: "/catalogos/estatus",
    icono: Tags,
  },
  {
    titulo: "Tipos de cliente",
    descripcion: "Clasifica prospectos, clientes y perfiles VIP.",
    href: "/catalogos/tipos-cliente",
    icono: BadgeDollarSign,
  },
];

export default function CatalogosPage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Catálogos maestros
          </h1>

          <p className="mt-2 text-slate-400">
            Configura la información base utilizada por los módulos de NOVA RUTA CRM.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {catalogos.map((catalogo) => (
            <CatalogoCard
              key={catalogo.href}
              titulo={catalogo.titulo}
              descripcion={catalogo.descripcion}
              href={catalogo.href}
              icono={catalogo.icono}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}