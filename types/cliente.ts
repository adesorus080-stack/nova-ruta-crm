export interface Cliente {
  id: number;
  nombre: string;
  telefono: string;
  correo: string;
  ciudad: string;
  estado: string;
}

export interface ClienteForm {
  nombre: string;
  telefono: string;
  correo: string;
  ciudad: string;
  estado: string;
}

export const clienteVacio: ClienteForm = {
  nombre: "",
  telefono: "",
  correo: "",
  ciudad: "",
  estado: "",
};

export function clienteToForm(cliente: Cliente): ClienteForm {
  return {
    nombre: cliente.nombre,
    telefono: cliente.telefono,
    correo: cliente.correo,
    ciudad: cliente.ciudad,
    estado: cliente.estado,
  };
}