import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center text-center p-5">
            <h1 className="text-xl text-slate-400 mb-5">Ops, não encontramos a página desejada!</h1>
            <p className="text-slate-500">
                Desculpe, não encontramos a página que você busca. Por favor,
                verifique o endereço ou retorne à página inicial.
            </p>

            <Link to='/' className="bg-purple-600 text-white mt-5 px-7 py-3 rounded-md hover:bg-purple-700 transition-all duration-500">
                Voltar para home
            </Link>
        </div>
    )
}

export default NotFoundPage