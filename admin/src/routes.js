import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const addName =  React.lazy(() => import('./views/name/addName'))
const editName =  React.lazy(() => import('./views/name/editName'))

const boysPage = React.lazy(() => import('./views/UniquePage/boys'))
const girlsPage = React.lazy(() => import('./views/UniquePage/girls'))
const unisexPage = React.lazy(() => import('./views/UniquePage/unisex'))
const alphabetPage = React.lazy(() => import('./views/UniquePage/alphabet'))

const addblog = React.lazy(() => import('./views/blog/addBlog'));
const editblog = React.lazy(() => import('./views/blog/editBlog'));

const ads = React.lazy(() => import('./views/ads/adspage'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/names/addName', name: 'name / add name', element: addName },
  { path: '/names/editName', name: 'name / edit name', element: editName },
  { path: '/names/boys', name: 'name / Boys', element: boysPage },
  { path: '/names/girls', name: 'name / Girls', element: girlsPage },
  { path: '/names/unisex', name: 'name / Unisex', element: unisexPage },
  { path: '/blogs/addBlog', name: 'name / Add blogs', element: addblog },
  { path: '/blogs/editBlogs', name: 'blog / Edit blogs', element: editblog },
  { path: '/ads', name: 'Ads', element: ads },

]

export default routes
