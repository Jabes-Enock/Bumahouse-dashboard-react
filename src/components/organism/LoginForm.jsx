/* components */
import LoginFormInputs from '../molecules/LoginFormInputs'
import LoginFormBrand from '../molecules/LoginFormBrand'

const LoginForm = () => {
  const formStyle =
    'md:shadow-2xl bg-white overflow-hidden sm:rounded-xl md:w-[600px] md:grid md:grid-cols-2 md:place-items-center'
  return (
    <form className={formStyle}>
      <LoginFormBrand />
      <LoginFormInputs />
    </form>
  )
}

export default LoginForm
