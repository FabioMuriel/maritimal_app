import Image from 'next/image';
import MaritimeDetailImage from '@/images/MaritimeDetailImage.jpg';

const MaritimeInfoSection = () => {
  return (
    <section id="maritime-info" className="relative py-16 px-4 bg-white text-gray-800">
      {/* Fondo con opacidad */}
      <div className="absolute inset-0">
        <Image
          src={MaritimeDetailImage}
          alt="Detalles Marítimos"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12 bg-white bg-opacity-80 p-8 rounded-lg shadow-md">
        
        {/* Texto descriptivo */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Información Marítima
          </h2>
          <p className="text-lg leading-relaxed">
            Las tradiciones y ceremoniales marítimos no solo forman parte de la historia 
            naval, sino que también representan el respeto y el compromiso de los marinos 
            hacia su nación. Estas costumbres son esenciales para la identidad y el espíritu 
            de cuerpo de la Armada.
          </p>
          
          {/* Subtítulo y lista de temas clave */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-blue-800">Temas Importantes:</h3>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li><strong>Protocolo de Banderas:</strong> Normas y respeto por el uso de banderas.</li>
              <li><strong>Honores Marítimos:</strong> Ceremonias y saludos entre unidades.</li>
              <li><strong>Código de Señales:</strong> Comunicación visual y sus significados.</li>
              <li><strong>Insignias de Jerarquía:</strong> Símbolos de autoridad y mando.</li>
            </ul>
          </div>
        </div>

        {/* Imagen descriptiva */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <Image
            src={MaritimeDetailImage}
            alt="Detalles de Tradiciones Marítimas"
            width={500}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default MaritimeInfoSection;
