import Link from 'next/link';
import Layout from '../layout/Layout';

const NoEncontrado = () => {
  return (
    <Layout title="No encontrado" notFound={true}>
      <div className="flex flex-col justify-center items-center h-[70vh] space-y-4">
        <h1 className="text-black text-xl font-semibold">
          Pagina no encontrada
        </h1>
        <Link href="/" className="text-amber-600 text-3xl m-0 font-bold">
          Volver al Inicio
        </Link>
      </div>
    </Layout>
  );
};
export default NoEncontrado;
