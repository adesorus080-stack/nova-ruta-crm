"use client";

import { Cliente } from "./types";

import ClienteModal from "./ClienteModal";

import {
  Pencil,
  Trash2,
  Eye,
} from "lucide-react";

interface Props {
  clientes: Cliente[];
  onEditar: (cliente: Cliente) => void;
  onEliminar: (id: number) => void;
}

export default function ClienteTable({
  clientes,
  onEditar,
  onEliminar,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

      <table className="w-full">

        <thead className="bg-slate-800">

          <tr>

            <th className="p-4 text-left">Nombre</th>
            <th className="p-4 text-left">Teléfono</th>
            <th className="p-4 text-left">Correo</th>
            <th className="p-4 text-left">Ciudad</th>
            <th className="p-4 text-left">Estado</th>

            <th className="p-4 text-center">
              Acciones
            </th>

          </tr>

        </thead>

        <tbody>

          {clientes.length === 0 && (

            <tr>

              <td
                colSpan={6}
                className="p-10 text-center text-slate-400"
              >
                No existen clientes registrados.
              </td>

            </tr>

          )}

          {clientes.map((cliente) => (

            <tr
              key={cliente.id}
              className="border-t border-slate-800 hover:bg-slate-800/70"
            >

              <td className="p-4 font-medium">
                {cliente.nombre}
              </td>

              <td className="p-4">
                {cliente.telefono}
              </td>

              <td className="p-4">
                {cliente.correo}
              </td>

              <td className="p-4">
                {cliente.ciudad}
              </td>

              <td className="p-4">
                {cliente.estado}
              </td>

              <td className="p-4">

                <div className="flex justify-center gap-2">

                  <button
                    className="rounded-lg p-2 hover:bg-slate-700"
                    title="Ver expediente"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    onClick={() => onEditar(cliente)}
                    className="rounded-lg p-2 text-yellow-400 hover:bg-slate-700"
                    title="Editar"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() =>
                      onEliminar(cliente.id)
                    }
                    className="rounded-lg p-2 text-red-500 hover:bg-slate-700"
                    title="Eliminar"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}