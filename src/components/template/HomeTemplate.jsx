import { useNavigate } from "react-router-dom"

const HomeTemplate = () => {

    const navigate = useNavigate()
    return (
        <>
            <div className="page-content">HomeTemplate
                <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={() => navigate('/auth')}
                >Login</button>
            </div>
        </>
      )
}

export default HomeTemplate
