import * as React from 'react'
import NavDrawer from './NavDrawer'

interface Props {
  children: React.ReactNode
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <NavDrawer />
      {children}
    </div>
  )
}

export default DashboardLayout
