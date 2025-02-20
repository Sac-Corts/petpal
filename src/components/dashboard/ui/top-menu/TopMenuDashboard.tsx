"use client";

import Image from "next/image";
import Link from "next/link";
import { titleFont } from "@/config/fonts";

export const TopMenuDashboard = () => {

    return (
        <nav className="flex px-5 justify-between items-center w-full">

            {/* Logo */}
            <div>
                <Link href="/dashboard" className="flex items-center">
                    <Image src="/logo.png" alt="Petpal Logo" width={50} height={50} />
                    <span className={`${titleFont.className} antialiased font-bold ml-2.5 hidden sm:inline`}>Petpal</span>
                    <span className={`${titleFont.className} antialiased ml-1 hidden sm:inline`}>| Panel</span>
                </Link>
            </div>

            {/* Center Menu */}
            <div className="hidden lg:block">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/dashboard/reminders">Recordatorios</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/dashboard/history">Historial</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/">Tienda</Link>
            </div>



                <button
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
                >
                    Menú
                </button>
        </nav>
    )
}