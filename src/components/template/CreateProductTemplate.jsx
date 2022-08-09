/* component */
import FormFormikCreateProduct from '../organism/FormFormikCreateProduct'

const CreateProductTemplate = () => {
  return (
    <>
      <div className="md:mb-12 mt-4 md:mt-12  px-4 md:px-0">
        <p className="md:text-4xl text-2xl text-gray-600">
          Adicione um novo produto a sua loja.
        </p>
      </div>
      <div className="md:pr-16 md:pl-16 bg-white h-full px-4 py-8 md:rounded-lg md:drop-shadow-2xl">
        <FormFormikCreateProduct />
      </div>
    </>
  )
}

export default CreateProductTemplate
