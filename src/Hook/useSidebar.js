import HomeIcon from '@mui/icons-material/Home'
import GroupIcon from '@mui/icons-material/Group'
import StorefrontIcon from '@mui/icons-material/Storefront'
import PersonIcon from '@mui/icons-material/Person'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SettingsIcon from '@mui/icons-material/Settings'
import React from 'react'

const useSidebar = () => {
  const sidebarData = [
    {
      title: 'Home',
      icon: <HomeIcon />,
      link: '/',
    },
    {
      title: 'Groups',
      icon: <GroupIcon />,
      link: '/grou',
    },
    {
      title: 'Marketplace',
      icon: <StorefrontIcon />,
      link: '/marketplace',
    },
    {
      title: 'Friends',
      icon: <PersonIcon />,
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
