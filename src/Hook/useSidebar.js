import React from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SettingsIcon from '@mui/icons-material/Settings'
import { FaDog, FaCat } from 'react-icons/fa'
import { BsHouseDoorFill } from 'react-icons/bs'
import { TbDog } from 'react-icons/tb'

const useSidebar = () => {
  const sidebarData = [
    {
      title: 'Home',
      icon: <BsHouseDoorFill />,
      link: '/',
    },
    {
      title: 'Groups',
      icon: <FaDog />,
      link: '/grou',
    },
    {
      title: 'Marketplace',
      icon: <StorefrontIcon />,
      link: '/marketplace',
    },
    {
      title: 'Friends',
      icon: <FaCat />,
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
