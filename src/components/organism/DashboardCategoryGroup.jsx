/* context */
import { UseCategories } from '../../contexts/CategoriesContext'
import CategoryCard from '../molecules/CategoryCard'

const DashboardCategoryGroup = () => {
  const { categoriesList } = UseCategories()

  return (
    <>
    {categoriesList.map( item => 
      <CategoryCard key={item.categoryName} icon={item.icon} categoryName={item.categoryName} bgColor={item.bgColor} /> )
    }
    </>
  )
}

export default DashboardCategoryGroup