import bag from '../../assets/img/bag.svg'

const LoginFormBrand = () => {
  return (
    <div className="bg-gray-100 p-10 h-full">
          <p className='text-bold text-center'>
            <span className="text-5xl text-blue-400">B</span>
            <span className=" text-blue-400">u</span>
            <span className="text-xl text-orange-400">M</span>
            <span className="text-xl text-orange-400">a</span>
            <span className="text-3xl text-gray-400">H</span>
            <span className=" text-gray-400">ouse</span>
          </p>
          <p className="text-lg text-center text-gray-400">Admin System</p>

          <div className="grid place-items-center my-8">
            <div className="m-center w-20 h-20 md:w-40 md:h-40 p-2 md:p-8 grid place-items-center rounded-full bg-white">
              <img src={bag} className='w-14 md:w-24' alt="bag" />
            </div>
          </div>
          <p className="text-gray-500">Bem-vindo ao painel de controle.</p>
        </div>
  )
}

export default LoginFormBrand