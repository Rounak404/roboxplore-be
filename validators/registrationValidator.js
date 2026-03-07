import { z } from 'zod'

export const registrationSchema = z.object({
  teamName: z
    .string()
    .min(3, 'Team name must be at least 3 characters')
    .max(50, 'Team name must not exceed 50 characters')
    .trim(),

  leaderName: z
    .string()
    .min(2, 'Leader name must be at least 2 characters')
    .max(50, 'Leader name must not exceed 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Leader name must contain only letters and spaces')
    .trim(),

  leaderBranch: z.string().min(2, 'Leader branch is required').max(50).trim(),

  leaderRegdNo: z
    .string()
    .min(5, 'Leader registration number must be at least 5 characters')
    .max(20)
    .trim(),

  leaderContactNo: z
    .string()
    .min(10, 'Leader contact number must be at least 10 digits')
    .max(15)
    .trim(),

  leaderEmail: z.string().trim().email('Invalid leader email'),

  // MEMBER 2
  member2Name: z
    .string()
    .min(2, 'Member 2 name must be at least 2 characters')
    .max(50)
    .regex(
      /^[a-zA-Z\s]+$/,
      'Member 2 name must contain only letters and spaces'
    )
    .trim(),

  member2Branch: z
    .string()
    .min(2, 'Member 2 branch is required')
    .max(50)
    .trim(),

  member2RegdNo: z
    .string()
    .min(5, 'Member 2 registration number must be at least 5 characters')
    .max(20)
    .trim(),

  member2ContactNo: z.string().min(10).max(15).trim(),

  member2Email: z.string().trim().email(),

  // MEMBER 3
  member3Name: z
    .string()
    .min(2)
    .max(50)
    .regex(
      /^[a-zA-Z\s]+$/,
      'Member 3 name must contain only letters and spaces'
    )
    .trim(),

  member3Branch: z.string().min(2).max(50).trim(),

  member3RegdNo: z.string().min(5).max(20).trim(),

  member3ContactNo: z.string().min(10).max(15).trim(),

  member3Email: z.string().trim().email(),

  // MEMBER 4
  member4Name: z
    .string()
    .min(2)
    .max(50)
    .regex(
      /^[a-zA-Z\s]+$/,
      'Member 4 name must contain only letters and spaces'
    )
    .trim(),

  member4Branch: z.string().min(2).max(50).trim(),

  member4RegdNo: z.string().min(5).max(20).trim(),

  member4ContactNo: z.string().min(10).max(15).trim(),

  member4Email: z.string().trim().email(),

  // MEMBER 5
  member4Name: z
    .string()
    .min(2)
    .max(50)
    .regex(
      /^[a-zA-Z\s]+$/,
      'Member 5 name must contain only letters and spaces'
    )
    .trim(),

  member4Branch: z.string().min(2).max(50).trim(),

  member4RegdNo: z.string().min(5).max(20).trim(),

  member5ContactNo: z.string().min(10).max(15).trim(),

  member5Email: z.string().trim().email(),
})

export const validateRegistration = (data) => {
  return registrationSchema.safeParse(data)
}
