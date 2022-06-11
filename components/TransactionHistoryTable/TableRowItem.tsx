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
import DetailsModal from './DetailsModal'
import { useState } from 'react'
import type { Order } from 'types/orders'

interface Props {
  order: Order
}

export default function TableRowItem({ order }: Props) {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <TableRow key={order.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell align="left">{order.id}</TableCell>
        <TableCell align="left">{order.type}</TableCell>
        <TableCell align="left">{order.amount}</TableCell>
        <TableCell align="left">{order.fee}</TableCell>
        <TableCell align="left">{order.total}</TableCell>
        <TableCell align="left">{order.registerDate}</TableCell>
        <TableCell align="left">{order.finalizedDate}</TableCell>
        <TableCell align="left">
          <Button variant="outlined" onClick={() => setModalOpen(true)}>
            مشاهده
          </Button>
          <Button>
            <DeleteIcon color="error" />
          </Button>
        </TableCell>
      </TableRow>
      <DetailsModal orderData={order} open={modalOpen} setOpen={setModalOpen} />
    </>
  )
}
