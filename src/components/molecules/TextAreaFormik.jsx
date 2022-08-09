import { ErrorMessage, useField } from 'formik'

const TextAreaFormik = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="space-y-2">
      <label
        htmlFor={field.name}
        className={`text-gray-700 ${
          meta.touched && meta.error ? 'text-red-600' : null
        }`}
      >
        {label}
      </label>
      <textarea
        rows={10}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
          meta.touched && meta.error ? 'border-red-600' : null
        }`}
        {...field}
        {...props}
        id={field.name}
        autoComplete="off"
      />
      <ErrorMessage
        component={'p'}
        name={field.name}
        className="text-xs text-red-600"
      />
    </div>
  )
}

export default TextAreaFormik
