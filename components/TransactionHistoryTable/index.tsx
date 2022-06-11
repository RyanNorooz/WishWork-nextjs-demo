import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'

interface Props {
  orders: Array<{
    id: number
    type: string
    amount: number
    fee: number
    total: number
    registerDate: string
    finalizedDate: string
  }>
}

export default function TransactionHistoryTable({ orders }: Props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ایدی سفارش</th>
            <th>نوع سفارش</th>
            <th>مقدار سفارش</th>
            <th>قیمت هر واحد</th>
            <th>قیمت کل</th>
            <th>تاریخ ثبت</th>
            <th>تاریخ نهایی شدن</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.type}</td>
              <td>{order.amount}</td>
              <td>{order.fee}</td>
              <td>{order.total}</td>
              <td>{order.registerDate}</td>
              <td>{order.finalizedDate}</td>
              <td>
                <Button variant="outlined">مشاهده</Button>
                <Button>
                  <DeleteIcon color="error" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
