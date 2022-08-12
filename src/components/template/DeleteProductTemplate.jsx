import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

/* firestore connection */
import { db } from '../../services/firebase/config'

/* firestorage methods */
import { doc, getDoc, deleteDoc } from 'firebase/firestore'
import { MdOutlineDelete } from 'react-icons/md'

/* component */
import ArrowBack from '../atoms/ArrowBack'
import AlertsWithIcon from '../atoms/AlertMessage'

const DeleteProductTemplate = () => {
  const [product, setProduct] = useState('')
  const [error, setError] = useState('')
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
      const userDoc = doc(db, category, id)
      await deleteDoc(userDoc)
      navigate(`/produtos/${category}`)
    } catch (error) {
      setError(true)
    }
  }

  return (
      <div className="px-8 space-y-8 mt-8">
        <div className="flex items-center space-x-4">
          <ArrowBack path={`/produtos/${category}`} />
          <p className="md:text-3xl text-2xl text-gray-600">
            Deletar
          </p>
        </div>
        <p className="text-xl pt-4 pb-2 mb-4 text-gray-600 border-b">ID do produto: <span className="text-orange-500">{id}</span>
        </p>
        {product ? (
          <div className="md:drop-shadow-2xl bg-white md:p-8 rounded-xl">
            <div className="space-y-8 grid lg:grid-cols-2">
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
                <p> R$ {product.productPrice.toFixed(2)}</p>
              </div>
              <div>
                <p className="font-bold">Foto</p>
                <img
                  className="w-40 h-auto"
                  src={product.productImageUrl}
                  alt="Foto do produto"
                />
              </div>
            </div>
            {!error ?
              <button
                type="submit"
                className="md:w-52 w-full mt-12  text-white bg-red-600 hover:bg-red-800  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center "
                onClick={handleDeleteProduct}
              >
                <MdOutlineDelete size={30} />
                <p className="ml-2 p-2 text-md">Excluir produto</p>
              </button>:
              <div className='mt-8 max-w-52'>
                <AlertsWithIcon message={"Você não tem permissão para excluir."} />
              </div>
            }
          </div>
        ) : (
          <p>Houve algum problema</p>
        )}
      </div>
  )
}

export default DeleteProductTemplate
