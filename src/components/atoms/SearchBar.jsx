import { useState } from "react"

/* icon */
import { MdSearch } from "react-icons/md"

const SearchBar = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    //Your logic goes here
    alert('Você buscou por: ' + search)
  }

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className=" text-gray-60 flex rounded-md overflow-hidden" >
        <label htmlFor="search" className="inset-y-0 left-0 flex items-center px-2 bg-gray-900">
          <MdSearch size={20} />
        </label>
        <input type="search" id="search"  className="w-full py-2 text-sm text-white bg-gray-900 pl-2 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Digite aqui o que você procura ..." autoComplete="on" 
        onChange={(e) => setSearch(e.target.value)}
        />
        
          <button type="submit" className=" text-white bg-gray-700 hover:bg-blue-800 rounded-tr-md rounded-br-md   font-medium text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Buscar
          </button>
      </div>
    </form>
  )
}

export default SearchBar
