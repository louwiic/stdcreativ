"use client"
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, User, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/your-logo.svg"
                            alt="Logo"
                            width={120}
                            height={40}
                            className="h-8 w-auto"
                        />
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden sm:flex items-center space-x-8">
                        <div className="relative"
                            onMouseEnter={() => setIsOpen(true)}
                            onMouseLeave={() => setIsOpen(false)}
                        >
                            <button
                                className="flex items-center text-gray-700 hover:text-gray-900"
                            >
                                Catégories
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>

                            {isOpen && (
                                <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div className="py-1" role="menu">
                                        <Link href="/categories/vetements" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Vêtements
                                        </Link>
                                        <Link href="/categories/chaussures" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Chaussures
                                        </Link>
                                        <Link href="/categories/accessoires" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Accessoires
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/shop" className="text-gray-700 hover:text-gray-900">
                            Boutique
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-gray-900">
                            À propos
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-gray-900">
                            Contact
                        </Link>
                    </div>

                    {/* Cart & User Icons */}
                    <div className="flex items-center space-x-4">
                        <Link href="/cart" className="text-gray-700 hover:text-gray-900">
                            <span className="sr-only">Panier</span>
                            <ShoppingCart className="h-6 w-6" />
                        </Link>
                        <Link href="/account" className="text-gray-700 hover:text-gray-900">
                            <span className="sr-only">Compte</span>
                            <User className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}