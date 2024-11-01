"use client";
import Link from "next/link";

const Header = () => {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="text-[#1C1C1C] bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-7">
                {/* Logo o nombre del proyecto */}
                <h1 className="text-lg font-bold cursor-pointer" onClick={() => scrollToSection('home')}>
                    Maritime Project
                </h1>

                {/* Menú de navegación */}
                <nav>
                    <ul className="flex space-x-12">
                        <li className="links-efects cursor-pointer" onClick={() => scrollToSection('home')}>
                            Inicio
                        </li>
                        <li className="links-efects cursor-pointer" onClick={() => scrollToSection('about')}>
                            Sobre el Proyecto
                        </li>
                        <li className="links-efects cursor-pointer" onClick={() => scrollToSection('maritime-info')}>
                            Información Marítima
                        </li>
                        <li className="links-efects cursor-pointer">
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
