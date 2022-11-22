import React, { useState } from 'react'
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
  Toolbar
} from 'react95'
import logoIMG from '../assets/windowslogo.png'

export default function Default () {
  const [open, setOpen] = useState(false)

  return (
    <div className='p-20 fixed z-20'>
      <AppBar>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Button
              onClick={() => setOpen(!open)}
              active={open}
              style={{ fontWeight: 'bold' }}
            >
              <img
                src={logoIMG}
                alt='react95 logo'
                width='100%'
                height='100%'
                style={{ height: '20px', marginRight: 4 }}
              />
              Projects
            </Button>
            {open && (
              <MenuList
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '100%'
                }}
                onClick={() => setOpen(false)}
              >
                <MenuListItem>
                  <a className='cursor-pointer' target='_blank' href='https://jobsposter.herokuapp.com/' rel='noreferrer'>
                    <span className='mr-1' role='img' aria-label='📁'>
                      💻
                    </span>
                    Job Poster
                  </a>
                </MenuListItem>
                <MenuListItem>
                  <a className='cursor-pointer' target='_blank' href='https://sdlmusicplayer.netlify.app/' rel='noreferrer'>
                    <span className='mr-1' role='img' aria-label='📁'>
                      🎹
                    </span>
                    Music Player
                  </a>
                </MenuListItem>
                <MenuListItem>
                  <a className='cursor-pointer' target='_blank' href='https://sdldashboard.netlify.app/' rel='noreferrer'>
                    <span className='mr-1' role='img' aria-label='📁'>
                      📋
                    </span>
                    Dashboard
                  </a>
                </MenuListItem>
                <MenuListItem>
                  <a className='cursor-pointer' target='_blank' href='https://sdl-weather.netlify.app/' rel='noreferrer'>
                    <span className='mr-1' role='img' aria-label='📁'>
                      ⛅
                    </span>
                    Weather App
                  </a>
                </MenuListItem>
                <MenuListItem>
                  <a className='cursor-pointer' target='_blank' href='https://sdl-ecommerce.netlify.app/' rel='noreferrer'>
                    <span className='mr-1' role='img' aria-label='📁'>
                      🎧
                    </span>
                    Ecommerce
                  </a>
                </MenuListItem>
                <MenuListItem>
                  <a className='cursor-pointer' target='_blank' href='https://soundpulse.netlify.app/' rel='noreferrer'>
                    <span className='mr-1' role='img' aria-label='📁'>
                      🎶
                    </span>
                    Sound Pulse
                  </a>
                </MenuListItem>
                <MenuListItem>
                  <a className='cursor-pointer' target='_blank' href='https://sdl-gericht.netlify.app/' rel='noreferrer'>
                    <span className='mr-1' role='img' aria-label='👨‍💻'>
                      🍱
                    </span>
                    Gericht
                  </a>
                </MenuListItem>
                <Separator />
                <MenuListItem disabled>
                  <span role='img' aria-label='🔙'>
                    🔙
                  </span>
                  Logout
                </MenuListItem>
              </MenuList>
            )}
          </div>

          <TextInput placeholder='Search...' width={150} />
        </Toolbar>
      </AppBar>
    </div>
  )
}
