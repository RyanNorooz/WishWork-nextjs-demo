import React, { useRef } from 'react'

// material ui
import { Typography, Box, Grid, Button, Link as MaterialLink } from '@mui/material'

// next
import { GetStaticProps } from 'next'
import Link from 'next/link'

import CustomHead from 'enhancers/CustomHead'
import MainPageLayout from 'components/Layout/Dashboard'
import PurchaseForm from 'components/Home/PurchaseForm'


const Dashboard = () => {
  return <div>
    <PurchaseForm/>
  </div>
}

Dashboard.getLayout = (page: React.ReactElement) => {
  return (
    <>
      <CustomHead title="meta.title" openGraphTitle="head.title" />
      <MainPageLayout>{page}</MainPageLayout>
    </>
  )
}

// export const getStaticProps: GetStaticProps = async ({}) => ({})

export default Dashboard

