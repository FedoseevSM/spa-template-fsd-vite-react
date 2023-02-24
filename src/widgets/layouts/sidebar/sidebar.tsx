import { Outlet } from "react-router-dom"
import { Footer } from "../../footer"
import { Header } from "../../header"
import { Sidebar } from "../../sidebar"

import "./styles.css"

export const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <Sidebar />
      <div className="body">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
