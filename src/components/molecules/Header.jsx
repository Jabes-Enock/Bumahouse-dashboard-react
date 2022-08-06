

/* icons */
import {
  MdMenu
} from 'react-icons/md'

/* atoms */
import Logo from "../atoms/Logo"

/* style */
import './Header.css'


/* context */
import { UserAuth } from "../../contexts/AuthContext"

const Header = ({ handleStateMenu }) => {

  const { currentUser } = UserAuth()
  
  return (
    <header className='header z-20 bg-white fixed top-0 md:left-52 left-0 right-0 h-16 px-4 flex justify-between items-center '>
      <div className='md:hidden'>
        <Logo size={20} />
      </div>
      <div className='hidden md:flex md:justify-between w-full items-right px-4'>
        <div className='flex space-x-2 items-center'>
          { !currentUser.photoURL === null  && <img src={currentUser.photoURL} alt='photoURL' className='max-w-8 max-h-8  rounded-full' /> }
          { !currentUser.displayName && <p>{currentUser.displayName}</p>}
        </div>
      </div>
      <button className='md:hidden' onClick={() => handleStateMenu()}>
        <MdMenu size={20} />
      </button>
    </header>
  )
}

export default Header