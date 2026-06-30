export interface Cliente {
  id: number;
  nombre: string;
  telefono: string;
  correo: string;
  ciudad: string;
  estado: string;
}

export type ClienteForm = Omit<Cliente, "id">;