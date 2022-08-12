/* component */
import DashboardCategoryGroup from "../organism/DashboardCategoryGroup"

const DashboardTemplate = () => {
  return (
    <div className="px-8 space-y-8 mt-8">
      <p className="md:text-3xl text-2xl text-gray-600">
        Dashboard
      </p>
      <div>
        <p className="text-xl pt-4 pb-2 mb-4 text-gray-600 border-b">Categorias</p>
        <div className="h-full pb-8 grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
          <DashboardCategoryGroup />
        </div>
      </div>
      <div>
        <p className="text-xl pt-4 pb-2 mb-4 text-gray-600 border-b">Gráficos</p>
        <div className="h-full pb-8 grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
          Graficos
        </div>
      </div>
    </div>
  )
}

export default DashboardTemplate
