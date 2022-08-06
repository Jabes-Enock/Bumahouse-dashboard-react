import { BrowserRouter ,Routes, Route, Navigate  } from 'react-router-dom'

/* context */
import { UserAuth } from "../contexts/AuthContext"

/* pages */
import Login from '../pages/Login'
import Home from '../pages/Home'
import LayoutDashboard from '../layout/LayoutDashboard'
import Dashboard from '../pages/Dashboard'
import Products from '../pages/Products'
import CreateProduct from '../pages/CreateProduct'

const App = () => {
  const { currentUser } = UserAuth()
 
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        {!currentUser &&
          <Route path='login' element={<Login />} />
        }
        {currentUser &&
          <Route path='/'  element={<LayoutDashboard />} >
            <Route path='dashboard' element={<Dashboard/>} />
            <Route path='produtos'  element={<Products />} />
            <Route path='adicionar-produto'  element={<CreateProduct/>} />
          </Route>
        }
        <Route path='*' element={<Navigate to={ currentUser? 'dashboard' : 'login'} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App