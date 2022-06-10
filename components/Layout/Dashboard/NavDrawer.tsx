import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import HomeIcon from '@mui/icons-material/Home'
import HistoryIcon from '@mui/icons-material/History'
import Box from '@mui/material/Box'

import { styled } from '@mui/material/styles'
import Divider from '@mui/material/Divider'

const drawerWidth = 220

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

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
    <Drawer anchor="left" open={true} variant="persistent">
      <Box sx={{ width: drawerWidth }}>
        <DrawerHeader>
          <Typography variant="h2">محصول</Typography>
        </DrawerHeader>
        <Divider />

        <List>
          {pages.map(({ title, icon }) => (
            <ListItem key={title} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
