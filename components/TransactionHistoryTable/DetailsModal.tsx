import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import * as React from 'react'

import type { Order } from 'types/orders'

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
  orderData: Order
}

export default function DetailsModal({ open, setOpen, orderData }: Props) {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            sx={{ position: 'absolute', top: '1rem', right: '1rem' }}
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: 900, fontSize: '1.3rem' }}
          >
            جزییات سفارش
          </Typography>

          <Box sx={{ margin: '2rem', border: '2px solid #8888' }}>
            <TableRow>
              <TableCell align="left">نام سفارش دهنده</TableCell>
              <TableCell align="left">{orderData.clientName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">شماره سفارش دهنده</TableCell>
              <TableCell align="left">{orderData.clientTel}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left" sx={{ border: 0 }}>
                فایل
              </TableCell>
              <TableCell align="left" sx={{ border: 0 }}>
                <Button variant="contained" sx={{ color: '#333', background: '#dbebf9' }}>
                  مشاهده
                </Button>
              </TableCell>
            </TableRow>
          </Box>

          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Button variant="contained" color="primary" fullWidth onClick={() => setOpen(false)}>
              ثبت نهایی
            </Button>
            <Button variant="outlined" fullWidth onClick={() => setOpen(false)}>
              انصراف
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
