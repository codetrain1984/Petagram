import HomePage from './Components/HomePage'
import Friends from './Pages/Friends/Friends'
import MarketPlace from './Pages/MarketPlace'
import Profile from './Pages/Profile/Profile'
import Setting from './Pages/Setting'
import EditProfile from './Pages/Profile/EditProfile'
import MainFriends from './Pages/Friends/MainFriends'
import Messages from './Pages/Messages/Messages'
import AddAccount from './Pages/Profile/AddAccount'
import Login from './Pages/Login'

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/profile',
    element: <Profile />,
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
  {
    path: '/messages',
    element: <Messages />,
  },
  {
    path: '/addAccount',
    element: <AddAccount />,
  },
]
export default routes
