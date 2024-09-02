interface AuthenticateRequest {
  login: string
  password: string
}

interface AuthenticateResponse {
  id: string
  access_token: string
}

const BASE_URL = 'https://don-saude-server-dev-e347759d6bc1.herokuapp.com'

export async function authenticate(
  credentials: AuthenticateRequest,
): Promise<AuthenticateResponse> {
  const response = await fetch(`${BASE_URL}/mobile/patient/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })

  const data = await response.json()

  if (data.error) throw new Error('Falha ao realizar login')

  return data
}
