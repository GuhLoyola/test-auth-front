import { Link, useNavigate } from "react-router-dom"
import Button from "../button/Button"
import Card from "../card/Card"
import { useState } from "react"
import { AuthService } from "../../services/auth.service"
import { useAuth } from "../contexts/AuthProvider/useAuth"

const Login = () => {


  const { authenticate } = useAuth();
  const navigate = useNavigate();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');

  const handleSubmit = async (e: any) => {
      
    e.preventDefault();

    if(!email || !password) {
      setError('Por favor, preencha todos os campos')
      return
    }

    try {
      const authentication = await AuthService.signin(email, password);

      authenticate(authentication)

      setError('')    



      navigate('/dashboard')
      
    } catch (error) {
        setError('Erro no login, verifique as credenciais.')

        throw error
        
    }
  };

  return (
    <div className="bg-gray-300 min-w-full h-screen flex justify-center items-center">
      <Card title={'Entre na sua conta'}>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} className="py-3 px-7 bg-gray-200 rounded" 
          onChange={(e) => setEmail(e.target.value)} required/>
          <input type="password" placeholder="Senha" value={password} className="py-3 px-7 bg-gray-200 rounded" 
          onChange={(e) => setPassword(e.target.value)} required/>

          <Link to='#' className="text-sm underline text-purple-500">
            Esqueceu a senha?
          </Link>

          { error && <p className="text-red-500 text-sm">{error}</p>}

          <Button>Entrar</Button>

          <Link to='/register' className="text-center text-sm underline text-purple-500 mb-3">
            Ainda não tem uma conta?
          </Link>
        </form>
      </Card>
    </div>
  )
}

export default Login