import { useEffect } from 'react';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import Categorias from '../components/categorias';
import Hero from '../components/hero';
import Producto from '../components/producto';
import Servicios from '../components/Servicio';
import Layout from '../layout/Layout';
import useIndumentaria from '../hooks/useIndumentaria';
import Carousel from '../components/carousel';

export default function Home({ productosDB, trabajosDB }) {
  const { getProductos, getTrabajos, productos, trabajos } = useIndumentaria();

  useEffect(() => {
    getProductos(productosDB);
    getTrabajos(trabajosDB);
  }, []);

  const productosSlice = productos?.slice(0, 4);
  const primerCarousel = trabajos?.slice(0, Math.ceil(trabajos?.length / 2));
  const segundoCarousel = trabajos?.slice(
    Math.ceil(trabajos?.length / 2),
    trabajos?.length
  );

  return (
    <Layout title="Inicio">
      <Hero />
      <Categorias />

      <div className="flex flex-col space-y-4 md:flex-row items-center justify-around py-2 md:py-16 overflow-visible">
        <h1 className="text-2xl text-center md:text-4xl font-semibold text-amber-500 border-b-4 border-amber-500/70 py-1">
          Productos
        </h1>

        <Link
          href="/productos"
          className="bg-amber-500/70 p-4 hover:text-zinc-900 hover:bg-amber-500/90 text-white cursor-pointer rounded-sm transition ease-in duration-300 uppercase shadow-md font-semibold tracking-widest text-xs"
        >
          Todos los Productos
        </Link>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 pb-24 px-10 md:px-44">
        {productos?.length > 0 &&
          productosSlice?.map((producto) => (
            <Producto key={producto.codigoproducto} producto={producto} />
          ))}
      </div>

      <Servicios />

      <div className="pb-24 px-5 2xl:px-44">
        <h1 className="text-2xl text-center py-2 md:py-16 md:text-4xl font-semibold">
          Trabajos{' '}
          <span className="text-amber-500/70 border-b-4 border-amber-500/40">
            Realizados
          </span>
        </h1>

        <Carousel trabajos={primerCarousel} />
        <Carousel trabajos={segundoCarousel} />
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const prisma = new PrismaClient();

  const [productosDB, trabajosDB] = await Promise.all([
    prisma.productos.findMany(),
    prisma.trabajos.findMany(),
  ]);

  return { props: { productosDB, trabajosDB } };
};
