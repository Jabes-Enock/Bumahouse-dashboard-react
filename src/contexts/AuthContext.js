import { createContext, useContext, useEffect, useState } from 'react'

/* Auth methods from firebase */
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

/* import auth and provider*/
import { auth, provider } from '../services/firebase/config'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const isAuth = onAuthStateChanged(auth, (currentUser) =>
      setCurrentUser(currentUser)
    )
    return () => isAuth()
  }, [])

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)
  const signInEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)
  const signIn = () => signInWithPopup(auth, provider)
  const logout = () => signOut(auth)

  return (
    <AuthContext.Provider
      value={{
        createUser,
        signIn,
        signInEmailAndPassword,
        currentUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => useContext(AuthContext)
