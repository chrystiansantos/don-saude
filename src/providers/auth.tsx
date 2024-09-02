import { createContext, useContext, type PropsWithChildren } from 'react'
import { authenticate } from '../http/login'
import { useStorageState } from './hooks/useStorageState'

interface LoginProps {
  login: string
  password: string
}

interface AuthContextProps {
  signIn: (data: LoginProps) => Promise<void>
  signOut: () => void
  session?: string | null
  isLoading: boolean
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext)
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />')
    }
  }

  return value
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session')

  async function signIn({ login, password }: LoginProps) {
    const { access_token } = await authenticate({ login, password })
    setSession(access_token)
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut: () => {
          setSession(null)
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
