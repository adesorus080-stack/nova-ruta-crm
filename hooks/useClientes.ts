"use client";

import { useEffect, useMemo, useState } from "react";

import {
  Cliente,
  ClienteForm,
} from "@/types/cliente";

import {
  obtenerClientes,
  guardarClientes,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
  buscarClientes,
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
    useState<Cliente[]>([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    const almacenados = obtenerClientes();

    if (almacenados.length > 0) {
      setClientes(almacenados);
    } else {
      setClientes(clientesDemo);
    }
  }, []);

  useEffect(() => {
    if (clientes.length > 0) {
      guardarClientes(clientes);
    }
  }, [clientes]);

  function agregar(cliente: ClienteForm) {
    setClientes((prev) =>
      crearCliente(prev, cliente)
    );
  }

  function editar(cliente: Cliente) {
    setClientes((prev) =>
      actualizarCliente(prev, cliente)
    );
  }

  function eliminar(id: number) {
    setClientes((prev) =>
      eliminarCliente(prev, id)
    );
  }

  const clientesFiltrados = useMemo(() => {
    return buscarClientes(
      clientes,
      search
    );
  }, [clientes, search]);

  return {
    clientes: clientesFiltrados,
    clientesOriginales: clientes,
    search,
    setSearch,
    agregar,
    editar,
    eliminar,
  };
}