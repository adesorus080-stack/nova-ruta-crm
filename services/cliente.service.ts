import { Cliente } from "@/types/cliente";

const STORAGE_KEY = "nova-ruta-clientes";

export function obtenerClientes(): Cliente[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  try {
    return JSON.parse(data) as Cliente[];
  } catch {
    return [];
  }
}

export function guardarClientes(clientes: Cliente[]): void {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(clientes)
  );
}

export function crearCliente(
  clientes: Cliente[],
  nuevo: Omit<Cliente, "id">
): Cliente[] {
  const cliente: Cliente = {
    id: Date.now(),
    ...nuevo,
  };

  return [cliente, ...clientes];
}

export function actualizarCliente(
  clientes: Cliente[],
  actualizado: Cliente
): Cliente[] {
  return clientes.map((cliente) =>
    cliente.id === actualizado.id
      ? actualizado
      : cliente
  );
}

export function eliminarCliente(
  clientes: Cliente[],
  id: number
): Cliente[] {
  return clientes.filter(
    (cliente) => cliente.id !== id
  );
}

export function buscarClientes(
  clientes: Cliente[],
  texto: string
): Cliente[] {
  if (!texto.trim()) return clientes;

  const filtro = texto.toLowerCase();

  return clientes.filter((cliente) => {
    return (
      cliente.nombre.toLowerCase().includes(filtro) ||
      cliente.telefono.toLowerCase().includes(filtro) ||
      cliente.correo.toLowerCase().includes(filtro) ||
      cliente.ciudad.toLowerCase().includes(filtro) ||
      cliente.estado.toLowerCase().includes(filtro)
    );
  });
}