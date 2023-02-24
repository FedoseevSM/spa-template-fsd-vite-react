import { useNavigate } from "react-router-dom"

import "./styles.css"

interface NavProps {
  href?: string;
  children: string | JSX.Element;
  to?: string;
}

export const Nav = (props: NavProps) => {
  const navigate = useNavigate()
  const goNavigate = () => navigate(props.to ? props.to : "#")
  return (
    <div onClick={goNavigate} className="nav">
      <a href={props.href} target="_blank">
        {props.children}
      </a>
    </div>
  )
}
