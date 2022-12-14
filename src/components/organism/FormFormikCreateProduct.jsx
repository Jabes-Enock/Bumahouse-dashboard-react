import { Formik, Form, ErrorMessage } from 'formik'

/* hook */
import { useUploadAndCreateProduct } from '../../hooks/UseUploadAndCreateProduct'

/* icons */
import { MdOutlineUploadFile, MdSaveAlt } from 'react-icons/md'

/* validation */
import { productSchema } from '../../validation/ProductValidation'

/* components */
import ProgressBar from '../atoms/ProgressBar'
import AlertMessage from '../atoms/AlertMessage'
import SuccessAlert from '../atoms/SuccessAlert'
import InputFormik from '../molecules/InputFormik'
import TextAreaFormik from '../molecules/TextAreaFormik'
import MobilePreview from '../molecules/MobilePreview'
import SelectFormikCategories from '../molecules/SelectFormikCategories'
import SelectFormikUnidade from '../molecules/SelectFormikUnidade'

const FormFormik = () => {
  const { percentageOfUpload, requisitionStatus, uploadProductToFirebase } =
  useUploadAndCreateProduct()

  const Requisition = ({ status }) => {
    return (
      <>
        {(status === '' || status === 'success') && (
          <button
            type="submit"
            className="lg:row-start-2 row-start-3 lg:mt-20 md:w-52 w-full text-white bg-blue-500 hover:bg-blue-600  focus:outline-none font-medium rounded-lg text-sm  py-2.5 flex justify-center items-center"
          >
            <MdOutlineUploadFile size={30} />
            <p className="p-2 text-md">Adicionar produto</p>
          </button>
        )}
        {status === 'started' && (
          <ProgressBar percentage={percentageOfUpload} />
        )}
        {status === 'error' && <AlertMessage message={'Você não tem permissão para criar.'} />}
        {status === 'success' && (
          <>
            <SuccessAlert />
          </>
        )}
      </>
    )
  }

  return (
    <Formik
      initialValues={{
        productName: '',
        productDescription: '',
        productPrice: '',
        productUnit: 'unidade',
        productQuantity: '',
        productCategory: 'elétrica',
        productImage: null,
      }}
      validationSchema={productSchema}
      onSubmit={(values) =>
        uploadProductToFirebase(
          values,
          `produtos/${values.productCategory}/${values.productImage.name}`
        )
      }
    >
      {({ values, setFieldValue }) => (
        <div className="grid lg:grid-cols-4 lg:space-x-24 space-y-8">
          <Form className="space-y-8 md:col-span-2">
            <InputFormik
              label="Nome do produto, modelo e marca"
              name="productName"
              type="text"
            />
            <div className="flex space-x-4">
              <div className="flex-1">
                <InputFormik
                label="Preço do produto"
                name="productPrice"
                type="number"
              />
              </div>
              <div className="flex-1">
                <SelectFormikUnidade label="Unidade de medida" name="productUnit"/>
              </div>
              
            </div>
            <InputFormik
              label="Quantidade em estoque"
              name="productQuantity"
              type="number"
            />
            <SelectFormikCategories label="Categoria" name="productCategory" />
            <TextAreaFormik
              label="Descrição do produto"
              name="productDescription"
              type="text"
            />

            {/* Image field */}
            <div>
              <label
                htmlFor="productImage"
                className={`flex flex-col justify-center items-center w-full h-64 rounded-lg bg-gray-50 border-2 border-dashed cursor-pointer`}
              >
                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                  <MdSaveAlt size={62} color={'#ccc'} />
                  <div className="mb-2 grid place-items-center text-sm text-blue-500 space-y-4">
                    <div className="">Click para selecionar arquivo.</div>
                    <div className="">(JPEG, JPG, PNG, SVG)</div>
                    {values.productImage !== null &&
                      values.productImage !== '' && (
                        <div className="max-w-full truncate text-orange-500">
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
            </div>
            <Requisition status={requisitionStatus} />
          </Form>

          <div className="lg:col-start-3 md:col-start-1 md:col-span-2">
            <MobilePreview
              title={values.productName}
              image={values.productImage}
              price={values.productPrice}
              unit={values.productUnit}
              quantity={values.productQuantity}
              category={values.productCategory}
              description={values.productDescription}
            />
          </div>
        </div>
      )}
    </Formik>
  )
}

export default FormFormik
