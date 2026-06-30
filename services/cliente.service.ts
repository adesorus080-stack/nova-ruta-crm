import { Cliente } from "@/types/cliente";

const STORAGE_KEY = "nova-ruta-clientes";

export function obtenerClientes(): Cliente[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function guardarClientes(clientes: Cliente[]) {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(clientes)
  );
}