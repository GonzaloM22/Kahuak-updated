import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/footer';
import Header from '../components/header';
import Modal from 'react-modal';
import useIndumentaria from '../hooks/useIndumentaria';
import ModalProducto from '../components/ModalProducto';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');

export default function Layout({ children, title = '' }) {
  const router = useRouter();
  const urlActual = router.asPath;

  const [icons, setIcons] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 500) {
        setIcons(true);
      } else {
        setIcons(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  const { modal } = useIndumentaria();
  return (
    <>
      <Head>
        <title>{`Kahuak Indumentaria - ${title}`}</title>
        <meta
          name="description"
          content="Venta de Indumentaria de Trabajo - Ropa de Trabajo"
        />
      </Head>

      <Header />
      {children}
      <Footer />

      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto />
        </Modal>
      )}

      <div
        className={
          icons
            ? `fixed p-4 bottom-0 right-0 z-[900] ease-in-out duration-700`
            : `fixed p-4 bottom-0 right-[-100px] z-[900] ease-out duration-700`
        }
      >
        <Link
          href="https://api.whatsapp.com/send?phone=5493516286538&text="
          target="_blank"
        >
          <BsWhatsapp
            size={52}
            className="text-green-500 my-3 cursor-pointer p-1 hover:scale-125 ease-in duration-300"
          />
        </Link>

        <Link href={urlActual}>
          <div className="bg-white rounded-full p-3 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp size={30} className="text-amber-500/70" />
          </div>
        </Link>
      </div>
    </>
  );
}
