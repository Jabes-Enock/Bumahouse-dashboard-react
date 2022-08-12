import { Link } from 'react-router-dom'

/* icons */
import { MdArrowBack } from 'react-icons/md'

const ArrowBack = ({path}) => {
  return (
    <Link to={`${path}`} className="hover:text-orange-500 text-3xl w-12 h-12 border border-gray-800 hover:border-orange-500 grid place-items-center rounded-full" ><MdArrowBack/> </Link>
  )
}

export default ArrowBack