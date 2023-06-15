<<<<<<< HEAD
import React from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SettingsIcon from '@mui/icons-material/Settings'
import { FaDog, FaCat } from 'react-icons/fa'
import { BsHouseDoorFill } from 'react-icons/bs'
import { TbDog } from 'react-icons/tb'
=======
import HomeIcon from '@mui/icons-material/Home'
import GroupIcon from '@mui/icons-material/Group'
import StorefrontIcon from '@mui/icons-material/Storefront'
import PersonIcon from '@mui/icons-material/Person'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SettingsIcon from '@mui/icons-material/Settings'
>>>>>>> 6d7d02067691dbe16ea74834887a7993a9c75c77

const useSidebar = () => {
  const sidebarData = [
    {
      title: 'Home',
<<<<<<< HEAD
      icon: <BsHouseDoorFill />,
      link: '/',
    },
    {
      title: 'Groups',
      icon: <FaDog />,
      link: '/grou',
=======
      icon: <HomeIcon />,
    },
    {
      title: 'Groups',
      icon: <GroupIcon />,
>>>>>>> 6d7d02067691dbe16ea74834887a7993a9c75c77
    },
    {
      title: 'Marketplace',
      icon: <StorefrontIcon />,
<<<<<<< HEAD
      link: '/marketplace',
    },
    {
      title: 'Friends',
      icon: <FaCat />,
      link: '/friends',
=======
    },
    {
      title: 'Friends',
      icon: <PersonIcon />,
>>>>>>> 6d7d02067691dbe16ea74834887a7993a9c75c77
    },
    {
      title: 'Setting',
      icon: <SettingsIcon />,
<<<<<<< HEAD
      link: '/setting',
=======
>>>>>>> 6d7d02067691dbe16ea74834887a7993a9c75c77
    },
    {
      title: 'Profile',
      icon: <AccountCircleIcon />,
<<<<<<< HEAD
      link: '/profile',
=======
>>>>>>> 6d7d02067691dbe16ea74834887a7993a9c75c77
    },
  ]
  return { sidebarData }
}

export default useSidebar
