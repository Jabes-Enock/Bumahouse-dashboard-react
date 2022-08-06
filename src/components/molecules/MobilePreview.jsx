
/* style */
import './mobilePreview.css'
/* icons */
import {  MdMenu, MdSearch, MdShoppingCart } from 'react-icons/md'

const MobilePreview = (props) => {

    return (
        <div className='mobile-preview w-[240px] h-[500px] border-[12px] overflow-y-auto border-gray-800 rounded-3xl pb-8'>
            <div className='w-full h-16 bg-blue-600 p-4'>
                <nav className='flex justify-between'>
                    <MdMenu  size={20} color={'white'} />
                    <div className='flex space-x-2'>
                        <MdSearch  size={20} color={'white'} />
                        <MdShoppingCart size={20} color={'white'} />
                    </div>
                </nav>
                <p className='text-xs mt-2 text-white'>Endereço do cliente</p>
            </div>
            <div className='p-4 space-y-4 bg-white'>
                { props.title &&<div >{props.title}</div>}
                { !props.title &&<div className='w-full h-12 bg-gray-200 animate-pulse'></div>}

                {props.image && 
                <div className='h-[200px] flex justify-center'>
                    <img className='w-auto h-full' src={URL.createObjectURL(props.image) }  alt='Imagem selecionada' />
                </div>
                }
                {!props.image &&
                <div className='h-[200px] flex justify-center bg-gray-200 animate-pulse'></div>
                }


                {props.price && 
                <div className='text-2xl'>
                    <span>R$ </span>{props.price}
                </div>
                }
                { !props.price &&<div className='w-full h-12 bg-gray-200 animate-pulse'></div>}

                {props.quantity &&
                <div className='bg-gray-100 p-2 rounded-lg text-sm'><span>Quantidade: </span>{props.quantity}</div>
                }
                { !props.quantity &&<div className='w-full h-12 bg-gray-200 animate-pulse'></div>}

                {props.price &&
                <div className='w-full'>
                    <button type="button" className=" w-full text-white text-xs bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 ">Comprar agora</button>
                    <button type="button" className=" w-full text-blue-800 text-xs bg-blue-200 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-bold rounded-md px-5 py-2.5 mr-2 mb-2 ">Adicionar ao carrinho</button>
                </div>
                }

                {props.description &&
                <div className='text-sm break-words space-y-4'>
                    <span className='text-lg'> Sobre o produto</span>
                    <p className='text-sm'>{props.description}</p>
                </div>
                }
                { !props.description &&<div className='w-full h-20 bg-gray-200 animate-pulse'></div>}
            </div>

        </div>
    )
}

export default MobilePreview