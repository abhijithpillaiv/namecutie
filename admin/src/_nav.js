import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilReload,
  cilNotes,
  cilSpeedometer,
  cilBaby,
  cilPen,
  cilCursor,
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
    component: CNavGroup,
    name: 'Alphabet',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'A',
        to: '/names/A',
      },
      {
        component: CNavItem,
        name: 'B',
        to: '/names/B',
      },
      {
        component: CNavItem,
        name: 'C',
        to: '/names/C',
      },
      {
        component: CNavItem,
        name: 'D',
        to: '/names/D',
      },     {
        component: CNavItem,
        name: 'E',
        to: '/names/E',
      },     {
        component: CNavItem,
        name: 'F',
        to: '/names/F',
      },     {
        component: CNavItem,
        name: 'G',
        to: '/names/G',
      },     {
        component: CNavItem,
        name: 'H',
        to: '/names/H',
      },     {
        component: CNavItem,
        name: 'I',
        to: '/names/I',
      },     {
        component: CNavItem,
        name: 'J',
        to: '/names/J',
      },     {
        component: CNavItem,
        name: 'K',
        to: '/names/K',
      },     {
        component: CNavItem,
        name: 'L',
        to: '/names/L',
      },     {
        component: CNavItem,
        name: 'M',
        to: '/names/M',
      },     {
        component: CNavItem,
        name: 'N',
        to: '/names/N',
      },     {
        component: CNavItem,
        name: 'O',
        to: '/names/O',
      },     {
        component: CNavItem,
        name: 'P',
        to: '/names/P',
      },     {
        component: CNavItem,
        name: 'Q',
        to: '/names/Q',
      },     {
        component: CNavItem,
        name: 'R',
        to: '/names/R',
      },     {
        component: CNavItem,
        name: 'S',
        to: '/names/S',
      },     {
        component: CNavItem,
        name: 'T',
        to: '/names/T',
      },     {
        component: CNavItem,
        name: 'U',
        to: '/names/U',
      },     {
        component: CNavItem,
        name: 'V',
        to: '/names/V',
      },     {
        component: CNavItem,
        name: 'W',
        to: '/names/W',
      },     {
        component: CNavItem,
        name: 'X',
        to: '/names/X',
      },     {
        component: CNavItem,
        name: 'Y',
        to: '/names/Y',
      },     {
        component: CNavItem,
        name: 'Z',
        to: '/names/Z',
      },
    ],
  },
  // {
  //   component: CNavTitle,
  //   name: 'Blogs',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Add Blog',
  //   to: '/blogs/addBlog',
  //   icon: <CIcon icon={cilPen} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'View blog',
  //   to: '/blogs/viewBlogs',
  //   icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
  // },
  {
    component: CNavTitle,
    name: 'Notice Board',
  },
  {
    component: CNavItem,
    name: 'Add new notice',
    to: '/notice/addNotice',
    icon: <CIcon icon={cilPen} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'View Notice',
    to: '/notice/viewNotice',
    icon: <CIcon icon={cilReload} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Ads',
    to: '/ads',
  },
  {
    component: CNavItem,
    name: 'Messages',
    to: '/messages',
  },
]

export default _nav
