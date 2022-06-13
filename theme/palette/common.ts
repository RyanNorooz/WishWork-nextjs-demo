import { colors } from '@mui/material'

const common = {
  primary: {
    main: '#0070F3',
    contrastText: 'white',
  },
  secondary: {
    main: '#f1b44c',
    contrastText: 'white',
  },
  error: {
    main: '#f46a6a',
    contrastText: 'white',
    dark: colors.red[900],
    light: colors.red[400],
  },
  warning: {
    main: '#f1b44c',
    contrastText: 'white',
    dark: colors.yellow[900],
    light: colors.yellow[400],
  },
  success: {
    main: '#34c38f',
    contrastText: 'white',
    dark: colors.green[900],
    light: colors.green[400],
  },
  info: {
    main: '#0070F3',
    contrastText: 'white',
    dark: colors.green[900],
    light: colors.green[400],
  },
  grey: {
    main: colors.grey[700],
    grey1: '#A8A8A8',
    ...colors.grey,
  },
}

export default common
