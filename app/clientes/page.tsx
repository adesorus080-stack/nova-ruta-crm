"use client";

import { useState } from "react";

import MainLayout from "@/components/layout/MainLayout";
import ClienteToolbar from "@/components/clientes/ClienteToolbar";
import ClienteTable from "@/components/clientes/ClienteTable";
import ClienteModal from "@/components/clientes/ClienteModal";
import DeleteDialog from "@/components/clientes/DeleteDialog";
import ClienteStats from "@/components/clientes/ClienteStats";

import { Cliente, ClienteForm } from "@/types/cliente";
import { useClientes } from "@/hooks/useClientes";

export default function ClientesPage() {
  const {
    clientes,
    clientesOriginales,
    search,
    setSearch,
    agregar,
    editar,
    eliminar,
  } = useClientes();

  const [clienteSeleccionado, setClienteSeleccionado] =
    useState<Cliente | null>(null);

  const [clienteEliminar, setClienteEliminar] =
    useState<Cliente | null>(null);

  function guardarCliente(data: ClienteForm | Cliente) {
    if ("id" in data) {
      editar(data);
    } else {
      agregar(data);
    }

    setClienteSeleccionado(null);
  }

  function confirmarEliminar() {
    if (!clienteEliminar) return;

    eliminar(clienteEliminar.id);
    setClienteEliminar(null);
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <ClienteToolbar
            search={search}
            setSearch={setSearch}
          />

          <ClienteModal
            cliente={clienteSeleccionado}
            onSave={guardarCliente}
          />
        </div>

        <ClienteStats clientes={clientesOriginales} />

        <ClienteTable
          clientes={clientes}
          onEditar={(cliente) =>
            setClienteSeleccionado(cliente)
          }
          onEliminar={(cliente) =>
            setClienteEliminar(cliente)
          }
        />

        <DeleteDialog
          open={clienteEliminar !== null}
          cliente={clienteEliminar}
          onClose={() => setClienteEliminar(null)}
          onConfirm={confirmarEliminar}
        />
      </div>
    </MainLayout>
  );
}