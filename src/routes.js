import HomePage from './Components/HomePage'
import Friends from './Components/Pages/Friends'
import Groups from './Components/Pages/Groups'
import MarketPlace from './Components/Pages/MarketPlace'
import Profile from './Components/Pages/Profile/Profile'
import Setting from './Components/Pages/Setting'

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
    path: '/setting',
    element: <Setting />,
  },
]
export default routes
