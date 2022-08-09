import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

/* formik */
import { Formik, Form, ErrorMessage } from 'formik'

/* hook */
import { useUploadProduct } from '../../hooks/UseUploadProduct'

/* firestore connection */
import { db } from '../../services/firebase/config'

/* firestorage methods */
import { doc, getDoc } from 'firebase/firestore'

/* icons */
import { MdOutlineEdit, MdOutlineUploadFile, MdSaveAlt } from 'react-icons/md'

/* validation */
import { productSchema } from '../../validation/ProductValidation'

/* components */
import ProgressBar from '../atoms/ProgressBar'
import SuccessAlert from '../atoms/SuccessAlert'
import InputFormik from '../molecules/InputFormik'
import TextAreaFormik from '../molecules/TextAreaFormik'

const EditProductForm = () => {
  const [product, setProduct] = useState('')
  
  const { percentageOfUpload, requisitionStatus, uploadProductToFirebase } =
    useUploadProduct()
  const { id, category } = useParams()

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

  const Requisition = ({ status }) => {
    return (
      <>
        {(status === '' || status === 'success') && (
          <button
            type="submit"
            className="w-52 text-white bg-blue-500 hover:bg-blue-600  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center"
          >
            <MdOutlineEdit size={30} />
            <p className="ml-2 p-2 text-md">Editar produto</p>
          </button>
        )}
        {status === 'started' && (
          <ProgressBar percentage={percentageOfUpload} />
        )}
        {status === 'error' && <p>Algo deu errado</p>}
        {status === 'success' && (
          <>
            <SuccessAlert />
          </>
        )}
      </>
    )
  }

  const Image = ({url}) => {
    return (
      <div>
        <p className="text-gray-600 text-md mb-2">Imagem atual</p>
        <div className="grid sm:grid-cols-2 place-items-center h-[200px] border rounded-xl overflow-hidden">
          <div className="bg-gray-50 h-full w-full grid place-items-center">
            <img
              className="w-40 h-40"
              src={url}
              alt="Imagem selecionada"
            />
          </div>
          <label className="grid place-items-center text-blue-500 bg-gray-200 h-full w-full p-6">
            <MdOutlineUploadFile size={60} />
          <button 
            className="w-full text-white bg-blue-500 hover:bg-blue-600  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center"
          >Trocar imagem</button>

          </label>
        </div>
        
      </div>
    )
  }

  return (
    <>
      {product && (
        <Formik
          initialValues={{
            productName: product.productName,
            productDescription: product.productDescription,
            productPrice: product.productPrice,
            productQuantity: product.productQuantity,
            productCategory: category,
            productImage: product.productImageUrl,
          }}
          validationSchema={productSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ values, setFieldValue }) => (
            <Form className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-28 gap-y-8">
              <InputFormik
                label="Nome do produto, modelo e marca"
                name="productName"
                type="text"
              />
              <InputFormik
                label="Preço do produto"
                name="productPrice"
                type="number"
              />
              <InputFormik
                label="Quantidade em estoque"
                name="productQuantity"
                type="number"
              />
              <p className="text-gray-600 text-xl">Categoria: {category}</p>
              <TextAreaFormik
                label="Descrição do produto"
                name="productDescription"
                type="text"
              />
              <Image url={values.productImage} />

              {/* Image field */}
              {/* <div>
              <label
                htmlFor="productImage"
                className={`flex flex-col justify-center items-center w-full h-64 rounded-lg bg-gray-50 border-2 border-dashed cursor-pointer`}
              >
                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                  <MdSaveAlt size={62} color={'#ccc'} />
                  <div className="mb-2 grid place-items-center text-sm text-blue-500 space-y-4">
                    <div className="">Click para selecionar arquivo.</div>
                    <div className="">(JPEG, JPG, PNG, SVG, Gif)</div>
                    {values.productImage !== null &&
                      values.productImage !== '' && (
                        <div className="max-w-full truncate my">
                          {values.productImage?.name}
                        </div>
                      )}
                  </div>
                </div>
              </label>
              <input
                id="productImage"
                name="productImage"
                type="file"
                className="hidden"
                onChange={(event) =>
                  setFieldValue('productImage', event.currentTarget.files[0])
                }
              />
              <ErrorMessage
                component={'p'}
                name="productImage"
                className="text-xs text-red-600 mt-2"
              />
            </div> */}
              <Requisition status={requisitionStatus} />
            </Form>
          )}
        </Formik>
      )}
    </>
  )
}

export default EditProductForm
