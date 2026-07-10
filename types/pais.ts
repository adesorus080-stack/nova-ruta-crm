export interface Pais {
  id: number;
  nombre: string;
  codigo: string;
}

export interface PaisForm {
  nombre: string;
  codigo: string;
}

export const paisVacio: PaisForm = {
  nombre: "",
  codigo: "",
};

export function paisToForm(
  pais: Pais
): PaisForm {
  return {
    nombre: pais.nombre,
    codigo: pais.codigo,
  };
}