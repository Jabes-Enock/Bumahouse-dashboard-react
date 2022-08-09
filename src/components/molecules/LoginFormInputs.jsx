import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/* context */
import { UserAuth } from '../../contexts/AuthContext'

/* components */
import AlertMessage from '../atoms/AlertMessage'
import Spinner from '../atoms/Spinner'

const LoginFormInputs = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [requestStateEmailAndPassword, setRequestStateEmailAndPassword] =
    useState(false)
  const [requestStateWithGoogle, setRequestStateWithGoogle] = useState(false)

  const { signIn, signInEmailAndPassword, toggleAuth } = UserAuth()
  const navigate = useNavigate()

  const handleEmailAndPassword = async () => {
    setRequestStateEmailAndPassword(true)
    try {
      await signInEmailAndPassword(email, password)
      toggleAuth()
      navigate('dashboard')
      setRequestStateEmailAndPassword(false)
      setError('')
    } catch (error) {
      if (error.code === 'auth/network-request-failed') {
        setError('Sem conexão com internet.')
      } else if (error.code === 'auth/user-not-found') {
        setError('Usuário não encontrado.')
      } else {
        setError('Email ou senha inválida')
      }
      setRequestStateEmailAndPassword(false)
    }
  }

  const handleSigInWithGoogle = async () => {
    setRequestStateWithGoogle(true)
    try {
      await signIn()
      toggleAuth()
      navigate('dashboard')
      setRequestStateWithGoogle(false)
      setError('')
    } catch (error) {
      if (error.code === 'auth/network-request-failed') {
        setError('Sem conexão com internet.')
      } else {
        setError('Erro de autenticação.')
      }
      setRequestStateWithGoogle(false)
    }
  }

  /* style variables */
  const inputStyle =
    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-400'
  const gradientBg =
    'bg-gradient-to-tl from-rose-400 via-fuchsia-500 to-indigo-500'
  const hoverButton =
    'md:hover:text-fuchsia-500 md:hover: border md:hover:border-fuchsia-500  md:hover:from-white md:hover:to-white'

  return (
    <div className="p-10 h-full">
      <div className="mb-4">
        <label
          className="block text-gray-500 text-sm font-bold mb-2"
          htmlFor="username"
        >
          E-mail
        </label>
        <input
          className={`${inputStyle}`}
          type="email"
          placeholder="email@provedor.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-500 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Senha
        </label>
        <input
          className={`${inputStyle} `}
          id="password"
          type="password"
          placeholder="******************"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <div className="w-full mt-6 inline-flex justify-center">
            <AlertMessage message={error} />
          </div>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          className={`w-full flex justify-center text-white text-sm font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ${gradientBg} ${hoverButton} `}
          type="button"
          onClick={handleEmailAndPassword}
        >
          {!requestStateEmailAndPassword && 'Login'}
          {requestStateEmailAndPassword && <Spinner fill={'fill-rose-400'} />}
        </button>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          type="button"
          className="w-full  text-white bg-[#4285F4] hover:bg-blue-400  focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-[#4285F4]/55"
          onClick={handleSigInWithGoogle}
        >
          {!requestStateWithGoogle && (
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
          )}
          {!requestStateWithGoogle && 'Google'}
          {requestStateWithGoogle && <Spinner fill={'fill-blue-400'} />}
        </button>
      </div>
    </div>
  )
}

export default LoginFormInputs
