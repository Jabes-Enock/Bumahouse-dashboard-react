
import { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"

import { UserAuth } from "../contexts/AuthContext"

/* components */
import Links from "../components/molecules/Links"
import Header from '../components/molecules/Header' 
import Logo from "../components/atoms/Logo"

/* icons */
import { MdLogout } from 'react-icons/md'

const LayoutDashboard = () => {

  const [open, setOpen] = useState(false)
  const handleState = () => setOpen(!open)

  const navigate = useNavigate()
  const { logout } = UserAuth()

  const handleLogout = async () => {
    await logout()
    navigate('home')
  }

  return (
    <div className='max-w-screen'>
      <Header handleStateMenu={handleState} />
      <div className="">
        <aside className={`z-10 bg-white ${open ? 'h-screen': 'h-0'}  md:h-full w-screen md:w-52 overflow-hidden duration-300 ease-in fixed top-0 left-0 overflow-y-auto`}>
          <div className="px-4 py-2 invisible md:visible"><Logo /></div>
          <Links handleStateMenu={handleState} />
          <button onClick={() => handleLogout()} className='mt-20 w-full flex space-x-4 items-center px-5 py-4 md:hover:text-red-600' >
            <MdLogout size={20} /> 
            <p className="text-sm">Sair</p>  
          </button>
        </aside> 
        <div className="relative left-0 right-0 top-16 md:pl-52 max-w-screen overflow-hidden bg-gray-100">
          <div className="p-4 min-h-full">
            <Outlet />
          </div>
        </div>
      </div>
      
    </div>
    

  )
}

export default LayoutDashboard