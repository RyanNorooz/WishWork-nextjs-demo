import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useState, useEffect } from 'react'

export default function TradeForm(props) {
  const [operationMode, setOperationMode] = useState('خرید')
  const [quantity, setQuantity] = useState(0)
  const [fee, setFee] = useState(0)

  // useEffect(() => {}, [operationMode])

  return (
    <Box sx={{ width: '100%' }} {...props}>
      <Box sx={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <Button
          variant={operationMode === 'خرید' ? 'contained' : 'outlined'}
          onClick={() => setOperationMode('خرید')}
          sx={{ fontSize: '1.1rem', fontWeight: 900 }}
          fullWidth
        >
          خرید
        </Button>
        <Button
          variant={operationMode === 'فروش' ? 'contained' : 'outlined'}
          onClick={() => setOperationMode('فروش')}
          sx={{ fontSize: '1.1rem', fontWeight: 900 }}
          fullWidth
        >
          فروش
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
        <TextField type="text" id="name" label="نام" variant="outlined" />
        <TextField type="tel" id="phone" label="شماره تماس" variant="outlined" />

        <Box sx={{ display: 'flex', gap: '.3rem' }}>
          <TextField
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            id="quantity"
            type="text"
            label="تعداد"
            variant="outlined"
            value={quantity||''}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            fullWidth
          />
          <Button
            onClick={() => setQuantity(quantity + 1)}
            sx={{ fontSize: '2rem', padding: 0, minWidth: 40 }}
            variant="contained"
          >
            +
          </Button>
          <Button
            onClick={() => setQuantity(quantity - 1)}
            sx={{ fontSize: '2rem', padding: 0, minWidth: 40 }}
            variant="contained"
          >
            -
          </Button>
        </Box>

        <TextField
          id="fee"
          type="text"
          label="قیمت هر واحد"
          variant="outlined"
          value={fee ||''}
          onChange={(e) => setFee(parseInt(e.target.value))}
        />
        <TextField id="file" label="فایل" variant="outlined" />

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body1">مبلغ خرید:</Typography>
          <Typography variant="body1" dir="ltr">
            {((fee * quantity) | 0).toLocaleString('en-US')} (auto)
          </Typography>
        </Box>

        <Button variant="contained">{operationMode === 'خرید' ? 'خرید' : 'فروش'}</Button>
      </Box>
    </Box>
  )
}
