import Button from "../ui/button";

export default function LoginForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <div className="w-full max-w-md rounded-2xl bg-slate-800 p-8 shadow-2xl border border-slate-700">
        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          Iniciar sesión
        </h1>

        <form className="flex flex-col gap-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Email
            </label>

            <input
              type="email"
              placeholder="ejemplo@email.com"
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Contraseña
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <button type="submit">
            Ingresar
          </button>

          <p className="text-center text-sm text-slate-400">
            ¿No tenés cuenta?{" "}
            <a href="/register" className="font-semibold text-blue-400 hover:underline">
              Registrate
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}