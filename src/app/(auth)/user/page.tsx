'use client'
import { object, string, InferType, ref } from 'yup'
import { Input } from '@/components/basics'
import { LogoIcon } from '@/components/icons'
import React, { useState } from 'react'
import Select from 'react-select'
import { useRouter } from 'next/navigation'

type OptionType = { value: string; label: string }

// Define Yup schema
const userSchema = object({
  name: string().required('Name is required'),
  password: string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: string()
    .oneOf([ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  plan: string().required('Please select a plan'),
})

type FormData = InferType<typeof userSchema>

const User = () => {
  const router = useRouter()
  const [accountType, setAccountType] = useState<OptionType>({
    value: 'free',
    label: 'Free',
  })
  const [formData, setFormData] = useState<FormData>({
    name: '',
    password: '',
    confirmPassword: '',
    plan: 'free',
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const options: OptionType[] = [
    { value: 'free', label: 'Free' },
    { value: 'basic', label: 'Basic' },
    { value: 'pro', label: 'Pro' },
  ]

  const handleChange = (newValue: OptionType | null) => {
    if (!newValue) return
    setAccountType(newValue)
    setFormData((prev) => ({ ...prev, plan: newValue.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await userSchema.validate(formData, { abortEarly: false })
      console.log('Form submitted successfully:', formData)
      router.push('/login')
      setErrors({}) // Clear errors on successful validation
    } catch (err: any) {
      const validationErrors: Partial<FormData> = {}
      err.inner.forEach((error: any) => {
        validationErrors[error.path as keyof FormData] = error.message
      })
      setErrors(validationErrors)
    }
  }

  return (
    <div className="flex justify-center flex-col items-center gap-y-10">
      <article className="flex justify-center flex-col items-center gap-y-5">
        <LogoIcon className="fill-akauntme size-10" type="alone" />
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-akauntme">
            Sign In to Akauntme
          </h1>
          <p className="mt-2 md:mt-5 font-base italic text-indigo-500">
            Your Smart Accounting Padi...
          </p>
        </div>
      </article>
      <article className="w-full max-w-[350px]">
        <h2>Complete your registration</h2>
        <form onSubmit={handleSubmit} className="space-y-5 w-full">
          <div>
            <Input
              id="name"
              type="text"
              className="py-3 rounded-lg w-full"
              placeholder="Enter your name or business name"
              value={formData.name}
              onChange={(e: any) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <Select
              value={accountType}
              onChange={handleChange}
              options={options}
              isSearchable={false}
            />
            {errors.plan && (
              <p className="text-red-500 text-sm">{errors.plan}</p>
            )}
          </div>

          <div>
            <Input
              id="password"
              type="password"
              className="py-3 rounded-lg w-full"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e: any) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div>
            <Input
              id="confirm-password"
              type="password"
              className="py-3 rounded-lg w-full"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e: any) =>
                setFormData((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="flex justify-center bg-gradient-to-bl from-akauntme to-violet-600 font-semibold lg:text-xl py-3 rounded-lg shadow-lg shadow-akauntme/70 transition-all hover:scale-95 w-9/12 md:w-6/12 text-center text-white"
            >
              Register
            </button>
          </div>
        </form>
      </article>
    </div>
  )
}

export default User
