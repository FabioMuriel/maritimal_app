import Image from 'next/image';
import PabellonPresidencialImage from '@/images/flags/PabellonPresidencial.png';
import MinistroDeDefensaImage from '@/images/flags/MinistroDeDefensa.png';
import ComandanteGeneralDeLasFuerzasMilitares from '@/images/flags/ComandanteGeneralDeLasFuerzasMilitares.png';
import ComandanteArmadaNacional from '@/images/flags/ComandanteArmadaNacional.png';
import AlmiranteOGeneralDeLM from '@/images/flags/AlmiranteOGeneralDeLM.png';
import VicealmiranteOMayorGeneralDeLM from '@/images/flags/VicealmiranteOMayorGeneralDeLM.png';

const InsigniasAndFlagsDetail = () => {
    const insignias = [
        { id: 1, src: PabellonPresidencialImage, title: 'Pabellón Presidencial', description: 'Pabellón Presidencial' },
        { id: 2, src: MinistroDeDefensaImage, title: 'Ministro de Defensa', description: 'Ministro de Defensa' },
        { id: 3, src: ComandanteGeneralDeLasFuerzasMilitares, title: 'Pabellón Presidencial', description: 'Comandante General de las Fuerzas Militares' },
        { id: 4, src: ComandanteArmadaNacional, title: 'Pabellón Presidencial', description: 'Comandante Armada Nacional' },
        { id: 5, src: AlmiranteOGeneralDeLM, title: 'Pabellón Presidencial', description: 'Almirante o General de I.M' },
        { id: 6, src: VicealmiranteOMayorGeneralDeLM, title: 'Pabellón Presidencial', description: 'Vicealmirante o Mayor General de I.M' }
    ];

    return (
        <section className="py-16 px-4 bg-white text-gray-800">
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold">Insignias y Banderas</h2>
                <p className="text-gray-600 mt-4">
                    Las banderas y las insignias representan la soberanía y la identidad de la nación y de la Armada. A continuación, puedes ver diferentes insignias y banderas y sus respectivos significados.
                </p>
            </div>

            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11">
                {insignias.map((insignia) => (
                    <div key={insignia.id} className="flex flex-col items-center text-center">
                        <Image src={insignia.src} alt={insignia.title} className="rounded-lg shadow-lg" width={300} height={300} />
                        <h3 className="mt-4 font-semibold text-xl">{insignia.title}</h3>
                        {/* <p className="text-gray-600">{insignia.description}</p> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InsigniasAndFlagsDetail;
