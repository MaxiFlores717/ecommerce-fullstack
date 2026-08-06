import Link from "next/link";
import { ShoppingBag, Search, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/95 backdrop-blur text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">

                {/* 1. Logo de la marca */}
                <Link href="/" className="flex items-center gap-2">
                    <ShoppingBag className="h-6 w-6 text-indigo-400" />
                    <span className="text-xl font-bold tracking-tight">MarketPro</span>
                </Link>



                {/* 3. Enlaces de Navegación Principal */}
                <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
                    <Link href="/" className="transition-colors hover:text-white">
                        Inicio
                    </Link>
                    <Link href="/" className="transition-colors hover:text-white">
                        Productos
                    </Link>
                </nav>

                {/* 4. Botones de Acción (Carrito y Login) */}
                <div className="flex items-center gap-3">
                    {/* Icono de Carrito de Compras */}
                    <Link
                        href="/"
                        className="relative rounded-lg p-2 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
                        aria-label="Carrito de compras"
                    >
                        <ShoppingCart className="h-5 w-5" />
                        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500 text-[10px] font-bold text-white">
                            0
                        </span>
                    </Link>

                    {/* Botón de Ingresar / Login */}
                    <Link
                        href="/login"
                        className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
                    >
                        <User className="h-4 w-4" />
                        <span>Ingresar</span>
                    </Link>
                </div>

            </div>
        </header>
    );
}
