import React from 'react'

// material ui
import { Typography, Box, Grid, Button, Link as MaterialLink } from '@mui/material'

// next
import { GetStaticProps } from 'next'
import Link from 'next/link'

import CustomHead from 'enhancers/CustomHead'
import MainPageLayout from 'components/Layout/Dashboard'
import _BuyAndSellForm from 'components/Dashboard/BuyAndSellForm'
import _ChartDisplay from 'components/Dashboard/ChartDisplay'

import styled from '@emotion/styled'

const Section1 = styled.div`
  display: flex;
`
const BuyAndSellForm = styled(_BuyAndSellForm)`
  width: 300px;
`
const ChartDisplay = styled(_ChartDisplay)`
  width: 800px;
`

const Dashboard = () => {
  return (
    <Section1>
      <BuyAndSellForm />
      <ChartDisplay />
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

// export const getStaticProps: GetStaticProps = async ({}) => ({})

export default Dashboard
