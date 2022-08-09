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
      bgColor: 'bg-gradient-to-r from-yellow-400 hover:from-white to-orange-500 hover:to-white border hover:border-blue-500 rounded-xl',
      icon: <MdOutlineFlashOn />
    },
    {
      categoryName: 'alvenaria',
      bgColor: 'bg-gradient-to-r from-red-500 hover:from-white to-red-800 hover:to-white border hover:border-blue-500 rounded-xl',
      icon: <MdBackupTable />
    },
    {
      categoryName: 'hidráulica',
      bgColor: 'bg-gradient-to-r from-blue-400 hover:from-white to-blue-800 hover:to-white border hover:border-blue-500 rounded-xl',
      icon: <MdWaves />
    },
    {
      categoryName: 'madeira',
      bgColor: 'bg-gradient-to-r from-orange-400 hover:from-white to-orange-800 hover:to-white border hover:border-blue-500 rounded-xl',
      icon: <MdStackedBarChart />
    },
    {
      categoryName: 'tintas',
      bgColor: 'bg-gradient-to-r from-rose-400  hover:from-white to-rose-800 hover:to-white border hover:border-blue-500 rounded-xl',
      icon: <MdWaterDrop />
    },
    {
      categoryName: 'pisos',
      bgColor: 'bg-gradient-to-r from-slate-400 hover:from-white to-slate-800 hover:to-white border hover:border-blue-500 rounded-xl',
      icon: <MdViewQuilt />
    },
    {
      categoryName: 'ferragem',
      bgColor: 'bg-gradient-to-r from-amber-500 hover:from-white to-amber-800 hover:to-white border hover:border-blue-500 rounded-xl',
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