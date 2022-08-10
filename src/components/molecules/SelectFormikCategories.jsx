import { ErrorMessage, useField } from 'formik'

/* context */
import { UseCategories } from '../../contexts/CategoriesContext'

const SelectFormik = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  const { categoriesList } = UseCategories()

  return (
    <div className="space-y-2">
      <label
        htmlFor={`${field.name}`}
        className={`text-gray-700 ${
          meta.touched && meta.error && 'text-red-600'
        }`}
      >
        {label}
      </label>
      <select
        name={field.name}
        id={field.name}
        {...field}
        {...props}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
      >
        {categoriesList.map((category) => (
          <option key={category.categoryName} value={category.categoryName}>
            {category.categoryName}
          </option>
        ))}
      </select>
      <ErrorMessage
        component={'p'}
        name={field.name}
        className="text-xs text-red-600"
      />
    </div>
  )
}

export default SelectFormik
