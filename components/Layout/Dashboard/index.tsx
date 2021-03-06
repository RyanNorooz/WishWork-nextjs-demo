import styled from '@emotion/styled'
import * as React from 'react'

import NavDrawer from './NavDrawer'

interface Props {
  children: React.ReactNode
}

const Main = styled.main`
  margin-inline-start: 220px;
`

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <NavDrawer />
      <Main>{children}</Main>
    </div>
  )
}

export default DashboardLayout
