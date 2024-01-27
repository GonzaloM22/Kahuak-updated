import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillPhone,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';
import { FiFacebook } from 'react-icons/fi';

const Header = () => {
  const router = useRouter();
  const urlActual = router.asPath;

  const [showMenu, setShowMenu] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  const routes = ['productos', 'empresa', 'contacto'];

  const checkUrl = routes.some((r) => urlActual.includes(r));

  return (
    <header
      className={
        checkUrl
          ? 'bg-zinc-900/95  w-full z-[100] '
          : shadow
          ? 'shadow-2xl fixed w-full z-[100] '
          : 'fixed w-full z-[100] '
      }
    >
      <div
        className={
          shadow
            ? 'hidden'
            : 'text-neutral-200 border-b border-gray-100/10 p-3 flex justify-around items center md:p-1'
        }
      >
        <Link
          href="https://goo.gl/maps/9EouGxHffm5sNR2z6"
          target="_blank"
          className="flex justify-center items-center space-x-1"
        >
          <MdLocationPin size={15} className="text-amber-500/70" />
          <span className="text-xs md:text-base hover:text-amber-500/60 font-light ease-in duration-200">
            Lujan de cuyo, Mendoza
          </span>
        </Link>
        <div className="flex space-x-2 md:space-x-20">
          <Link
            href="https://api.whatsapp.com/send?phone=5493516286538&text="
            target="_blank"
            className="flex justify-center items-center space-x-1"
          >
            <AiFillPhone size={15} className="text-amber-500/70" />
            <span className="text-xs md:text-base  hover:text-amber-500/60 font-normal ease-in duration-200">
              3516256538
            </span>
          </Link>
          <ul className="text-white flex items-center space-x-4">
            <li className=" hover:text-amber-500/60 ease-in duration-200">
              <Link
                href="https://www.facebook.com/KahuakIndumentaria"
                target="_blank"
              >
                <FiFacebook size={20} />
              </Link>
            </li>
            {/* <li className=" hover:text-amber-500/60 ease-in duration-200">
              <Link
                href="https://www.instagram.com/kahuakindumentaria"
                target="_blank"
              >
                <AiOutlineInstagram size={20} />
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      <div
        className={
          shadow
            ? urlActual == '/productos'
              ? 'bg-zinc-900/95 p-5 md:px-20'
              : 'bg-zinc-900/60 ease-in-out duration-300 p-5 md:px-20'
            : 'p-5 md:px-20 '
        }
      >
        <div className="flex justify-between md:justify-around items-center ">
          <Link href="/">
            <Image
              width={70}
              height={60}
              alt="logo_kahuak"
              src="/img/logo.svg"
            />
          </Link>

          <nav>
            <ul className="text-white uppercase text-md gap-10 hidden md:flex">
              <Link href="/">
                <li
                  className={`${
                    urlActual === '/'
                      ? 'text-amber-500/70 cursor-pointer p-1'
                      : 'hover:text-amber-500/70 duration-200 cursor-pointer p-1'
                  }`}
                >
                  Inicio
                </li>
              </Link>
              <Link href="/productos">
                <li
                  className={`${
                    urlActual === '/productos'
                      ? 'text-amber-500/70 cursor-pointer p-1'
                      : 'hover:text-amber-500/70 duration-200 cursor-pointer p-1'
                  }`}
                >
                  Productos
                </li>
              </Link>
              <Link href="/empresa">
                <li
                  className={`${
                    urlActual === '/empresa'
                      ? 'text-amber-500/70 cursor-pointer p-1'
                      : 'hover:text-amber-500/70 duration-200 cursor-pointer p-1'
                  }`}
                >
                  Empresa
                </li>
              </Link>
              <Link href="/contacto">
                <li
                  className={`${
                    urlActual === '/contacto'
                      ? 'text-zinc-900 cursor-pointer p-1 bg-amber-500/70'
                      : 'hover:text-zinc-900 ease-in duration-200 cursor-pointer bg-amber-500/70 p-1 hover:scale-110  rounded-sm'
                  }
}`}
                >
                  Contacto
                </li>
              </Link>
            </ul>

            {/*Boton Hamburguesa*/}
            <button
              type="button"
              className="md:hidden flex text-xl text-white "
              onClick={handleShowMenu}
            >
              <AiOutlineMenu />
            </button>
          </nav>
        </div>

        {/*Menu Mobile*/}
        <div
          className={
            showMenu
              ? `md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-[100]`
              : ''
          }
        >
          <div
            className={
              showMenu
                ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-300 bg-[#ecf0f3] shadow-2xl ease-in-out duration-500 p-6 h-screen'
                : 'fixed left-[-100%] top-0 ease-out duration-500'
            }
          >
            <div className="flex justify-between items-center w-full p-4 ">
              <Link href="/">
                <img
                  width={70}
                  height={60}
                  alt="logo"
                  src="https://res.cloudinary.com/gonzalom22/image/upload/v1658499878/thumbnail_Kahuak_negro_ac18db9c1c.png"
                />
              </Link>
              <button
                onClick={handleShowMenu}
                className="rounded-full shadow-xl shadow-gray-400 p-2"
              >
                <AiOutlineClose />
              </button>
            </div>

            <div className="py-4 flex flex-col">
              <ul className="mt-10 uppercase">
                <Link href="/">
                  <li
                    onClick={handleShowMenu}
                    className="py-5 text-sm hover:text-amber-500/70 duration-300 border-b border-gray-200 cursor-pointer"
                  >
                    Inicio
                  </li>
                </Link>
                <Link href="/productos">
                  <li
                    onClick={handleShowMenu}
                    className="py-5 text-sm hover:text-amber-500/70 duration-300 border-b border-gray-200 cursor-pointer"
                  >
                    Productos
                  </li>
                </Link>
                <Link href="/empresa">
                  <li
                    onClick={handleShowMenu}
                    className="py-5 text-sm hover:text-amber-500/70 duration-300 border-b border-gray-200 cursor-pointer"
                  >
                    Empresa
                  </li>
                </Link>
                <Link href="/contacto">
                  <li
                    onClick={handleShowMenu}
                    className="py-5 text-sm hover:text-amber-500/70 duration-300 border-b border-gray-200 cursor-pointer"
                  >
                    Contacto
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
