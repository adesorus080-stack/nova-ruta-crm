"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Cliente } from "@/types/cliente";

interface DeleteDialogProps {
  open: boolean;
  cliente: Cliente | null;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteDialog({
  open,
  cliente,
  onClose,
  onConfirm,
}: DeleteDialogProps) {
  function cambiarEstado(nuevoEstado: boolean) {
    if (!nuevoEstado) {
      onClose();
    }
  }

  return (
    <Dialog open={open} onOpenChange={cambiarEstado}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Eliminar cliente</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-sm text-slate-300">
            Esta acción eliminará permanentemente al cliente seleccionado.
          </p>

          {cliente && (
            <div className="rounded-xl border border-red-800 bg-red-950/30 p-4">
              <p className="font-semibold text-white">
                {cliente.nombre}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {cliente.correo}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {cliente.telefono}
              </p>
            </div>
          )}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancelar
            </Button>

            <Button
              type="button"
              variant="destructive"
              onClick={onConfirm}
              disabled={!cliente}
            >
              Eliminar cliente
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}