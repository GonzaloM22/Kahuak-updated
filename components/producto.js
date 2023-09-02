import { useRouter } from 'next/router';
import { Tooltip } from 'react-tooltip';
import Image from 'next/image';
import useIndumentaria from '../hooks/useIndumentaria';

const Producto = ({ producto }) => {
  const { handleChangeModal } = useIndumentaria();
  const { nombre, imagen } = producto;

  const router = useRouter();

  return (
    <main className="shadow rounded-md p-3 ">
      <Image
        data-tooltip-id="name-tooltip-image"
        data-tooltip-content={nombre}
        src={imagen}
        width={350}
        height={450}
        alt="Producto"
        className="object-cover mx-auto w-96 h-[420px]"
      />
      <Tooltip id="name-tooltip-image" place="bottom" />

      <div className="p-5">
        <span
          data-tooltip-id="name-tooltip"
          data-tooltip-content={nombre}
          className="text-xl font-semibold capitalize cut-text"
        >
          {nombre.toLowerCase()}
        </span>
      </div>
      <Tooltip id="name-tooltip" />
      <button
        type="button"
        className="w-full bg-amber-500/70 p-3 hover:text-zinc-900 hover:bg-amber-500/90 text-white cursor-pointer rounded-md transition ease-in duration-300 uppercase shadow-md font-semibold tracking-widest text-xs"
        onClick={() => {
          router.push('/productos');
          handleChangeModal(producto);
        }}
      >
        Consultar
      </button>
    </main>
  );
};

export default Producto;
