

const ProductItem = ({bgColor, icon, categoryName}) => {
  return (
    <button className={`w-full ${bgColor} px-8 py-12 grid space-y-4 place-items-center text-whit`}>
      <div className='text-4xl'>{icon}</div>
      <div className='text-2xl'>{categoryName}</div> 
    </button>
  )
}

export default ProductItem