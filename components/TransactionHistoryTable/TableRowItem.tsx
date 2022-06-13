import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import * as React from 'react'
import { useState } from 'react'

import DetailsModal from './DetailsModal'
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
        <TableCell align="left" sx={{ display: 'flex', gap: '1rem' }}>
          <Button variant="outlined" onClick={() => setModalOpen(true)}>
            مشاهده
          </Button>

          <IconButton color="error" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <DetailsModal orderData={order} open={modalOpen} setOpen={setModalOpen} />
    </>
  )
}
