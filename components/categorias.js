import Image from 'next/image';
import Link from 'next/link';

const Categorias = () => {
  return (
    <main className="bg-gray-100">
      <div className="space-x-4 py-16 flex justify-center flex-wrap text-gray-200">
        <div className="relative hover:brightness-125 shadow-sm mb-2">
          <Link href="/productos">
            <Image
              width={150}
              height={300}
              src="/img/gastronomia.jpg"
              alt="Gastronomia"
              className="object-cover brightness-50 rounded-sm hover:scale-105 ease-in duration-200 h-full"
            />
          </Link>
          <span className="absolute bottom-5 left-8 z-50">Gatronomía</span>
        </div>
        <div className="relative hover:brightness-125 shadow-sm mb-2">
          <Link href="/productos">
            <Image
              width={150}
              height={300}
              src="/img/sanidad.jpg"
              alt="Sanidad"
              className="object-cover brightness-50 rounded-sm hover:scale-105 ease-in duration-200 h-full"
            />
          </Link>
          <span className="absolute bottom-5 left-10 z-50 ">Sanidad</span>
        </div>
        <div className="relative  hover:brightness-125 shadow-sm mb-2">
          <Link href="/productos">
            <Image
              width={150}
              height={300}
              src="/img/industria.jpg"
              alt="Industria"
              className="object-cover brightness-50 rounded-sm hover:scale-105 ease-in duration-200 h-full"
            />
          </Link>
          <span className="absolute bottom-5 left-10 z-50 ">Industria</span>
        </div>
        <div className="relative  hover:brightness-125 shadow-sm mb-2">
          <Link href="/productos">
            <Image
              width={150}
              height={300}
              src="/img/automotriz.jpg"
              alt="Automotriz"
              className="object-cover brightness-50 rounded-sm hover:scale-105 ease-in duration-200 h-full"
            />
          </Link>
          <span className="absolute bottom-5 left-8 z-50 ">Automotriz</span>
        </div>
        <div className="relative  hover:brightness-125 shadow-sm mb-2">
          <Link href="/productos">
            <Image
              width={150}
              height={300}
              src="/img/publico.jpg"
              alt="Servicio Publico"
              className="object-cover brightness-50 rounded-sm hover:scale-105 ease-in duration-200 h-full"
            />
          </Link>
          <span className="absolute bottom-5 left-5 z-50 ">
            Servicio Público
          </span>
        </div>
        <div className="relative  hover:brightness-125 shadow-sm mb-2">
          <Link href="/productos">
            <Image
              width={150}
              height={300}
              src="/img/comercio.png"
              alt="Comercio"
              className="object-cover brightness-50 rounded-sm hover:scale-105 ease-in duration-200 h-full"
            />
          </Link>
          <span className="absolute bottom-5 left-8 z-50">Comercio</span>
        </div>
      </div>
    </main>
  );
};

export default Categorias;
