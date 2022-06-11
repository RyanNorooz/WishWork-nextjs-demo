import React from 'react'

// material ui
import { Typography, Box, Grid, Button, Link as MaterialLink } from '@mui/material'

// next
import { GetServerSideProps } from 'next'
import Link from 'next/link'

// emotion
import styled from '@emotion/styled'

// components
import CustomHead from 'enhancers/CustomHead'
import MainPageLayout from 'components/Layout/Dashboard'
import TransactionHistoryTable from 'components/TransactionHistoryTable'

const dummyOrders = [...Array(10)].map(() => ({
  id: Math.floor(Math.random() * 10),
  type: Math.random() > 0.5 ? 'buy' : 'sell',
  amount: Math.floor(Math.random() * 10),
  fee: Math.floor(Math.random() * 10),
  total: Math.floor(Math.random() * 10),
  registerDate: '2020-01-01',
  finalizedDate: '2020-01-01',
}))

const Section1 = styled.div`
  display: flex;
`

const TransactionHistory = ({ orders }) => {
  return (
    <Section1>
      <TransactionHistoryTable orders={orders} />
    </Section1>
  )
}

TransactionHistory.getLayout = (page: React.ReactElement) => {
  return (
    <>
      <CustomHead title="TransactionHistory" openGraphTitle="TransactionHistory" />
      <MainPageLayout>{page}</MainPageLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => ({
  props: { orders: dummyOrders },
})

export default TransactionHistory
