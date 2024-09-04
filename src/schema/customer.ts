import { z } from 'zod';

export const customerSchema = z.object({
  firstName: z.string().min(1, { message: 'Required' }),
  lastName: z.string().min(1, { message: 'Required' }),
  company: z.string().min(1, { message: 'Required' }),
  email: z.string().email().min(1, { message: 'Required' }),
  role: z.enum(['administrator', 'user']),
  password: z.string().min(8, '8+ characters'),
});

export const editCustomerSchema = customerSchema.omit({
  password: true,
});

export type CustomerSchemaType = z.infer<typeof customerSchema>;
export type EditCustomerSchemaType = z.infer<typeof editCustomerSchema>;
