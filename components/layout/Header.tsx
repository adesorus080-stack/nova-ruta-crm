export default function Header() {
  return (
    <header className="h-20 border-b border-slate-800 bg-slate-950 flex items-center justify-between px-8">
      <div>
        <h2 className="text-xl font-semibold text-white">
          Dashboard
        </h2>

        <p className="text-sm text-slate-400">
          Bienvenido a NOVA RUTA CRM
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-amber-400" />

        <div>
          <p className="text-white font-medium">
            Administrador
          </p>

          <p className="text-sm text-slate-400">
            Online
          </p>
        </div>
      </div>
    </header>
  );
}