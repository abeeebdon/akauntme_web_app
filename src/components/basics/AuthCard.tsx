import React, { ReactNode } from 'react'

interface AuthCardProps {
  LeftPane: ReactNode
  RightPane: ReactNode
}

const AuthCard: React.FC<AuthCardProps> = ({ LeftPane, RightPane }) => (
  <div className="min-h-screen flex flex-col lg:flex-row py-6 sm:py-10 mx-2  overflow-hidden"></div>
)

export default AuthCard
