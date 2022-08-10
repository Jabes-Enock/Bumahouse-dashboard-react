import { useParams } from 'react-router-dom'

/* component */
import FormFormikEditProduct from '../organism/FormFormikEditProduct'

const EditProductTemplate = () => {
const { id } = useParams()

  return (
    <div className="px-8 space-y-8">
      <p className="md:text-3xl text-2xl text-gray-600 mt-8 md:mt-0">
        Editando produto <span className="text-orange-500">{id}</span> 
      </p>
      <div className="md:drop-shadow-2xl bg-white md:p-8 rounded-xl">
        <FormFormikEditProduct/>
      </div>
    </div>
  )
}

export default EditProductTemplate
