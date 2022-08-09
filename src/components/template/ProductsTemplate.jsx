/* component */
import CategoryProduct from '../organism/CategoryProduct'

const ProductsTemplate = () => {
  return (
    <>
      <div className="md:mb-12 mt-4 md:mt-12 md:ml-12  px-4 md:px-0">
        <p className="md:text-3xl text-2xl text-gray-600">
          Selecione a categoria que deseja ver.
        </p>
      </div>
      <div className="md:pr-16 md:pl-16 h-full px-4 pb-8 grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
        <CategoryProduct />
      </div>
    </>
  )
}

export default ProductsTemplate
