import { z } from 'zod'
import { validateCPF } from '../util/validate-cpf'

const registerSchema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    cpf: z
      .string()
      .length(11)
      .refine((cpf) => validateCPF(cpf), {
        message: 'Cpf is invalid',
      }),
    phoneNumber: z.string().length(11),
    password: z.string().min(8),
    passwordConfirmation: z.string().min(8),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
  })

type RegisterTypes = z.input<typeof registerSchema>

export { registerSchema, RegisterTypes }
