import cn from "classnames";

import "./styles.css"

interface ButtonProps {
    href?: string;
    children: string | JSX.Element;
    to?: string;
    variant?: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <div className={cn("btn", props.variant)}>
      {props.children}
    </div>
  )
}
