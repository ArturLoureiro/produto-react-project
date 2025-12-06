import { createContext } from 'react';

const ProdutoContext = createContext();

export const ProdutoProvider = ({ children, value }) => {
  
return (

<ProdutoContext.Provider value={value}>
{children}
</ProdutoContext.Provider>
);
};

export default ProdutoContext;