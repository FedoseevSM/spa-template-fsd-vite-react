import { Button } from "../../../../shared/ui/button"
import { Nav } from "../../../../shared/ui/nav"

export const Menu = () => {
  return (
    <div className="menu">
      <Button to="/">
        <Nav to="/">Home</Nav>
      </Button>
      <Button>
        <Nav to="/daily-wheel">Daily Wheel</Nav>
      </Button>
      <Button to="/">
        <Nav to="/activity">Activity</Nav>
      </Button>
      <Button to="/">
        <Nav to="/win-go">WinGo</Nav>
      </Button>
      <Button to="/">
        <Nav to="/faq">FAQ</Nav>
      </Button>
    </div>
  )
}
