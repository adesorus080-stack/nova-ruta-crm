"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function ClienteToolbar({
  search,
  setSearch,
}: Props) {
  return (
    <div className="flex items-center gap-4 w-full">

      <div className="relative w-full max-w-md">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <Input
          className="pl-10"
          placeholder="Buscar cliente..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

    </div>
  );
}