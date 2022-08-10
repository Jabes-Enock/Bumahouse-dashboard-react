import { Link } from 'react-router-dom'


/* icons */
import { 
  MdModeEdit,
  MdDelete
} from 'react-icons/md'

const TableBody = ({ values }) => {
  return (
    <tbody>
      {values.map((product, index) => (
        <tr key={index} className="bg-white border-b ">
          {product.productImageUrl && 
          <td className="min-h-full truncate flex justify-center p-4"> <img src={product.productImageUrl} alt="Imagem do produto" className="w-10 h-10"/></td>
          }
          {product.productName && 
          <td className="min-h-full truncate text-center p-4">{product.productName}</td>
          }
          {product.productDescription && 
          <td className="min-h-full truncate text-center p-4">{product.productDescription}</td>
          }
          {product.productPrice && product.productUnit &&
          <td className="min-h-full truncate text-center p-4">{(product.productPrice).toFixed(2)} / {product.productUnit}</td>
          }
          {product.productQuantity && 
          <td className="min-h-full truncate text-center p-4">{product.productQuantity}</td>
          }
          {product.productQuantity && 
          <td className="min-h-full truncate ">
            <div className=" text-center flex justify-evenly items-center">
              <Link to={`editar/${product.id}`} className='text-2xl text-green-600 hover:text-blue-600'><MdModeEdit/></Link>
              <Link to={`delete/${product.id}`} className='text-2xl text-red-600 hover:text-blue-600'><MdDelete/></Link>
            </div>
          </td>
          }
        </tr>
      ))
      }
    
    </tbody>
   
  )
}

export default TableBody

