import Image from 'next/image';

const Trabajo = ({ trabajo }) => {
  const { imagen } = trabajo;

  return (
    <main className="shadow rounded-md p-3 -z-50">
      <Image
        src={imagen}
        width={500}
        height={500}
        alt="Producto"
        className="object-cover md:w-96 md:h-96 z-0"
      />
    </main>
  );
};

export default Trabajo;
