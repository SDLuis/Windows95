import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { styleReset, Avatar } from 'react95'
import original from 'react95/dist/themes/original'
import msSansSerif from 'react95/dist/fonts/ms_sans_serif.woff2'
import msSansSerifBold from 'react95/dist/fonts/ms_sans_serif_bold.woff2'
import Appbar from './components/appbar'
import Media from './components/media'

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'msSansSerif';
    src: url('${msSansSerif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'msSansSerif';
    src: url('${msSansSerifBold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'msSansSerif';
  }
`

const App = () => (
  <div className=' bg-home bg-center bg-cover  h-screen w-screen'>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <div className='relative top-40'>
        <Media />
      </div>
      <div className='absolute text-white tracking-widest text-lg bottom-24 sm:bottom-4 right-4'>
        <span className='flex gap-1'>
          Make for fun by <span className='font-bold'>Luis Rincon</span>
          <Avatar square size={24}>
            <span role='img' aria-label='👨‍💻'>
              👨‍💻
            </span>
          </Avatar>
        </span>
      </div>
      <Appbar />
    </ThemeProvider>
  </div>
)

export default App
