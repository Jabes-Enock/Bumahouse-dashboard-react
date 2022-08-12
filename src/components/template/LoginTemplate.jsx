/* components */
import LoginForm from '../organism/LoginForm'

const LoginTemplate = () => {
  return (
    <div
      className={`w-screen min-h-screen md:py-8 grid place-items-center bg-gray-800`}
    >
      <LoginForm />
    </div>
  )
}

export default LoginTemplate
