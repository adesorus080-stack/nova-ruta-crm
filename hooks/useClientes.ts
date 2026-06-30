"use client";

import { useEffect, useMemo, useState } from "react";

import { Cliente, ClienteForm } from "@/types/cliente";

import {
  guardarClientes,
  obtenerClientes,
} from "@/services/cliente.service";

const clientesDemo: Cliente[] = [
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

export function useClientes() {
  const [clientes, setClientes] =
    useState<Cliente[]>(clientesDemo);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const almacenados = obtenerClientes();

    if (almacenados.length > 0) {
      setClientes(almacenados);
    }
  }, []);

  useEffect(() => {
    guardarClientes(clientes);
  }, [clientes]);

  function crear(cliente: ClienteForm) {
    const nuevo: Cliente = {
      id: Date.now(),
      ...cliente,
    };

    setClientes((prev) => [nuevo, ...prev]);
  }

  function editar(cliente: Cliente) {
    setClientes((prev) =>
      prev.map((c) =>
        c.id === cliente.id ? cliente : c
      )
    );
  }

  function eliminar(id: number) {
    setClientes((prev) =>
      prev.filter((c) => c.id !== id)
    );
  }

  const filtrados = useMemo(() => {
    const texto = search.toLowerCase();

    return clientes.filter((c) => {
      return (
        c.nombre.toLowerCase().includes(texto) ||
        c.telefono.toLowerCase().includes(texto) ||
        c.correo.toLowerCase().includes(texto) ||
        c.ciudad.toLowerCase().includes(texto) ||
        c.estado.toLowerCase().includes(texto)
      );
    });
  }, [clientes, search]);

  return {
    clientes: filtrados,
    search,
    setSearch,
    crear,
    editar,
    eliminar,
  };
}