import { Link } from "react-router-dom"

/* context */
import { UseCategories } from '../../contexts/CategoriesContext'

/* component */
import ProductItem from "../molecules/ProductItem"

const CategoryProduct = () => {
  const { categoriesList } = UseCategories()

  return (
    <>{ 
      categoriesList.map( category =>(
        <Link to={`${category.categoryName}`} key={category.categoryName} className="drop-shadow-xl rounded-xl overflow-hidden">
          <ProductItem categoryName={category.categoryName} bgColor={category.bgColor} icon={category.icon} />
        </Link>
        )
      )
    }
    </>
  )
}

export default CategoryProduct