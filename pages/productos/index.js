import Producto from '../../components/producto';
import Layout from '../../layout/Layout';
import data from '../../data.json';

export default function productos() {
  const { products } = data;
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
            {products?.map(
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
