/* component */
import FormFormikCreateProduct from '../organism/FormFormikCreateProduct'

const CreateProductTemplate = () => {
  return (
    <div className="px-8 space-y-8 mt-8">
      <p className="md:text-3xl text-2xl text-gray-600">
        Adicionar produto
      </p>
      <div>
        <p className="text-xl pt-4 pb-2 mb-4 text-gray-600 border-b">Crie um novo produto para sua loja.</p>
        <div className="md:drop-shadow-2xl bg-white md:p-8 rounded-xl">
        <FormFormikCreateProduct />
      </div>
      </div>
    </div>
  )
}

export default CreateProductTemplate
