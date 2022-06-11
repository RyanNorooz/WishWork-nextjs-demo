import React from 'react'

// material ui
import { Typography, Box, Grid, Button, Link as MaterialLink } from '@mui/material'

// next
import { GetStaticProps } from 'next'
import Link from 'next/link'

// emotion
import styled from '@emotion/styled'

// components
import CustomHead from 'enhancers/CustomHead'
import MainPageLayout from 'components/Layout/Dashboard'
import TradeForm from 'components/Dashboard/TradeForm'
import ChartDisplay from 'components/Dashboard/ChartDisplay'
import Promotions from 'components/Dashboard/Promotions'

const Section1 = styled.div`
  display: flex;
`

const Dashboard = () => {
  return (
    <Section1>
      <TradeForm style={{ width: '400px', padding: '1.5rem .7rem' }} />
      <Promotions style={{ width: '400px', padding: '1.5rem .7rem', background: '#f9f9f9' }} />
      <ChartDisplay style={{ width: '700px', padding: '1.5rem .7rem' }} />
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
