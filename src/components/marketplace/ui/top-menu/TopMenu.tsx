"use client";

import Image from "next/image";
import Link from "next/link";
import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {

    const openSideMenu = useUIStore(state => state.openSideMenu);

    return (
        <nav className="flex px-5 justify-between items-center w-full">

            {/* Logo */}
            <div>
                <Link href="/dashboard" className="flex items-center">
                    <Image src="/logo.png" alt="Petpal Logo" width={50} height={50} />
                    <span className={`${titleFont.className} antialiased font-bold ml-2.5 hidden sm:inline`}>Petpal</span>
                    <span className={`${titleFont.className} antialiased ml-1 hidden sm:inline`}>| Tienda</span>
                </Link>
            </div>

            {/* Center Menu */}
            <div className="hidden lg:block">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/dogs">Perros</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/cats">Gatos</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/fishes">Peces</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/birds">Aves</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/rodents">Roedores</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/reptiles">Reptiles</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/amphibians">Anfibios</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/exotic-animals">Animales Exóticos</Link>
            </div>

            {/* Cart, Search, Menu */}
            <div className="flex items-center">
                <Link href="/search" className="mx-2">
                    <IoSearchOutline className="w-5 h-5" />
                </Link>

                <Link href="/cart" className="mx-2">
                    <div className="relative">
                        <span className="absolute text-xs px-1 rounded-full font-bold -top-2  bg-blue-700 -right-2 text-white">
                            3
                        </span>
                        <IoCartOutline className="w-5 h-5" />
                    </div>
                </Link>

                <button
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
                    onClick={openSideMenu}
                >
                    Menú
                </button>
            </div>
        </nav>
    )
}