import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const addName =  React.lazy(() => import('./views/name/addName'))
const editName =  React.lazy(() => import('./views/name/editName'))
const singleName =  React.lazy(() => import('./views/name/singleName'))


const boysPage = React.lazy(() => import('./views/UniquePage/boys'))
const girlsPage = React.lazy(() => import('./views/UniquePage/girls'))
const unisexPage = React.lazy(() => import('./views/UniquePage/unisex'))
const alphabetPage = React.lazy(() => import('./views/UniquePage/alphabet'))

const addblog = React.lazy(() => import('./views/blog/addBlog'));
const viewBlogs = React.lazy(() => import('./views/blog/viewBlogs'));

const ads = React.lazy(() => import('./views/ads/adspage'))
const message = React.lazy(() => import('./views/message/message'))

const notice = React.lazy(() => import('./views/notice/addNotice'))
const viewNotice = React.lazy(() => import('./views/notice/viewNotice'))
const editNotice = React.lazy(() => import('./views/notice/editNotice'))




const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/names/addName', name: 'name / add name', element: addName },
  { path: '/names/editName/:id', name: 'name / edit name', element: editName },
  { path: '/names/singleName/:id', name: 'name / edit name', element: singleName },

  { path: '/names/boys', name: 'name / Boys', element: boysPage },
  { path: '/names/girls', name: 'name / Girls', element: girlsPage },
  { path: '/names/unisex', name: 'name / Unisex', element: unisexPage },

  { path: '/names/:alpha', name: 'name / Name with A', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with B', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with C', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with D', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with E', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with F', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with G', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with H', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with I', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with J', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with K', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with L', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with M', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with N', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with O', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with P', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with Q', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with R', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with S', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with T', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with U', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with V', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with W', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with X', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with Y', element: alphabetPage },
  { path: '/names/:alpha', name: 'name / Name with Z', element: alphabetPage },

  { path: '/blogs/addBlog', name: 'blog / Add blogs', element: addblog },
  { path: '/blogs/viewBlogs', name: 'blog / View blogs', element: viewBlogs },

  { path: '/ads', name: 'Ads', element: ads },
  { path: '/messages', name: 'Messages', element: message },

  { path: '/notice/addNotice', name: 'notice / Add Notice', element: notice },
  { path: '/notice/viewNotice', name: 'notice / View Notice', element: viewNotice },
  { path: '/notice/editNotice', name: 'notice / Edit Notice', element: editNotice },





]

export default routes
