/* component */
import CategoryProduct from '../organism/CategoryProduct'

const ProductsTemplate = () => {
  return (
    <div className="px-8 space-y-8">
      <p className="md:text-3xl text-2xl text-gray-600 mt-8 md:mt-0">
        Selecione a categoria que deseja ver.
      </p>
      <div className="h-full pb-8 grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
        <CategoryProduct />
      </div>
    </div>
  )
}

export default ProductsTemplate
