import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import * as React from 'react'

import TableRowItem from './TableRowItem'

export default function TransactionHistoryTable({ orders }) {
  return (
    <Box>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
              <TableRowItem order={order} key={order.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ m: '1rem', display: 'flex', justifyContent: 'space-around' }}>
        <Stack spacing={2} sx={{ background: '#eee', borderRadius: '2em', width: 'fit-content' }}>
          <Pagination count={10} color="secondary" />
        </Stack>
      </Box>
    </Box>
  )
}
