import React, { useContext } from 'react';
import LoginContext from './LoginContext';

const Authenticator = ({ children }) => {
  const { isLoggedIn } = useContext(LoginContext);

  // Verifica se o usuário está logado
  if (!isLoggedIn) {
    // Redireciona para a página de login ou exibe uma mensagem de erro
    return <div>Você precisa estar logado para acessar esta página.</div>;
  }

  // Renderiza o conteúdo da página se o usuário estiver logado
  return <>{children}</>;
};

export default Authenticator;
