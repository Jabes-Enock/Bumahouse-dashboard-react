import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

/* firestore connection */
import { db } from '../../services/firebase/config'

/* firestorage methods */
import { doc, getDoc, deleteDoc } from 'firebase/firestore'
import { MdOutlineDelete } from 'react-icons/md'

const DeleteProductTemplate = () => {
  const [product, setProduct] = useState('')
  /* const { id, category } = useParams() */
  const { id, category } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getProductData = async () => {
      try {
        const docRef = doc(db, category, id)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setProduct(docSnap.data())
          
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!')
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    getProductData()
  }, [])

  const handleDeleteProduct = async () => {
    try {
      const userDoc = doc(db, category , id)
      await deleteDoc(userDoc)
      navigate(`/produtos/${category}`)
      console.log('Excluido')
    } catch (error) {
      console.log('ops')
    }
    
  }

  return (
    <>
    {product ?
      <div className="px-8 space-y-8 max-w-full">
        <p className="md:text-3xl text-2xl text-gray-600 mt-8 md:mt-0">
          Deletando produto <span className="text-orange-500">{id}</span> 
        </p>
        <div className="md:drop-shadow-2xl bg-white md:p-8 rounded-xl">
          <div className="space-y-8 grid md:grid-cols-2">
            <div>
              <p className="font-bold">Nome do produto:</p>
              <p>{product.productName}</p>
            </div>
            <div>
              <p className="font-bold">Descrição</p>
              <p>{product.productDescription}</p>
            </div>
            <div>
              <p className="font-bold">Preço</p>
              <p> R$ {(product.productPrice).toFixed(2)}</p>
            </div>
            <div>
              <p className="font-bold">Foto</p>
              <img className="w-40 h-auto" src={product.productImageUrl} alt='Foto do produto'/>
            </div>
          </div>
          <button
            type="submit"
            className="md:w-52 w-full mt-12  text-white bg-red-600 hover:bg-red-800  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center "
            onClick={handleDeleteProduct}
          >
            <MdOutlineDelete size={30} />
            <p className="ml-2 p-2 text-md">Excluir produto</p>
          </button>
        </div>
      </div>:
      <p>Houve algum problema</p>

    }
    </>
  )
}

export default DeleteProductTemplate