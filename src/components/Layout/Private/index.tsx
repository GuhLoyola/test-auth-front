import { parseCookies } from 'nookies';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateLayout = () => {
  const cookies = parseCookies();
  const token = cookies.token;

  // Se não houver token, redireciona para a página de login
  if (!token) {
    return <Navigate to='/signin' />;
  }

  // Se o token existir, renderiza o Outlet (as rotas privadas)
  return <Outlet />;
};

export default PrivateLayout;
