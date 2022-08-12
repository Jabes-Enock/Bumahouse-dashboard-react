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
        <Link to={`${category.categoryName}`} key={category.categoryName} className="drop-shadow-xl">
          <ProductItem categoryName={category.categoryName} bgColor={category.bgColor} icon={category.icon} />
        </Link>
        )
      )
    }
    </>
  )
}

export default CategoryProduct