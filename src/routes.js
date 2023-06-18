import HomePage from './Components/HomePage'
import Friends from './Components/Pages/Friends/Friends'
import Groups from './Components/Pages/Groups'
import MarketPlace from './Components/Pages/MarketPlace'
import Profile from './Components/Pages/Profile/Profile'
import Setting from './Components/Pages/Setting'
import EditProfile from './Components/Pages/Profile/EditProfile'
import MainFriends from './Components/Pages/Friends/MainFriends'

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/groups',
    element: <Groups />,
  },
  {
    path: '/marketplace',
    element: <MarketPlace />,
  },
  {
    path: '/friends',
    element: <Friends />,
  },
  {
    path: '/friends/:friendName',
    element: <MainFriends />,
  },
  {
    path: '/setting',
    element: <Setting />,
  },
  {
    path: '/edit',
    element: <EditProfile />,
  },
]
export default routes
