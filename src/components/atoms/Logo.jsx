/* img logo */
import img from '../../assets/img/bag.svg'

const Logo = ({ size }) => {
  return (
    <div className="flex space-x-2 items-center">
      <img src={img} width="35" alt="bag" />
      <p>
        <span className="text-5xl text-blue-400">B</span>
        <span className=" text-blue-400">u</span>
        <span className="text-xl text-orange-400">M</span>
        <span className=" text-orange-400">a</span>
        <span className="text-3xl text-gray-400">H</span>
        <span className=" text-gray-400">ouse</span>
      </p>
    </div>
  )
}

export default Logo
