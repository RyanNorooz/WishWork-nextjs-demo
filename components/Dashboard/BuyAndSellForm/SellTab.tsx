import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function PurchaseTab() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField id="name" label="نام" variant="outlined" />
        <TextField id="phone" label="شماره تماس" variant="outlined" />

        <Box sx={{ display: 'flex', gap: '.3rem' }}>
          <TextField
            type="text"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            id="quantity"
            label="تعداد"
            variant="outlined"
          />
          <Button variant="contained"> + </Button>
          <Button variant="contained"> - </Button>
        </Box>

        <TextField id="fee" label="قیمت هر واحد" variant="outlined" />
        <TextField id="file" label="فایل" variant="outlined" />

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body1">مبلغ فروش:</Typography>
          <Typography variant="body1">89000000</Typography>
        </Box>

        <Button variant="contained">فروش</Button>
      </Box>
    </>
  )
}
