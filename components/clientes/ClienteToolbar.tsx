"use client";

import { Search } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function ClienteToolbar({
  search,
  setSearch,
}: Props) {
  return (
    <div className="flex-1">

      <h1 className="text-3xl font-bold text-white">
        Clientes
      </h1>

      <p className="text-slate-400 mb-6">
        Administración de clientes
      </p>

      <div className="relative w-80">

        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar cliente..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900 py-2 pl-10 pr-4 text-white outline-none focus:border-blue-500"
        />

      </div>

    </div>
  );
}