import React, { useContext } from 'react'
import logo_dark from '../../img/logo.png'
import logo_light from '../../img/logo_black.png'

export const themes = {
  dark: {
    label: 'dark',
    variables: {
      '--main-bgcolor': '#181818',
      '--sidebar-bgcolor': '#181818',
      '--text-color': '#FFFFFF',
      '--mainnav-line-color': '#d3d3d3',
      '--track-title-svg-stroke': '#4E4E4E',
      '--track-title-bgcolor': '#313131',
      '--progressbar-bgcolor': '#2e2e2e',
      '--progressbar-player-btn-regular': '#D9D9D9',
      '--progressbar-player-btn-active': '#FFFFFF',
      '--progressbar-player-btn-hover': '#ACACAC',
      '--progressbar-player-icon-regular': '#696969',
      '--progressbar-player-reaction-active-stroke': '#FFFFFF',
      '--progressbar-player-reaction-active-fill': '#696969',
      '--filter-btn-regular': '#FFFFFF',
      '--filter-btn-hover': '#D9B6FF',
      '--filter-btn-active': '#AD61FF',
      '--filter-scrollbar-bgcolor': '#4b4949',
      '--volume-slider-thumb-border': '#FFFFFF',
      '--volume-slider-thumb-bgcolor': '#000000',
      '--volume-slider-runnable-track': '#797979',
      '--volume-progress-bgcolor': '#FFFFFF',
    },
    icons: {
      'theme-change': '#icon-theme_dark',
      logo: logo_dark,
      volume: '#icon-volume-dark',
    },
  },
  light: {
    label: 'light',
    variables: {
      '--main-bgcolor': '#FFFFFF',
      '--sidebar-bgcolor': '#F6F5F3',
      '--text-color': '#000000',
      '--mainnav-line-color': '#000000',
      '--track-title-svg-stroke': '#B1B1B1',
      '--track-title-bgcolor': '#F6F4F4',
      '--progressbar-bgcolor': '#D9D9D9',
      '--progressbar-player-btn-regular': '#B1B1B1',
      '--progressbar-player-btn-active': '#000000',
      '--progressbar-player-btn-hover': '#707070',
      '--progressbar-player-icon-regular': '#B1B1B1',
      '--progressbar-player-reaction-active-stroke': '#AD61FF',
      '--progressbar-player-reaction-active-fill': '#AD61FF',
      '--filter-btn-regular': '#000000',
      '--filter-btn-hover': '#580EA2',
      '--filter-btn-active': '#AD61FF',
      '--filter-scrollbar-bgcolor': '#FFFFFF',
      '--volume-slider-thumb-border': '#B1B1B1',
      '--volume-slider-thumb-bgcolor': '#FFFFFF',
      '--volume-slider-runnable-track': '#C4C4C4',
      '--volume-progress-bgcolor': '#AD61FF',
    },
    icons: {
      'theme-change': '#icon-theme_light',
      logo: logo_light,
      volume: '#icon-volume-light',
    },
  },
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export const useThemeContext = () => {
  const theme = useContext(ThemeContext)

  if (!theme) return themes.dark

  return theme
}
