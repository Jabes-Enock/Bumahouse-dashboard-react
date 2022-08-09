/* context */
import { AuthContextProvider } from './contexts/AuthContext'
import { CategoriesContextProvider } from './contexts/CategoriesContext'

/* router */
import Routes from './router/routes'

/* style */
import './assets/css/style.css'
import './index.css'

const App = () => {
  return (
    <AuthContextProvider>
      <CategoriesContextProvider>
        <Routes />
      </CategoriesContextProvider>
    </AuthContextProvider>
    
  );
}

export default App;
