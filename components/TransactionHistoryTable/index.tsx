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
      <TableContainer>
        <Table sx={{ minWidth: 650 }}  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ایدی سفارش</TableCell>
              <TableCell align="left">نوع سفارش</TableCell>
              <TableCell align="left">مقدار سفارش</TableCell>
              <TableCell align="left">قیمت هر واحد</TableCell>
              <TableCell align="left">قیمت کل</TableCell>
              <TableCell align="left">تاریخ ثبت</TableCell>
              <TableCell align="left">تاریخ نهایی شدن</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">{order.id}</TableCell>
                <TableCell align="left">{order.type}</TableCell>
                <TableCell align="left">{order.amount}</TableCell>
                <TableCell align="left">{order.fee}</TableCell>
                <TableCell align="left">{order.total}</TableCell>
                <TableCell align="left">{order.registerDate}</TableCell>
                <TableCell align="left">{order.finalizedDate}</TableCell>
                <TableCell align="left">
                  <Button variant="outlined">مشاهده</Button>
                  <Button>
                    <DeleteIcon color="error" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
