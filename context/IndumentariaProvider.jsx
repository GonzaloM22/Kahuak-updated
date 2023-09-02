import { createContext, useState } from 'react';

const IndumentariaContext = createContext();

const IndumentariaProvider = ({ children }) => {
  const [trabajos, setTrabajos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState([]);
  const [modal, setModal] = useState(false);

  const getTrabajos = async (data) => {
    setTrabajos(data);
  };

  const getProductos = async (data) => {
    setProductos(data);
  };

  const handleChangeModal = (producto) => {
    setProducto(producto);
    setModal(!modal);
  };

  return (
    <IndumentariaContext.Provider
      value={{
        productos,
        trabajos,
        modal,
        producto,
        handleChangeModal,
        getProductos,
        getTrabajos,
      }}
    >
      {children}
    </IndumentariaContext.Provider>
  );
};

export { IndumentariaProvider };

export default IndumentariaContext;
