import Link from 'next/link';
import Image from 'next/image';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 md:px-60">
      <div className=" py-10 px-8 flex justify-between items-center">
        <Link href="/">
          <Image width={90} height={80} alt="logo_kahuak" src="/img/logo.svg" />
          <h3 className="text-gray-100/40 text-xs absolute top-62 left-4 md:left-[250px]">
            Indumentaria de Trabajo
          </h3>
        </Link>

        <div>
          <ul className="text-white flex items-center space-x-4">
            <li>
              <Link
                href="https://www.facebook.com/KahuakIndumentaria"
                target="_blank"
              >
                <FaFacebook size={35} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/kahuakindumentaria"
                target="_blank"
              >
                <AiFillInstagram size={40} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-700/20">
        <nav className="mt-4">
          <ul className="flex gap-4 flex-wrap justify-center text-neutral-400 text-xs md:text-sm">
            <li className="hover:text-gray-200 duration-300">
              <Link href="/">Inicio</Link>
            </li>
            <li className="hover:text-gray-200 duration-300">
              <Link href="/productos">Productos</Link>
            </li>
            <li className="hover:text-gray-200 duration-300">
              <Link href="/empresa">Empresa</Link>
            </li>
            <li className="hover:text-gray-200 duration-300">
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>

        <p className="text-neutral-400 text-center text-xs py-6">
          Kahuak &copy; - {new Date().getFullYear()}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
