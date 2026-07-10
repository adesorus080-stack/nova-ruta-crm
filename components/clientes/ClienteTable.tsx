"use client";

import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Cliente } from "@/types/cliente";

interface Props {
  clientes: Cliente[];
  onEditar: (cliente: Cliente) => void;
  onEliminar: (cliente: Cliente) => void;
}

export default function ClienteTable({
  clientes,
  onEditar,
  onEliminar,
}: Props) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden">

      <Table>

        <TableHeader>

          <TableRow>

            <TableHead>Nombre</TableHead>

            <TableHead>Teléfono</TableHead>

            <TableHead>Correo</TableHead>

            <TableHead>Ciudad</TableHead>

            <TableHead>Estado</TableHead>

            <TableHead className="text-right">
              Acciones
            </TableHead>

          </TableRow>

        </TableHeader>

        <TableBody>

          {clientes.length === 0 && (
            <TableRow>

              <TableCell
                colSpan={6}
                className="text-center py-10 text-slate-400"
              >
                No hay clientes registrados.
              </TableCell>

            </TableRow>
          )}

          {clientes.map((cliente) => (

            <TableRow key={cliente.id}>

              <TableCell className="font-medium">
                {cliente.nombre}
              </TableCell>

              <TableCell>
                {cliente.telefono}
              </TableCell>

              <TableCell>
                {cliente.correo}
              </TableCell>

              <TableCell>
                {cliente.ciudad}
              </TableCell>

              <TableCell>
                {cliente.estado}
              </TableCell>

              <TableCell>

                <div className="flex justify-end gap-2">

                  <Button
                    variant="outline"
                    size="icon-sm"
                    onClick={() => onEditar(cliente)}
                  >
                    <Pencil size={16} />
                  </Button>

                  <Button
                    variant="destructive"
                    size="icon-sm"
                    onClick={() => onEliminar(cliente)}
                  >
                    <Trash2 size={16} />
                  </Button>

                </div>

              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

    </div>
  );
}