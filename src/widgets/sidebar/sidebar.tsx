import { Divider } from "../../shared/ui/divider"
import { SubMenu } from "./ui/submenu"
import { MainLogo } from "../../shared/ui/logo"
import { Menu } from "./ui/menu"

import "./styles.css"
import { Button } from "../../shared/ui/button"
import { Nav } from "../../shared/ui/nav"

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <MainLogo />
        <Menu />
        <Divider />
        <SubMenu />
      </div>
      <div className="sidebar-bottom">
        <Button variant="empty-btn">
          <Nav href="http://t.me/qwerty">Telegram Bot</Nav>
        </Button>
        <Button>
          <Nav href="http://t.me/qwerty">Telegram Group</Nav>
        </Button>
      </div>
    </div>
  )
}
