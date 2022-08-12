/* component */
import CategoryProduct from '../organism/CategoryProduct'

const ProductsTemplate = () => {
  return (
    <div className="px-8 space-y-8 mt-8">
      <p className="md:text-3xl text-2xl text-gray-600">
        Ver Produtos
      </p>
      <div>
        <p className="text-xl pt-4 pb-2 mb-4 text-gray-600 border-b">Selecione a categoria que deseja ver.</p>
        <div className="h-full pb-8 grid lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-2 gap-8">
        <CategoryProduct />
        </div>
      </div>
    </div>
  )
}

export default ProductsTemplate
