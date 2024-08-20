interface CreateUserRequest {
  name: string
  email: string
  cpf: string
  password: string
  phoneNumber: string
}

interface CreateUserResponse {
  id: string
  name: string
  email: string
  cpf: string
  password: string
  phoneNumber: string
  createdAt: string
}

const BASE_URL = 'https://don-saude-server-dev-e347759d6bc1.herokuapp.com'

export async function createUser(
  user: CreateUserRequest,
): Promise<CreateUserResponse> {
  const response = await fetch(`${BASE_URL}/mobile/patient/auth/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  const data = await response.json()
  return data
}
