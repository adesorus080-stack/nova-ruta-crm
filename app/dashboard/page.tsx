import MainLayout from "@/components/layout/MainLayout";

export default function DashboardPage() {
  return (
    <MainLayout>
      <div>
        <h1 className="text-4xl font-bold text-amber-400">
          Bienvenido a NOVA RUTA CRM
        </h1>

        <p className="mt-3 text-slate-400">
          El Dashboard profesional está listo.
        </p>
      </div>
    </MainLayout>
  );
}