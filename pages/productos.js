import { PrismaClient } from '@prisma/client';
import { useEffect } from 'react';
import Producto from '../components/producto';
import useIndumentaria from '../hooks/useIndumentaria';
import Layout from '../layout/Layout';

export default function productos({ productosDB }) {
  const { productos, getProductos } = useIndumentaria();

  useEffect(() => {
    getProductos(productosDB);
  }, []);

  return (
    <Layout title="Productos">
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 ">
            Nuestros <span className="text-amber-500">productos</span>
          </h1>
          <h4 className="text-gray-600 text-sm font-medium my-4">
            Ropa de trabajo
          </h4>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {productos?.map((producto) => (
              <Producto key={producto.codigoproducto} producto={producto} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const prisma = new PrismaClient();

  const productosDB = await prisma.productos.findMany();

  return { props: { productosDB } };
};
