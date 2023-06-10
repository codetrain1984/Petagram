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
    },
    {
      title: 'Groups',
      icon: <GroupIcon />,
    },
    {
      title: 'Marketplace',
      icon: <StorefrontIcon />,
    },
    {
      title: 'Friends',
      icon: <PersonIcon />,
    },
    {
      title: 'Setting',
      icon: <SettingsIcon />,
    },
    {
      title: 'Profile',
      icon: <AccountCircleIcon />,
    },
  ]
  return { sidebarData }
}

export default useSidebar
