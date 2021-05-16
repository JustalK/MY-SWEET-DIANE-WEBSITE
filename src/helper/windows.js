import { DESKTOP_MINIMUM_WIDTH } from '@src/constants/windows'

export const getScreenWidth = () => {
  return window.innerWidth
}

export const getScreenHeight = () => {
  return window.innerHeight
}

export const isDesktop = () => {
  return window.innerWidth >= DESKTOP_MINIMUM_WIDTH
}
