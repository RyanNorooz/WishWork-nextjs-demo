import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Divider from '@mui/material/Divider'

import LineChart from './LineChart'

export default function ChartDisplay(props) {
  return (
    <div {...props}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select value={1} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
            <MenuItem value={1}>فروردین</MenuItem>
            <MenuItem value={2}>اردیبهشت</MenuItem>
            <MenuItem value={3}>خرداد</MenuItem>
            <MenuItem value={4}>تیر</MenuItem>
            <MenuItem value={5}>مرداد</MenuItem>
            <MenuItem value={6}>شهریور</MenuItem>
            <MenuItem value={7}>مهر</MenuItem>
            <MenuItem value={8}>آبان</MenuItem>
            <MenuItem value={9}>آذر</MenuItem>
            <MenuItem value={10}>دی</MenuItem>
            <MenuItem value={11}>بهمن</MenuItem>
            <MenuItem value={12}>اسفند</MenuItem>
          </Select>
        </FormControl>

        <Divider orientation="vertical" />

        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <strong>$58,000</strong>
            <span style={{ color: 'green' }}>+0.78</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <strong>210 hour</strong>
            <span style={{ color: 'red' }}>-0.78%</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', direction: 'ltr' }}>
        <span style={{ fontWeight: '700', fontSize: '1.5rem' }}>$58,000</span>

        <span>
          your spending
          <span style={{ color: 'green' }}>↓93.28%</span>
          compared to last month
        </span>
      </div>

      <LineChart />
    </div>
  )
}
