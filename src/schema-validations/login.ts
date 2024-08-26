import { z } from 'zod'

const loginSchema = z.object({
  login: z.string().email(),
  password: z.string().min(8),
})

type LoginTypes = z.input<typeof loginSchema>

export { loginSchema, LoginTypes }
