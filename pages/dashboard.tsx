import styled from '@emotion/styled'
import React from 'react'

import ChartDisplay from 'components/Dashboard/ChartDisplay'
import Promotions from 'components/Dashboard/Promotions'
import TradeForm from 'components/Dashboard/TradeForm'
import MainPageLayout from 'components/Layout/Dashboard'
import CustomHead from 'enhancers/CustomHead'

const Section1 = styled.div`
  display: flex;
`

const Dashboard = () => {
  return (
    <Section1>
      <TradeForm style={{ width: '400px', padding: '1.5rem .7rem' }} />
      <Promotions style={{ width: '400px', padding: '1.5rem .7rem', background: '#f9f9f9' }} />
      <ChartDisplay style={{ width: '700px' }} />
    </Section1>
  )
}

Dashboard.getLayout = (page: React.ReactElement) => {
  return (
    <>
      <CustomHead title="Dashboard" openGraphTitle="Dashboard" />
      <MainPageLayout>{page}</MainPageLayout>
    </>
  )
}

export default Dashboard
