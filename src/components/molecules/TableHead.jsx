const TableHead = () => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="py-3 px-6 text-center">
          Foto
        </th>
        <th scope="col" className="py-3 px-6 text-center">
          Nome do produto
        </th>
        <th scope="col" className="py-3 px-6 text-center">
          Descrição
        </th>
        <th scope="col" className="py-3 px-6 text-center">
          Preço
        </th>
        <th scope="col" className="py-3 px-6 text-center">
          Quantidade
        </th>
        <th scope="col" className="py-3 px-6 text-center">
          Ações
        </th>
      </tr>
    </thead>
  )
}

export default TableHead
