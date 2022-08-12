/* img */
import dashboard from '../../assets/img/dashboard.png'
import HomeApresentation from '../molecules/HomeApresentation'

const HomeDashboardApresentation = () => {
  return (
    <div className="w-full md:px-16 px-4">
    <HomeApresentation number="01" text="Dashboard para verificar as atividades da loja" imageSrc={dashboard} />
    </div>
  )
}

export default HomeDashboardApresentation