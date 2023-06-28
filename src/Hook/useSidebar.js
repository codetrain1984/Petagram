import React from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SettingsIcon from '@mui/icons-material/Settings'
import { FaDog } from 'react-icons/fa'
import SendIcon from '@mui/icons-material/Send'
import BungalowIcon from '@mui/icons-material/Bungalow'

const useSidebar = () => {
  const sidebarData = [
    {
      title: 'Home',
      icon: <BungalowIcon />,
      link: '/',
    },
    {
      title: 'Messages',
      icon: <SendIcon />,
      link: '/messages',
    },
    {
      title: 'Marketplace',
      icon: <StorefrontIcon />,
      link: '/marketplace',
    },
    {
      title: 'Friends',
      icon: <FaDog />,
      link: '/friends',
    },
    {
      title: 'Setting',
      icon: <SettingsIcon />,
      link: '/setting',
    },
    {
      title: 'Profile',
      icon: <AccountCircleIcon />,
      link: '/profile',
    },
  ]
  return { sidebarData }
}

export default useSidebar
