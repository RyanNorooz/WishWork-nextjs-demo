import DarkModeIcon from '@mui/icons-material/DarkMode'
import HistoryIcon from '@mui/icons-material/History'
import HomeIcon from '@mui/icons-material/Home'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import * as React from 'react'

import { appSlice } from 'redux/slices'
import { useAppDispatch } from 'redux/store'

const drawerWidth = 220

const pages = [
  {
    title: 'خانه',
    icon: <HomeIcon />,
    address: '/dashboard',
  },
  {
    title: 'لیست',
    icon: <HistoryIcon />,
    address: '/transactionhistory',
  },
]

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

export default function NavDrawer() {
  const dispatch = useAppDispatch()

  return (
    <Drawer anchor="left" open={true} variant="permanent">
      <Box sx={{ width: drawerWidth }}>
        <DrawerHeader>
          <Typography variant="h2" color="primary">
            محصول
          </Typography>
        </DrawerHeader>
        <Divider />

        <List>
          {pages.map(({ title, icon, address }) => (
            <ListItem key={title} disablePadding>
              <Link href={address} passHref>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={title} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}

          <Box
            sx={{
              position: 'fixed',
              bottom: 0,
              textAlign: 'center',
              paddingBottom: 1,
              width: drawerWidth,
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                dispatch(appSlice.actions.toggleTheme())
              }}
              fullWidth
            >
              تغییر تم
              <DarkModeIcon />
            </Button>
          </Box>
        </List>
      </Box>
    </Drawer>
  )
}
