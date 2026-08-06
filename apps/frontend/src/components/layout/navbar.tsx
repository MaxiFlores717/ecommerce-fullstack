import Link from "next/link";

export default function Navbar() {
    return (
        <header className="bg-slate-900 p-4 text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <h1 className="text-2xl font-bold">
                    E-Commerce
                </h1>

                <nav className="flex gap-6">
                    <Link href="/">Inicio</Link>
                    <Link href={"/login"}>
                        Login
                    </Link>
                </nav>
            </div>
        </header>
    );
}