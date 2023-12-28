import Image from 'next/image';
import Layout from '../layout/Layout';

export default function Empresa() {

  return (
    <Layout title="Empresa">
      <div className="bg-gray-100 p-8 flex flex-col md:flex-row items-center md:justify-center md:space-x-20 h-[80vh]">
        <Image
          width={400}
          height={1500}
          src="/img/empresa/empresa.svg"
          alt="imagen"
          className="object-cover rounded-lg"
        />

        <div className="md:w-1/2">
          <h1 className="text-zinc-700 uppercase font-bold md:text-xl">
            Quienes somos
          </h1>
          <h4 className="font-light text-neutral-500 py-4">
            Un poco de nosotros
          </h4>

          <p className="font-base text-zinc-700 text-base md:text-justify whitespace-pre-wrap">
            Somos una empresa Familiar ubicada en el departamento de Lujan de
            Cuyo, provincia de Mendoza, estamos en el Rubro hace 40 años. En los
            inicios comenzamos con la fabricación y venta de ropa informal y en
            el año 2006 dimos un giro a la Indumentaria laboral. Fundamos
            Naditex S.A, responsable de la marca KAHUAK.
          </p>
        </div>
      </div>
    </Layout>
  );
}
