import { useParams } from 'react-router-dom'

/* component */
import ArrowBack from '../atoms/ArrowBack'
import FormFormikEditProduct from '../organism/FormFormikEditProduct'

const EditProductTemplate = () => {
const { id, category } = useParams()

  return (
    <div className="px-8 space-y-8 mt-8">
      <div className="flex items-center space-x-4">
        <ArrowBack path={`/produtos/${category}`} />
        <p className="md:text-3xl text-2xl text-gray-600">
          Editar 
        </p>
      </div>
      <p className="text-xl pt-4 pb-2 mb-4 text-gray-600 border-b">ID do produto: <span className="text-orange-500">{id}</span>
        </p>
      <div className="md:drop-shadow-2xl bg-white md:p-8 rounded-xl">
        <FormFormikEditProduct/> 
      </div>
    </div>
  )
}

export default EditProductTemplate
