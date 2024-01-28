import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Categorias from '../components/categorias';
import Hero from '../components/hero';
import data from '../data.json';
import Servicios from '../components/Servicio';
import Layout from '../layout/Layout';
import Carousel from '../components/carousel';
import Producto from '../components/producto';

export default function Home() {
  const [randomProducts, setRandomProducts] = useState([]);
  const router = useRouter();
  const currentPath = router.asPath;

  const { products, works } = data;

  useEffect(() => {
    router.push(currentPath);
  }, [currentPath]);

  const primerCarousel = works?.slice(0, Math.ceil(works?.length / 2));
  const segundoCarousel = works?.slice(
    Math.ceil(works?.length / 2),
    works?.length
  );

  const getRandomProducts = () => {
    const randomProducts = [];
    for (let i = 0; i < 5; i++) {
      const randomIndice = Math.floor(Math.random() * products.length);
      randomProducts.push(products[randomIndice]);
    }
    setRandomProducts(randomProducts);
  };

  useEffect(() => {
    if (products.length) getRandomProducts();
  }, [products]);
  

  return (
    <Layout title="Inicio">
      <Hero />
      <Categorias />

      <div className="flex flex-col space-y-4 md:flex-row items-center justify-between py-2 md:px-44 md:py-16 overflow-visible">
        <h1 className="text-2xl md:text-4xl font-semibold text-amber-500 border-b-2 border-amber-500/70 py-1">
          Productos
        </h1>

        <Link
          href="/productos"
          className="text-zinc-700 p-4 hover:text-amber-500 cursor-pointer rounded-md transition ease-in duration-300 font-semibold tracking-widest"
        >
          Ver todos
        </Link>
      </div>

      <div
        className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
        2xl:grid-cols-4 pb-24 px-10 md:px-44"
      >
        {randomProducts?.map(
          (product) =>
            product.visible && <Producto key={product.id} product={product} />
        )}
      </div>

      <Servicios />

      <div className="pb-24 px-5 2xl:px-44">
        <h1 className="text-2xl text-left py-2 md:py-16 md:text-4xl font-semibold">
          Trabajos{' '}
          <span className="text-amber-500/70 border-b-2 border-amber-500/40">
            realizados
          </span>
        </h1>

        <Carousel works={primerCarousel} />
        <Carousel works={segundoCarousel} />
      </div>
    </Layout>
  );
}
