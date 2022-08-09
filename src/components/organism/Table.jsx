import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

/* connection with cloud fireStorage */
import { db } from '../../services/firebase/config'

/* FireStorage methods */
import { 
  collection, 
  getDocs 
} from 'firebase/firestore'

/* component */
import TableHead from '../molecules/TableHead'
import TableBody from '../molecules/TableBody'

const Table = () => {
  
  const [products, setProducts] = useState([])
  const { category } = useParams()
  console.log(category)

  useEffect(() => {
    const getDatas = async () => {
      const  categoryCollectionRef = collection(db, category)
      try {
        const data = await getDocs(categoryCollectionRef)
        const values = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        console.log(values)
        setProducts(values)
      } catch (error) {
          console.log(error.message)
      }
    }
   getDatas()
  }, [])

  const NoProductRegister = () => {
    return(
      <div>
        <p>Nenhum produto cadastrado nessa categoria.</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto relative">
      {products.length > 0 ?
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
          <TableHead />
          <TableBody values={products} />
        </table>:
        <NoProductRegister />
      }
    </div>
  )
}

export default Table