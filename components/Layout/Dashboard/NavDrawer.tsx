import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import HomeIcon from '@mui/icons-material/Home'
import HistoryIcon from '@mui/icons-material/History'

export default function NavDrawer() {
  const pages = [
    {
      title: 'خانه',
      icon: <HomeIcon />,
    },
    {
      title: 'لیست',
      icon: <HistoryIcon />,
    },
  ]

  return (
    <Drawer anchor="right" open={true} variant="persistent">
      <Box sx={{ width: 250 }} role="presentation">
        <Typography variant="h2">محصول</Typography>

        <List>
          {pages.map(({ title, icon }) => (
            <ListItem key={title} disablePadding>
              <ListItemButton>
                <ListItemText primary={title} />
                <ListItemIcon>{icon}</ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
