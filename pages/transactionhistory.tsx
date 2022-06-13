
import styled from '@emotion/styled'
import { GetServerSideProps } from 'next'
import React from 'react'

import MainPageLayout from 'components/Layout/Dashboard'
import TransactionHistoryTable from 'components/TransactionHistoryTable'
import CustomHead from 'enhancers/CustomHead'

const dummyOrders = [...Array(6)].map((_, index) => ({
  id: index + 1,
  type: Math.random() > 0.5 ? 'buy' : 'sell',
  amount: `${Math.floor(Math.random() * 1000)} واحد`,
  fee: `${Math.floor(Math.random() * 1000)} دلار`,
  total: `${Math.floor(Math.random() * 10000)} دلار`,
  registerDate: '2020-01-01',
  finalizedDate: '2020-01-01',
  clientName: `${Math.random() > 0.5 ? 'حسین' : 'علی'} ${Math.floor(Math.random() * 10)}`,
  clientTel: `09${Math.floor(Math.random() * 1000000000)}`,
}))

const Section1 = styled.section`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  h1 {
    font-size: 2rem;
    font-weight: 900;
  }
`

export default function TransactionHistory({ orders }) {
  return (
    <Section1>
      <h1>لیست سفارش ها</h1>

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
