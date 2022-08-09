/* components */
import LoginForm from '../organism/LoginForm'

const LoginTemplate = () => {
  const gradientBg =
    'bg-gradient-to-tl from-rose-400 via-fuchsia-500 to-indigo-500'
  return (
    <div
      className={`w-screen min-h-screen md:py-8 grid place-items-center ${gradientBg}`}
    >
      <LoginForm />
    </div>
  )
}

export default LoginTemplate
