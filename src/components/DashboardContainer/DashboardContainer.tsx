import { parseCookies } from "nookies";
import { DashboardService } from "../../services/dashboard.service";
import { Link } from "react-router-dom";
import { useCookie } from "../contexts/useCookie";

const DashboardContainer = () => {

  const [ emailCookie, clearEmailCookie ] = useCookie('email', null)

  const [ tokenCookie, clearTokenCookie ] = useCookie('token', null)

  const handleClick = async () => {

    try {
      const cookies = parseCookies()

      const email = cookies.email
      const token = cookies.token

      const dashboardData = await DashboardService.dashboard(email, token)

      console.log('Dados do dashboard: ', dashboardData);
    } catch (error) {
      console.log('Erro ao buscar dados do dashboard: ', error);

    }

  }

  const handleLogout = () => {
    clearEmailCookie('email');
    clearTokenCookie('token');
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-800 mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-purple-700">Card 1</h2>
            <p className="mt-4 text-gray-500">Conteúdo do card 1.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-purple-700">Card 2</h2>
            <p className="mt-4 text-gray-500">Conteúdo do card 2.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-purple-700">Card 3</h2>
            <p className="mt-4 text-gray-500">Conteúdo do card 3.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-purple-700">Card 4</h2>
            <p className="mt-4 text-gray-500">Conteúdo do card 4.</p>
          </div>
        </div>

        <div className="flex flex-col text-center">

          <button onClick={handleClick} className="mt-6 bg-purple-700 text-white py-2 px-4 rounded">
            Testar /GET de dashboard
          </button>

          <Link to='/' onClick={handleLogout} className="mt-6 bg-purple-700 text-white py-2 px-4 rounded">
            Voltar para tela inicial
          </Link>

        </div>
      </div>
    </div>
  );
};

export default DashboardContainer;