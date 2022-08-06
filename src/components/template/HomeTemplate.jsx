import { useNavigate } from "react-router-dom"

/* img */
import dashboard from '../../assets/img/dashboard.png'

/* componentes */
import Logo from '../atoms/Logo'

const HomeTemplate = () => {

    const navigate = useNavigate()
    return (
        <div className="w-screen min-h-screen white grid grid-cols-1 md:grid-cols-3 place-items-center md:px-20 md:gap-x-8">
            <menu className="fixed top-0 left-0 right-0 p-4 bg-white ">
                <Logo />

            </menu>
            <div className="space-y-8 md:col-span-1">
                <div className="space-y-4 text-blue-500">
                    <div className="text-6xl ">Gerencie</div>
                    <div className="text-3xl ">toda a sua aplicação com o AdminSystem</div>
                </div>
                <div className="">
                    <button type="button" class="w-52 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    onClick={() => navigate('/auth')}
                    >Fazer login</button>
                </div>
            </div>
            <div className="col-span-2 overflow-hidden rounded-lg drop-shadow-2xl">
                <div className="drop-shadow-2xl">
                    <img src={dashboard} alt='dashboard'/>
                </div>
            </div>
        </div>
      )
}

export default HomeTemplate
