import Image from 'next/image';
import MaritimeImage from '@/images/Colombia_Gloria.jpg';

const AboutSection = () => {
    return (
        <section id="about" className="py-16 px-4 bg-gray-100 text-gray-800">
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12">

                {/* Imagen ilustrativa */}
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <Image
                        src={MaritimeImage}
                        alt="Imagen marítima"
                        className="rounded-lg shadow-lg"
                        width={500}
                        height={350}
                    />
                </div>

                {/* Texto descriptivo */}
                <div className="lg:w-1/2 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                        Sobre el Proyecto Marítimo
                    </h2>
                    <p className="text-lg leading-relaxed">
                        Este proyecto está dedicado a preservar y promover el conocimiento sobre las
                        tradiciones y ceremonias de la marina. A través de este portal, queremos compartir
                        la importancia de las costumbres marítimas, que han sido honradas durante
                        generaciones en la Armada.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Explora temas que abarcan desde el protocolo de uso de banderas y distintivos,
                        hasta la historia y los valores que definen a cada unidad marítima. Nuestra misión
                        es ser una fuente de referencia para quienes deseen aprender más sobre el valor
                        del ceremonial marítimo y su rol en la identidad nacional.
                    </p>

                    {/* Datos Clave */}
                    <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-blue-800">Aspectos Clave:</h3>
                        <ul className="list-disc list-inside space-y-1 text-lg">
                            <li>Reseña histórica de la tradición marítima y sus valores fundamentales.</li>
                            <li>Normas de protocolo y ceremonial para actos oficiales.</li>
                            <li>Significado de banderas, insignias y símbolos de la marina.</li>
                            <li>Conservación de la identidad y orgullo de la Armada.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
