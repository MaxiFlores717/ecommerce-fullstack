import Link from "next/link";
import { ShoppingBag, Truck, ShieldCheck } from "lucide-react";

// Iconos SVG limpios para redes sociales
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="mt-auto border-t border-slate-800 bg-slate-900 text-slate-400">
            {/* Contenedor Principal */}
            <div className="mx-auto max-w-7xl px-6 py-8">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

                    {/* Logo de la tienda */}
                    <div className="flex items-center gap-2 text-white">
                        <ShoppingBag className="h-6 w-6 text-indigo-400" />
                        <span className="text-xl font-bold tracking-tight">MarketPro</span>
                    </div>


                    {/* Redes Sociales e Iconos de Beneficio */}
                    <div className="flex items-center gap-6">
                        {/* Beneficio destacado */}
                        <div className="hidden items-center gap-2 text-xs text-slate-300 sm:flex">
                            <Truck className="h-4 w-4 text-indigo-400" />

                            <span>Envíos a todo el país</span>
                        </div>

                        {/* Iconos de Redes Sociales */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg p-2 transition-colors hover:bg-slate-800 hover:text-pink-400"
                                aria-label="Instagram"
                            >
                                <InstagramIcon className="h-5 w-5" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg p-2 transition-colors hover:bg-slate-800 hover:text-blue-400"
                                aria-label="Facebook"
                            >
                                <FacebookIcon className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Sub-footer (Copyright) */}
            <div className="border-t border-slate-800/60 bg-slate-950 py-4 text-center text-xs text-slate-500">
                © 2026 MarketPro E-Commerce. Todos los derechos reservados.
            </div>
        </footer>
    );
}
