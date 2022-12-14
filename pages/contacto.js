import Layout from '../layout/Layout';
import FormContacto from '../components/FormContacto';

const Contacto = () => {
  return (
    <Layout title="Contacto">
      <div className="bg-[url('https://res.cloudinary.com/gonzalom22/image/upload/v1656724776/Empresa_gt7ego.jpg')] bg-fixed bg-cover h-[90vh] flex justify-center">
        <div className="bg-zinc-900/60 sm:bg-zinc-900/80 xs:px-12 space-y-14 flex flex-col justify-center lg:px-44 lg:my-8 2xl:my-32 rounded-md">
          <div className="text-xs text-gray-100 ">
            <div className="flex-col justify-center ">
              <h3
                data-aos="fade-up"
                className=" text-3xl md:text-4xl font-semibold text-center mt-14"
              >
                Comunicate con Nosotros
              </h3>
              <p
                data-aos="fade-up"
                className="text-sm font-normal mt-4 md:text-lg text-center md:w-[550px]"
              >
                Si querés recibir más información envíanos un mensaje y nos
                contactamos con vos.
              </p>
            </div>
            <div className="space-y-5 font-normal md:block md:text-xl mt-8 ">
              <div className="flex space-x-2 items-center">
                <FormContacto />
              </div>
            </div>
          </div>

          <div className="flex justify-center"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacto;
