"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export interface NuevoCliente {
  id?: number;
  nombre: string;
  telefono: string;
  correo: string;
  ciudad: string;
  estado: string;
}

interface Props {
  cliente?: NuevoCliente | null;
  onSave: (cliente: NuevoCliente) => void;
}

const formularioVacio: NuevoCliente = {
  nombre: "",
  telefono: "",
  correo: "",
  ciudad: "",
  estado: "",
};

export default function ClienteModal({
  cliente,
  onSave,
}: Props) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(formularioVacio);

  useEffect(() => {
    if (cliente) {
      setForm(cliente);
    } else {
      setForm(formularioVacio);
    }
  }, [cliente]);

  function actualizar(
    campo: keyof NuevoCliente,
    valor: string
  ) {
    setForm((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  }

  function guardar() {
    if (!form.nombre.trim()) {
      toast.error("Capture el nombre.");
      return;
    }

    if (!form.telefono.trim()) {
      toast.error("Capture el teléfono.");
      return;
    }

    if (!form.correo.trim()) {
      toast.error("Capture el correo.");
      return;
    }

    onSave(form);

    toast.success(
      cliente
        ? "Cliente actualizado."
        : "Cliente agregado."
    );

    setOpen(false);
    setForm(formularioVacio);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogTrigger asChild>

        {cliente ? (

          <Button
            variant="outline"
            size="sm"
          >
            Editar
          </Button>

        ) : (

          <Button className="gap-2">

            <Plus size={18} />

            Nuevo Cliente

          </Button>

        )}

      </DialogTrigger>

      <DialogContent className="max-w-3xl">

        <DialogHeader>

          <DialogTitle>

            {cliente
              ? "Editar Cliente"
              : "Nuevo Cliente"}

          </DialogTitle>

        </DialogHeader>

        <div className="grid grid-cols-2 gap-5">

          <div>

            <Label>Nombre *</Label>

            <Input
              value={form.nombre}
              onChange={(e) =>
                actualizar(
                  "nombre",
                  e.target.value
                )
              }
            />

          </div>

          <div>

            <Label>Teléfono *</Label>

            <Input
              value={form.telefono}
              onChange={(e) =>
                actualizar(
                  "telefono",
                  e.target.value
                )
              }
            />

          </div>

          <div className="col-span-2">

            <Label>Correo *</Label>

            <Input
              type="email"
              value={form.correo}
              onChange={(e) =>
                actualizar(
                  "correo",
                  e.target.value
                )
              }
            />

          </div>

          <div>

            <Label>Ciudad</Label>

            <Input
              value={form.ciudad}
              onChange={(e) =>
                actualizar(
                  "ciudad",
                  e.target.value
                )
              }
            />

          </div>

          <div>

            <Label>Estado</Label>

            <Input
              value={form.estado}
              onChange={(e) =>
                actualizar(
                  "estado",
                  e.target.value
                )
              }
            />

          </div>

        </div>

        <div className="flex justify-end gap-3 pt-6">

          <Button
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Cancelar
          </Button>

          <Button onClick={guardar}>

            {cliente
              ? "Actualizar"
              : "Guardar"}

          </Button>

        </div>

      </DialogContent>

    </Dialog>
  );
}