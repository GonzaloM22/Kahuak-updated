import { useContext } from 'react';
import IndumentariaContext from '../context/IndumentariaProvider';

const useIndumentaria = () => {
  return useContext(IndumentariaContext);
};

export default useIndumentaria;
