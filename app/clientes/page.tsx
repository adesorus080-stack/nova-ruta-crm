"use client";

import { useEffect, useMemo, useState } from "react";

import MainLayout from "@/components/layout/MainLayout";
import ClienteToolbar from "@/components/clientes/ClienteToolbar";
import ClienteTable from "@/components/clientes/ClienteTable";
import ClienteModal, {
  NuevoCliente,
} from "@/components/clientes/ClienteModal";

import { Cliente } from "@/components/clientes/types";

const STORAGE_KEY = "nova-ruta-clientes";

const clientesIniciales: Cliente[] = [
  {
    id: 1,
    nombre: "Juan Pérez",
    telefono: "8112345678",
    correo: "juan@email.com",
    ciudad: "Monterrey",
    estado: "Nuevo León",
  },
  {
    id: 2,
    nombre: "María López",
    telefono: "8188888888",
    correo: "maria@email.com",
    ciudad: "Guadalajara",
    estado: "Jalisco",
  },
];

export default function ClientesPage() {
  const [search, setSearch] = useState("");

  const [clientes, setClientes] =
    useState<Cliente[]>(clientesIniciales);

  const [clienteEditar, setClienteEditar] =
    useState<Cliente | null>(null);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);

    if (data) {
      setClientes(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(clientes)
    );
  }, [clientes]);

  function guardarCliente(cliente: NuevoCliente) {
    if (cliente.id) {
      setClientes((prev) =>
        prev.map((c) =>
          c.id === cliente.id ? { ...cliente } : c
        )
      );

      setClienteEditar(null);

      return;
    }

    const nuevo: Cliente = {
      ...cliente,
      id: Date.now(),
    };

    setClientes((prev) => [nuevo, ...prev]);
  }

  function eliminarCliente(id: number) {
    const confirmar = window.confirm(
      "¿Desea eliminar este cliente?"
    );

    if (!confirmar) return;

    setClientes((prev) =>
      prev.filter((c) => c.id !== id)
    );
  }

  const clientesFiltrados = useMemo(() => {
    const texto = search.toLowerCase();

    return clientes.filter((cliente) => {
      return (
        cliente.nombre.toLowerCase().includes(texto) ||
        cliente.telefono.toLowerCase().includes(texto) ||
        cliente.correo.toLowerCase().includes(texto) ||
        cliente.ciudad.toLowerCase().includes(texto) ||
        cliente.estado.toLowerCase().includes(texto)
      );
    });
  }, [clientes, search]);

  return (
    <MainLayout>
      <div className="space-y-6">

        <div className="flex items-center justify-between">

          <ClienteToolbar
            search={search}
            setSearch={setSearch}
          />

          <ClienteModal
            cliente={clienteEditar}
            onSave={guardarCliente}
          />

        </div>

        <ClienteTable
          clientes={clientesFiltrados}
          onEditar={setClienteEditar}
          onEliminar={eliminarCliente}
        />

      </div>
    </MainLayout>
  );
}