import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { i18n } from '../i18n'
// import { useAppDispatch } from 'redux/store'
// import rtlPlugin from 'stylis-plugin-rtl';


// import appSlice from 'redux/slices/app/slice'
import configTheme from '../theme/configure'
import createEmotionCache from 'enhancers/createEmotionCache'
import useThemeDetector from 'enhancers/hooks/useThemeDetector'

// Constants
// import APP_CONSTANTS from 'constants/app';

/* WithTheme Component =================== */
const WithTheme = ({ children, serverEmotionCache }) => {
  const { locale } = useRouter()
  useThemeDetector()
  // const [isDark, setIsDark] = useState(useThemeDetector())
  const theme = useSelector((state) => state.app.theme)

  // const dispatch = useAppDispatch()

  // if ((isDark && theme == "light") || (!isDark && theme == "dark")) {
  // 	dispatch(appSlice.actions.toggleTheme())
  // }

  const themeObject = useMemo(() => {
    const { direction, fontFamily } = i18n.availableLocales[locale]

    // const background = theme == "dark" ?
    // 	"linear-gradient(to bottom, rgba(0, 255, 255, 1),rgba(0, 244, 244, 1) ,rgba(10, 210, 210, 1))"
    // 	:
    // 	"linear-gradient(to bottom, rgba(0, 255, 255, 1),rgba(0, 244, 244, 1) ,rgba(10, 210, 210, 1))"

    if (process.browser) {
      const body = document.getElementsByTagName('body')[0]
      body.setAttribute('dir', direction)
    }
    return configTheme({ direction, mode: theme, fontFamily })
  }, [locale, theme])

  const emotionCache = useMemo(
    () => serverEmotionCache || createEmotionCache(themeObject.direction),
    [themeObject.direction, serverEmotionCache]
  )

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={themeObject}>
        <CssBaseline />
        <Head>
          {/* Rotunda's style.css file is missing, because of this line, it produces an error in console */}
          {(themeObject.typography.fontFamily as unknown as string[]).map(
            (font: string, i: number) => (
              <link key={i} href={`/fonts/${font}/style.css`} rel="stylesheet" />
            )
          )}
        </Head>
        <div dir={themeObject.direction}>{children}</div>
      </ThemeProvider>
    </CacheProvider>
  )
}

// Export default
export default WithTheme

// function useSelector(arg0: (state: any) => any) {
// 	throw new Error('Function not implemented.');
// }
