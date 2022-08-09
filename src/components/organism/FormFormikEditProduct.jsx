import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

/* formik */
import { Formik, Form, ErrorMessage } from 'formik'

/* hook */
import { useUploadAndEditProduct } from '../../hooks/UseUploadAndUpdateProduct '

/* firestore connection */
import { db } from '../../services/firebase/config'

/* firestorage methods */
import { doc, getDoc, collection, updateDoc } from 'firebase/firestore'

/* icons */
import { MdOutlineEdit, MdOutlineUploadFile } from 'react-icons/md'

/* validation */
import { productSchema } from '../../validation/ProductValidation'

/* components */
import ProgressBar from '../atoms/ProgressBar'
import SuccessAlert from '../atoms/SuccessAlert'
import InputFormik from '../molecules/InputFormik'
import TextAreaFormik from '../molecules/TextAreaFormik'

const EditProductForm = () => {
  const [product, setProduct] = useState('')

  const {
    percentageOfUpload,
    requisitionStatus,
    setRequisitionStatus,
    uploadProductToFirebase,
  } = useUploadAndEditProduct()
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
          onSubmit={(values) => {
            const insertDatasUpdate = async () => {
              try {
                const date = new Date()
                const productsCollectionRef = collection(
                  db,
                  values.productCategory
                )
                const data = {
                  productName: values.productName,
                  productDescription: values.productDescription,
                  productPrice: Number(values.productPrice),
                  productQuantity: Number(values.productQuantity),
                  productImageUrl: values.productImage,
                  update_at: `${date.getDate()}/${(date.getMonth()) + 1}/${date.getFullYear()} at ${date.getHours()}: ${date.getMinutes()}`,
                }
                const productDoc = doc(productsCollectionRef, id)
                await updateDoc(productDoc, data)
                setRequisitionStatus('success')
                return
              } catch (error) {
                setRequisitionStatus('error')
                return error
              }
            }

            values.productImage.name
              ? uploadProductToFirebase(
                  values,
                  `produtos/${values.productCategory}/${values.productImage.name}`,
                  id
                )
              : insertDatasUpdate()
          }}
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

              {/* Image field */}
              <div>
                {!values.productImage.name ? (
                  <p className="text-gray-600 text-md mb-2">Imagem atual</p>
                ) : (
                  <p className="text-gray-600 text-md mb-2">
                    Essa nova imagem será adicionada.
                  </p>
                )}
                <div className="grid sm:grid-cols-2 place-items-center h-[200px] border rounded-xl overflow-hidden">
                  <div className="bg-gray-50 h-full w-full grid place-items-center">
                    {!values.productImage.name ? (
                      <img
                        className="w-40 h-40"
                        src={values.productImage}
                        alt="Imagem selecionada"
                      />
                    ) : (
                      <div className="h-[200px] flex justify-center">
                        <img
                          className="w-auto h-full"
                          src={URL.createObjectURL(values.productImage)}
                          alt="Imagem selecionada"
                        />
                      </div>
                    )}
                  </div>
                  <label
                    htmlFor="productImage"
                    className="cursor-pointer grid place-items-center text-blue-500 hover:text-gray-100 bg-gray-200 hover:bg-blue-500 h-full w-full p-6"
                  >
                    <MdOutlineUploadFile size={60} />
                    <p className="">Trocar imagem</p>
                    <input
                      id="productImage"
                      name="productImage"
                      type="file"
                      className="hidden"
                      onChange={(event) =>
                        setFieldValue(
                          'productImage',
                          event.currentTarget.files[0]
                        )
                      }
                    />

                    <ErrorMessage
                      component={'p'}
                      name="productImage"
                      className="text-xs text-red-600 mt-2"
                    />
                  </label>
                </div>
              </div>
              <Requisition status={requisitionStatus} />

            </Form>
          )}
        </Formik>
      )}
    </>
  )
}

export default EditProductForm
