/* context */
import { AuthContextProvider } from './contexts/AuthContext'

/* router */
import Routes from './router/routes'

/* style */
import './assets/css/style.css'
import './index.css'

const App = () => {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
    
  );
}

export default App;
