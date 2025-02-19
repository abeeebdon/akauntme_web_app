'use client'
import { Button } from '@/components/basics'
import { LogoIcon } from '@/components/icons'
import { useState } from 'react'
import OTPInput from 'react-otp-input'

const OtpVerification = () => {
  const [otp, setOtp] = useState<string>('')
  const [otpError, setOtpError] = useState<boolean>(false)
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
  }
  return (
    <section>
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
          <h3>Verify</h3>
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
          {otpError && <p>Please enter a valid OTP</p>}
          <p className="text-center">00:30</p>
          <div className="mt-6 flex justify-center">
            <Button
              className="  bg-blue-500 cursor-pointer"
              type="submit"
              title="Verify OTP"
            />
          </div>
        </form>
        <div className="text-center">
          <Button className="underline text-blue-500" title="Resend code" />
        </div>
      </article>
    </section>
  )
}

export default OtpVerification
