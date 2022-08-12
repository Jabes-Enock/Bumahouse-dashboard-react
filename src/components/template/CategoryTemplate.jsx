import { useParams } from 'react-router-dom'

/* component */
import ArrowBack from '../atoms/ArrowBack'
import Table from '../organism/Table'


const CategoryTemplate = () => {
  const { category } = useParams()

  return (
    <div className="px-8 space-y-8 mt-8">
      <div className="flex items-center space-x-4"> 
        <ArrowBack path={'/produtos'} />
        <p className="md:text-3xl text-2xl capitalize text-gray-600">{category}</p>
      </div>
      <div>
        <p className="text-xl pt-4 pb-2 mb-4 text-gray-600 border-b">Verifique em detalhes os produtos cadastrados.</p>
        <Table />
      </div>
    </div>
  )
}

export default CategoryTemplate
