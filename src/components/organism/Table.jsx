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

/* icons */
import { FcEmptyTrash, FcSynchronize } from 'react-icons/fc'

const Table = () => {
  
  const [products, setProducts] = useState([])
  const { category } = useParams()

  useEffect(() => {
    const getDatas = async () => {
      const  categoryCollectionRef = collection(db, category)
      try {
       
        const data = await getDocs(categoryCollectionRef)
        const values = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        setProducts(values)
       
      } catch (error) {
        console.log(error.message)
      }
    }
   getDatas()
  }, [])


  const RequestStatus = () => {
    return(
      <div className="w-full h-full bg-white px-8 py-16 flex flex-col md:flex-row  md:gap-4 sm:gap-y-8 text-center">
        <div className="w-full grid place-items-center">
          <p>Nenhum produto cadastrado nessa categoria.</p>
          <FcEmptyTrash size={200} />
        </div>
        <div className="self-center text-6xl text-blue-500">Ou</div>
        <div className="w-full grid place-items-center  ">
          <p>Conexão inválida</p>
          <FcSynchronize size={200} />
        </div>
      </div>
    )
  }

  return (
    <div className="drop-shadow-2xl overflow-x-auto rounded-xl">
      {products.length > 0 ?
        <table className="w-full min-w-[600px] text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
          <TableHead />
          <TableBody values={products} />
        </table>:
        <RequestStatus />
      }
    </div>
  )
}

export default Table