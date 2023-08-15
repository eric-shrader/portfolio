import './index.scss'

// sidebar
import Sidebar from './../Sidebar/index.js'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <div className="page">
        <div className="tags top-tags">&lt;body&gt;</div>

        <Outlet />

        <div className="tags bottom-tags">&lt;/body&gt;</div>
      </div>
    </div>
  )
}

export default Layout
