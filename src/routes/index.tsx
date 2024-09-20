import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/Auth/Login'
import NotFoundPage from '../pages/404Page'
import Dashboard from '../pages/Dashboard'
import PublicLayout from '../components/Layout/Public'
import PrivateLayout from '../components/Layout/Private'
import Register from '../pages/Register/Register'
import { useState } from 'react'
import { setupresponseInterceptor } from '../services/axios'
import { useAuth } from '../components/contexts/AuthProvider/useAuth'


const AppRoutes = () => {

    const { signout } = useAuth();
    const [ isLoaded, setIsLoaded ] = useState(false)

    if(!isLoaded) {
        setIsLoaded(true);
        setupresponseInterceptor(signout);
    }


    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<NotFoundPage />} />

                <Route element={<PublicLayout />}>
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Register />}/>
                </Route>

                <Route element={<PrivateLayout />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes