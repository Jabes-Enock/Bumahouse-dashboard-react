import { createContext, useContext, useState } from "react"

/* icons */
import { 
  MdBackupTable, 
  MdVerticalSplit, 
  MdOutlineFlashOn, 
  MdWaves,
  MdStackedBarChart,
  MdViewQuilt,
  MdWaterDrop
} from 'react-icons/md'

const CategoriesContext = createContext()

export const CategoriesContextProvider = ({children}) => {

  const categories = [
    {
      categoryName: 'elétrica',
      bgColor: 'bg-gradient-to-r from-yellow-400 to-orange-500 border rounded-xl text-white hover:scale-105 ease-in-out duration-300',
      icon: <MdOutlineFlashOn />
    },
    {
      categoryName: 'alvenaria',
      bgColor: 'bg-gradient-to-r from-red-500 to-red-800 border rounded-xl text-white hover:scale-105 ease-in-out duration-300',
      icon: <MdBackupTable />
    },
    {
      categoryName: 'hidráulica',
      bgColor: 'bg-gradient-to-r from-blue-400 to-blue-800 border rounded-xl text-white hover:scale-105 ease-in-out duration-300',
      icon: <MdWaves />
    },
    {
      categoryName: 'madeira',
      bgColor: 'bg-gradient-to-r from-orange-400 to-orange-800 border rounded-xl text-white hover:scale-105 ease-in-out duration-300',
      icon: <MdStackedBarChart />
    },
    {
      categoryName: 'tintas',
      bgColor: 'bg-gradient-to-r from-rose-400  to-rose-800 border rounded-xl text-white hover:scale-105 ease-in-out duration-300',
      icon: <MdWaterDrop />
    },
    {
      categoryName: 'pisos',
      bgColor: 'bg-gradient-to-r from-slate-400 to-slate-800 border rounded-xl text-white hover:scale-105 ease-in-out duration-300',
      icon: <MdViewQuilt />
    },
    {
      categoryName: 'ferragem',
      bgColor: 'bg-gradient-to-r from-amber-500 to-amber-800 border rounded-xl text-white hover:scale-105 ease-in-out duration-300',
      icon: <MdVerticalSplit />
    },
  ]

  const [categoriesList, setCategories] = useState(categories)
  return(
    <CategoriesContext.Provider value={{categoriesList, setCategories}}>
      {children}
    </CategoriesContext.Provider>
  )
}

export const UseCategories = () => useContext(CategoriesContext)