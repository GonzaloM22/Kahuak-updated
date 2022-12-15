import Image from 'next/image';
import useIndumentaria from '../hooks/useIndumentaria';
import FormContacto from './FormContacto';
import { AiOutlineClose } from 'react-icons/ai';

const ModalProducto = () => {
  const { producto, handleChangeModal } = useIndumentaria();
  return (
    <div className="md:flex gap-10 z-50 ">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          alt={`Imagen Producto`}
          src={producto.imagen}
          className="h-96 w-96 object-cover"
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={() => handleChangeModal()}>
            <AiOutlineClose />
          </button>
        </div>

        <h1 className="text-3xl font-bold text-center p-2 md:p-4">
          {producto.nombre}
        </h1>
        <FormContacto />
      </div>
    </div>
  );
};

export default ModalProducto;
