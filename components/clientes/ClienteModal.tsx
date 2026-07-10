"use client";

import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

import ClienteForm from "./ClienteForm";

import {
  Cliente,
  ClienteForm as ClienteFormType,
  clienteVacio,
  clienteToForm,
} from "@/types/cliente";

interface Props {
  cliente?: Cliente | null;
  onSave: (cliente: ClienteFormType | Cliente) => void;
}

export default function ClienteModal({
  cliente,
  onSave,
}: Props) {
  const [open, setOpen] = useState(false);

  const [form, setForm] =
    useState<ClienteFormType>(clienteVacio);

  useEffect(() => {
    if (cliente) {
      setForm(clienteToForm(cliente));
    } else {
      setForm(clienteVacio);
    }
  }, [cliente]);

  function guardar() {
    if (
      !form.nombre.trim() ||
      !form.telefono.trim() ||
      !form.correo.trim()
    ) {
      return;
    }

    if (cliente) {
      onSave({
        id: cliente.id,
        ...form,
      });
    } else {
      onSave(form);
    }

    setOpen(false);
    setForm(clienteVacio);
  }

  function cancelar() {
    setOpen(false);
    setForm(clienteVacio);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogTrigger asChild>

        <Button className="gap-2">

          <Plus size={18} />

          {cliente ? "Editar" : "Nuevo Cliente"}

        </Button>

      </DialogTrigger>

      <DialogContent className="max-w-2xl">

        <DialogHeader>

          <DialogTitle>

            {cliente
              ? "Editar Cliente"
              : "Nuevo Cliente"}

          </DialogTitle>

        </DialogHeader>

        <ClienteForm
          form={form}
          setForm={setForm}
        />

        <div className="flex justify-end gap-3 pt-6">

          <Button
            variant="outline"
            onClick={cancelar}
          >
            Cancelar
          </Button>

          <Button onClick={guardar}>
            Guardar Cliente
          </Button>

        </div>

      </DialogContent>

    </Dialog>
  );
}