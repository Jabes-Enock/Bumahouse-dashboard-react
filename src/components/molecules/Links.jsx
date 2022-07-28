import { NavLink } from 'react-router-dom'


/* icons  */
import {
    MdDashboard,
    MdFormatListBulleted,
    MdAddShoppingCart,
    MdOutlineAltRoute
} from 'react-icons/md'

const Links = ({ handleStateMenu }) => {

    const linksToNavigate = [
        {
            path: '/dashboard',
            icon: <MdDashboard size={20}/>,
            text: 'Dashboard'
        },
        {
            path: 'produtos',
            icon: <MdFormatListBulleted size={20}/>,
            text: 'Ver Produtos'
        },
        {
            path: 'adicionar-produto',
            icon: <MdAddShoppingCart size={20}/>,
            text: 'Adicionar Produto'
        },
        {
            path: 'Route_X',
            icon: <MdOutlineAltRoute size={20}/>,
            text: 'Route_X'
        },
        {
            path: 'Route_y',
            icon: <MdOutlineAltRoute size={20}/>,
            text: 'Route_y'
        },
        
    ]

    const style =  'w-100 flex space-x-4 p-4 pr-0 md:h-16 items-center md:hover:text-blue-400'
    const active =  'bg-gray-100'
    return (
        <>
            {
                linksToNavigate.map( link => (
                    <NavLink key={link.path} to={link.path}
                    className={({isActive}) => ( isActive ? `${style} ${active}` : `${style}`) }
                    onClick={() => {
                        if(window.innerWidth < 768) handleStateMenu()
                    } }>
                    <p >{link.icon}</p> 
                    <p className='text-sm'>{link.text}</p>
                    </NavLink>
                ))
            }
        </>
    )
}

export default Links