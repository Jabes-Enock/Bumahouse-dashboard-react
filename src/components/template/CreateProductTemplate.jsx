/* component */
import FormFormikCreateProduct from '../organism/FormFormikCreateProduct'

const CreateProductTemplate = () => {
  return (
    <div className="px-8 space-y-8">
      <p className="md:text-3xl text-2xl text-gray-600">
        Adicione um novo produto a sua loja.
      </p>
      <div className="md:drop-shadow-2xl bg-white md:p-8 rounded-xl">
        <FormFormikCreateProduct />
      </div>
    </div>
  )
}

export default CreateProductTemplate
