import Image from 'next/image';
import FlagImage from '@/images/FlagImage.jpg';

const FlagsSection = () => {
    return (
        <section id="flags" className="relative py-16 px-4 bg-gray-50 text-gray-800">
            {/* Fondo y contenedor principal */}
            <div className="absolute inset-0">
                <Image
                    src={FlagImage}
                    alt="Banderas e Insignias"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-30"
                />
            </div>

            <div className="relative container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">

                {/* Contenido textual */}
                <div className="lg:w-1/2 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Banderas e Insignias</h2>
                    <p className="text-lg leading-relaxed">
                        Las banderas y las insignias representan la soberanía y la identidad de la nación y de la Armada. A través de estos símbolos, se comunican valores de respeto, honor y pertenencia. Conoce los significados detrás de cada una y sus normas de uso ceremonial.
                    </p>

                    {/* Lista de banderas destacadas */}
                    <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-blue-800">Tipos de Banderas:</h3>
                        <ul className="list-disc list-inside space-y-1 text-lg">
                            <li><strong>Bandera Nacional:</strong> Representación de la identidad del país en territorio marítimo.</li>
                            <li><strong>Pabellón de Guerra:</strong> Usado por las Fuerzas Armadas durante misiones especiales.</li>
                            <li><strong>Bandera Mercante:</strong> Identificación de buques comerciales en aguas internacionales.</li>
                            <li><strong>Insignias de Comandantes:</strong> Señalización de mando y autoridad.</li>
                        </ul>
                    </div>
                </div>

                {/* Imagen ilustrativa de insignias */}
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <Image
                        src={FlagImage}
                        alt="Detalles de Banderas e Insignias"
                        width={500}
                        height={350}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default FlagsSection;
