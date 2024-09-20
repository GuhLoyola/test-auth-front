import { Link } from "react-router-dom"
import Button from "../../components/button/Button"
import Card from "../../components/card/Card"
import { UserService } from "../../services/user.service"
import { IUser } from "../../interfaces/IUser"
import { useState } from "react"

const Register = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')



    const handleCreate = async (e: any) => {
        e.preventDefault();
        
        const request: IUser = {
            email,
            password
        };

        try {
            const response = await UserService.create(request)

            console.log('Added User: ', response);

        } catch (error) {
            console.log('Erro ao cadastrar usuário');
            
        }
    }


    return (
        <div className="bg-gray-300 min-w-full h-screen flex justify-center items-center">
            <Card title={'Crie sua conta'}>
                <form className="flex flex-col gap-5" onSubmit={handleCreate}>
                    <input type="text" placeholder="Email" value={email} className="py-3 px-7 bg-gray-200 rounded" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Senha" value={password} className="py-3 px-7 bg-gray-200 rounded" onChange={(e) => setPassword(e.target.value)}/>

                    <Button type='submit'>Criar conta</Button>

                    <Link to='/' className="text-center text-sm underline text-purple-500 mb-3">
                        Já tem uma conta?
                    </Link>
                </form>
            </Card>
        </div>
    )
}

export default Register