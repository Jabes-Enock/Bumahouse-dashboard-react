import { useParams } from 'react-router-dom'

/* component */
import Table from '../organism/Table'

const CategoryTemplate = () => {
  const { category } = useParams()

  return (
    <div className="px-8 space-y-8">
      <div className="md:mb-12 mt-4 md:mt-12  px-4 md:px-0">
        <p className="md:text-4xl text-2xl capitalize text-gray-600">{category}</p>
      </div>
      <Table />
    </div>
  )
}

export default CategoryTemplate
