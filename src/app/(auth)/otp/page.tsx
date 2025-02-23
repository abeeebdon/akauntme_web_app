'use client'
import { Button } from '@/components/basics'
import { LogoIcon } from '@/components/icons'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input'

const OtpVerification = () => {
  const [otp, setOtp] = useState<string>('')
  const [time, setTime] = useState(30)
  const [otpError, setOtpError] = useState<boolean>(false)
  const router = useRouter()
  const containerStyling = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center ',
    alignItems: 'center',
  }
  const inputStyling = {
    width: '70px',
    height: '70px',
    fontSize: '20px',
  }
  const handleOtpVerification = (e: any) => {
    e.preventDefault()
    if (otp.length < 4) {
      setOtpError(true)
      return
    }
    console.log(otp)
    router.push('/user')
  }
  useEffect(() => {
    if (time <= 0) return // Stop when time reaches zero

    const interval = setInterval(() => {
      setTime((prev) => prev - 1)
    }, 1000) // Update every second

    return () => clearInterval(interval) // Cleanup interval on unmount
  }, [time])
  return (
    <section className="pt-10">
      <div className="flex justify-center flex-col items-center gap-y-5">
        <LogoIcon className="fill-akauntme size-10" type="alone" />
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-akauntme">
            Sign In to Akauntme
          </h1>
          <p className="mt-2 md:mt-5 font-base italic text-indigo-500">
            Your Smart Accounting Padi...{' '}
          </p>
        </div>
      </div>
      <article className="w-full max-w-[350px] mx-auto">
        <div className="my-4">
          <p>Please verify the code sent to </p>
        </div>
        <form
          onSubmit={handleOtpVerification}
          onClick={() => setOtpError(false)}
        >
          <OTPInput
            value={otp}
            onChange={setOtp}
            shouldAutoFocus
            numInputs={4}
            containerStyle={containerStyling}
            inputStyle={inputStyling}
            renderInput={(props) => (
              <input
                {...props}
                inputMode="numeric"
                pattern="[0-9]*"
                onKeyDown={(e) => {
                  if (!/^\d$/.test(e.key) && e.key !== 'Backspace') {
                    e.preventDefault()
                  }
                }}
              />
            )}
          />
          {otpError && <p className="err mt-4">Please enter a valid OTP</p>}
          <p className={time < 1 ? 'hidden' : 'block text-center mt-4'}>
            00:{time}
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              className="  bg-blue-500 cursor-pointer w-full max-w-[400px] flex justify-center text-white"
              type="submit"
              title="Verify OTP"
            />
          </div>
        </form>
        <div className="flex justify-center gap-1 mt-10 items-center">
          <p>Didn't receive code?</p>
          <Button className="underline text-blue-500" title="Resend OTP" />
        </div>
      </article>
    </section>
  )
}

export default OtpVerification
