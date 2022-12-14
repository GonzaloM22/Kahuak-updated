import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const IndumentariaContext = createContext();

const IndumentariaProvider = ({ children }) => {
  const [trabajos, setTrabajos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState([]);
  const [modal, setModal] = useState(false);

  const getTrabajos = async () => {
    const { data } = await axios('/api/trabajos');

    setTrabajos(data);
  };

  const getProductos = async () => {
    const { data } = await axios('/api/productos');

    setProductos(data);
  };

  useEffect(() => {
    getTrabajos();
    getProductos();
  }, []);

  const handleChangeModal = (producto) => {
    setProducto(producto);
    setModal(!modal);
  };

  return (
    <IndumentariaContext.Provider
      value={{ productos, trabajos, modal, producto, handleChangeModal }}
    >
      {children}
    </IndumentariaContext.Provider>
  );
};

export { IndumentariaProvider };

export default IndumentariaContext;
