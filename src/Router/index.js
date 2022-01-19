import { lazy } from 'react'
import Game from '../Pages/game';
// import SetTime from '../Pages/setTime'
import UserInfo from '../Pages/userInfo'
import HookPro from '../Pages/hookPro'
import StoreHome from '../Pages/storeHome';
import ReactRedux from '../Pages/reactRedux'
import BoyAndGirl from '../Pages/boyAndGirl'
import Kooks2 from '../Pages/hooks2'
import ContextCop from '../Pages/contextCop'
import RenderProps from '../Pages/renderProps'
const  SetTime = lazy(() => import('../Pages/setTime'))
const routes = [
  {
    path: '/',
    component: Game
  },
  {
    name: 'game',
    path: '/game',
    component: Game
  },
  {
    name: 'setTime',
    path: '/setTime',
    component: SetTime
  },
  {
    name: 'userInfo',
    path: '/userInfo',
    component: UserInfo
  },
  {
    name: 'userInfo',
    path: '/hookPro',
    component: HookPro
  },
  {
    name: 'StoreHome',
    path: '/storeHome',
    component: StoreHome
  },
  {
    name: 'ReactRedux',
    path: '/reactRedux',
    component: ReactRedux
  },
  {
    name: 'boyAndGirl',
    path: '/boyAndGirl',
    component: BoyAndGirl
  },
  {
    name: 'hooks2',
    path: '/hooks2',
    component: Kooks2
  },
  {
    name: 'Context',
    path: '/Context',
    component: ContextCop
  },
  {
    name: 'renderProps',
    path: '/renderProps',
    component: RenderProps
  }
  
]

export default routes
