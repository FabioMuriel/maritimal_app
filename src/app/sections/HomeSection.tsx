import Image from 'next/image';
import BackgroundComplementHomeImage from '@/images/BackgroundImage.jpg';

const HomeSection = () => {
  return (
    <div id="home" className="relative h-screen bg-blue-800">
      {/* Imagen de fondo */}
      <Image
        src={BackgroundComplementHomeImage}
        alt="Fondo Marítimo"
        layout="fill"
        objectFit="cover"
        className="opacity-100"
      />

      {/* Texto de bienvenida */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido al Proyecto Marítimo</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Explora la historia, tradiciones, y la mística del ceremonial marítimo. Aquí encontrarás información detallada sobre banderas, insignias y protocolos navales.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
