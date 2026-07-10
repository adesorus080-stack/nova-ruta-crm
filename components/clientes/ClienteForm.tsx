"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ClienteForm as ClienteFormType } from "@/types/cliente";

interface Props {
  form: ClienteFormType;
  setForm: React.Dispatch<React.SetStateAction<ClienteFormType>>;
}

export default function ClienteForm({
  form,
  setForm,
}: Props) {
  function actualizarCampo(
    campo: keyof ClienteFormType,
    valor: string
  ) {
    setForm((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  }

  return (
    <div className="grid grid-cols-2 gap-5">

      <div>
        <Label>Nombre *</Label>
        <Input
          value={form.nombre}
          onChange={(e) =>
            actualizarCampo("nombre", e.target.value)
          }
        />
      </div>

      <div>
        <Label>Teléfono *</Label>
        <Input
          value={form.telefono}
          onChange={(e) =>
            actualizarCampo("telefono", e.target.value)
          }
        />
      </div>

      <div className="col-span-2">
        <Label>Correo *</Label>
        <Input
          type="email"
          value={form.correo}
          onChange={(e) =>
            actualizarCampo("correo", e.target.value)
          }
        />
      </div>

      <div>
        <Label>Ciudad</Label>
        <Input
          value={form.ciudad}
          onChange={(e) =>
            actualizarCampo("ciudad", e.target.value)
          }
        />
      </div>

      <div>
        <Label>Estado</Label>
        <Input
          value={form.estado}
          onChange={(e) =>
            actualizarCampo("estado", e.target.value)
          }
        />
      </div>

    </div>
  );
}