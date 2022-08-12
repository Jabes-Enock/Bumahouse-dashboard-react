import { useNavigate } from 'react-router-dom'

/* img */
import dashboard from '../../assets/img/dashboard.png'
import adicionar_produto from '../../assets/img/adicionar_produto.png'
import ver_produtos from '../../assets/img/ver_produtos.png'

/* componentes */
import Logo from '../atoms/Logo'
import HomeApresentation from '../molecules/HomeApresentation'
import HomeApresentation2 from '../molecules/HomeApresentation2'
import Footer from '../molecules/Footer'

const HomeTemplate = () => {
  const navigate = useNavigate()
  return (
    <div className="max-w-screen min-h-screen bg-gray-800 grid grid-cols-1 md:grid-cols-3 justify-between gap-x-10 gap-y-32 md:gap-x-8 pt-32">
      <menu className="fixed z-10 top-0 left-0 flex justify-between right-0 md:px-20 p-4 bg-gray-800 shadow-2xl">
        <Logo />
        <button
            type="button"
            className="md:w-52 focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            onClick={() => navigate('/login')}
          >
           login
          </button>
      </menu>
      <div className="col-span-3">
        <div className="w-full md:px-16 px-4">
          <div className="text-center space-y-4">
            <p className="md:text-6xl text-3xl text-orange-500">BumaHouse</p>
            <p className="md:text-6xl text-3xl text-orange-500">Admin System</p>
            <p className="text-xl text-blue-500">Gerencie os produtos desse E-commerce de forma fácil.</p>
          </div>
        </div>
        <HomeApresentation number="01" text="Dashboard para verificar as atividades da loja." imageSrc={dashboard} />
        <HomeApresentation2 number="02" text="Filtre os produtos pela categoria." imageSrc={ver_produtos} />
        <HomeApresentation number="03" text="Adicione novos produtos de forma simples." imageSrc={adicionar_produto} />
        <Footer />
      </div>
    </div>
  )
}

export default HomeTemplate
