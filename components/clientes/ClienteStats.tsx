"use client";

import { Users, UserPlus, MapPin } from "lucide-react";

import { Cliente } from "@/types/cliente";

interface Props {
  clientes: Cliente[];
}

export default function ClienteStats({ clientes }: Props) {
  const totalClientes = clientes.length;

  const ultimoCliente = clientes[0]?.nombre ?? "Sin registros";

  const ciudades = new Set(
    clientes
      .map((cliente) => cliente.ciudad)
      .filter(Boolean)
  );

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">
              Total de clientes
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              {totalClientes}
            </h3>
          </div>

          <div className="rounded-lg bg-blue-600/20 p-3 text-blue-400">
            <Users size={24} />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">
              Último cliente
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              {ultimoCliente}
            </h3>
          </div>

          <div className="rounded-lg bg-amber-500/20 p-3 text-amber-400">
            <UserPlus size={24} />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">
              Ciudades registradas
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              {ciudades.size}
            </h3>
          </div>

          <div className="rounded-lg bg-emerald-600/20 p-3 text-emerald-400">
            <MapPin size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}