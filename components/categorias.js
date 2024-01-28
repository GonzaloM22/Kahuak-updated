import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Categorias = () => {
  return (
    <main className="bg-gray-100">
      <div className="space-x-4 py-16 flex justify-center flex-wrap text-gray-200">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="relative hover:brightness-125 shadow-sm mb-2"
        >
          <Link href="/productos/gastronomia">
            <Image
              width={150}
              height={300}
              src="/img/categorias/gastronomia.jpg"
              alt="Gastronomia"
              className="object-cover brightness-50 rounded-sm hover:scale-105 ease-in duration-200 h-full"
            />
          </Link>
          <span className="absolute bottom-5 left-8 z-50">Gatronomía</span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="relative hover:brightness-125 shadow-sm mb-2"
        >
          <Link href="/productos/sanidad">
            <Image
              width={150}
              height={300}
              src="/img/categorias/sanidad.jpg"
              alt="Sanidad"
              className="object-cover brightness-50 rounded-sm hover:scale-105 ease-in duration-200 h-full"
            />
          </Link>
          <span className="absolute bottom-5 left-10 z-50 ">Sanidad</span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="relative hover:brightness-125 shadow-sm mb-2"
        >
          <Link href="/productos/industria">
            <Image
              width={150}
              height={300}
              src="/img/categorias/industria.jpg"
              alt="Industria"
              className="object-cover brightness-50 rounded-sm hover:scale-105 ease-in duration-200 h-full"
            />
          </Link>
          <span className="absolute bottom-5 left-10 z-50 ">Industria</span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="relative  hover:brightness-125 shadow-sm mb-2"
        >
          <Link href="/productos/automotriz">
            <Image
              width={150}
              height={300}
              src="/img/categorias/automotriz.jpg"
              alt="Automotriz"
              className="object-cover brightness-50 rounded-sm hover:scale-105 ease-in duration-200 h-full"
            />
          </Link>
          <span className="absolute bottom-5 left-8 z-50 ">Automotriz</span>
        </div>
      </div>
    </main>
  );
};

export default Categorias;
