import Image from 'next/image';
import Link from 'next/link';
import useIndumentaria from '../hooks/useIndumentaria';

const Producto = ({ producto }) => {
  const { handleChangeModal } = useIndumentaria();
  const { nombre, imagen } = producto;
  return (
    <main className="shadow rounded-md p-3 ">
      <Image
        src={imagen}
        width={500}
        height={500}
        alt="Producto"
        className="object-cover md:w-96 md:h-96 "
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold">{nombre}</h3>
      </div>
      <button
        type="button"
        className="w-full bg-amber-500/70 p-3 hover:text-zinc-900 hover:bg-amber-500/90 text-white cursor-pointer rounded-sm transition ease-in duration-300 uppercase shadow-md font-semibold tracking-widest text-xs"
        onClick={() => {
          handleChangeModal(producto);
        }}
      >
        Consultar
      </button>
    </main>
  );
};

export default Producto;
