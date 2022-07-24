import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilReload,
  cilNotes,
  cilSpeedometer,
  cilBaby,
  cilPen,
  cilChart
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Names',
  },
  {
    component: CNavItem,
    name: 'Add new name',
    to: '/names/addName',
    icon: <CIcon icon={cilPen} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Boys',
    to: '/names/boys',
    icon: <CIcon icon={cilBaby} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Girls',
    to: '/names/girls',
    icon: <CIcon icon={cilBaby} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Unisex',
    to: '/names/unisex',
    icon: <CIcon icon={cilBaby} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Blogs',
  },
  {
    component: CNavItem,
    name: 'Add Blog',
    to: '/blogs/addBlog',
    icon: <CIcon icon={cilPen} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Edit blog',
    to: '/blogs/editBlogs',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Notice Board',
  },
  {
    component: CNavItem,
    name: 'Add new feed',
    to: '/notice/addNotice',
    icon: <CIcon icon={cilPen} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Edit Notice',
    to: '/notice/editNotice',
    icon: <CIcon icon={cilReload} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Ads',
    to: '/ads',
  },
]

export default _nav
