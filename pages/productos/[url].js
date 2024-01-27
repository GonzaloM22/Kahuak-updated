import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Producto from '../../components/producto';
import Layout from '../../layout/Layout';
import data from '../../data.json';

export default function productos({ productosDB }) {
  const [categoryProducts, setCategoryPorductos] = useState([]);
  const router = useRouter();
  const { url } = router.query;

  
  const { products } = data;

  useEffect(() => {
    if (url && products.length) {
      const filteredProducts = products.filter(
        (product) => product.category.includes(url) 
      );
      setCategoryPorductos(filteredProducts);
    }
  }, [products, url]);

  return (
    <Layout title="Productos">
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 ">
            Nuestros <span className="text-amber-500">productos</span>
          </h1>
          <h4 className="text-gray-600 text-sm font-medium my-4 capitalize">
            {url}
          </h4>

          <div className="grid gap-4 grid-cols-1 min-h-[calc(100vh-539px)] md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {categoryProducts?.map(
              (product) =>
                product.visible && (
                  <Producto key={product.id} product={product} />
                )
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
