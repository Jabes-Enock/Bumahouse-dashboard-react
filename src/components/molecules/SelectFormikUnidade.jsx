import { ErrorMessage, useField } from 'formik'


const SelectFormikUnidade = ({ label, ...props }) => {
  const [field, meta] = useField(props)

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
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2.5 outline-none"
      >
        <option key="unidade" value="unidade">unidade</option>
        <option key="peça" value="peça">peça</option>
        <option key="metro" value="metro">metro</option>
        <option key="metroQuadrado" value="m&#178;">m&#178;</option>
        <option key="litro" value="litro">Litro</option>
        <option key="metroCubico" value="m&#179;">m&#179;</option>
      </select>
      <ErrorMessage
        component={'p'}
        name={field.name}
        className="text-xs text-red-600"
      />
    </div>
  )
}

export default SelectFormikUnidade
