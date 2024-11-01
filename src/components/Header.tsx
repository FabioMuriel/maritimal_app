"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false); // Cierra el menú al hacer clic en una sección
        }
    };

    const handleNavigation = async (id: string) => {
        await router.push("/");
        // Usamos setTimeout para esperar a que la navegación termine y luego hacemos el scroll
        setTimeout(() => scrollToSection(id), 100);
    };

    return (
        <header className="text-[#1C1C1C] bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-5">
                {/* Logo o nombre del proyecto */}
                <h1 className="text-lg font-bold cursor-pointer" onClick={() => handleNavigation('home')}>
                    Maritime Project
                </h1>

                {/* Botón del menú hamburguesa para pantallas pequeñas */}
                <button
                    className="text-2xl sm:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Menú de navegación */}
                <nav className={`${menuOpen ? 'block' : 'hidden'} sm:flex sm:space-x-12 absolute sm:static top-full left-0 w-full sm:w-auto bg-white shadow-lg sm:shadow-none`}>
                    <ul className="flex flex-col sm:flex-row items-center w-full sm:w-auto sm:space-x-12 space-y-3 sm:space-y-0">
                        <li className="links-efects cursor-pointer" onClick={() => handleNavigation('home')}>
                            Inicio
                        </li>
                        <li className="links-efects cursor-pointer" onClick={() => handleNavigation('about')}>
                            Sobre el Proyecto
                        </li>
                        <li className="links-efects cursor-pointer" onClick={() => handleNavigation('maritime-info')}>
                            Información Marítima
                        </li>
                        <li className="links-efects cursor-pointer" onClick={() => setMenuOpen(false)}>
                            <Link href="/flagsDetails">
                                Banderas e Insignias
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
