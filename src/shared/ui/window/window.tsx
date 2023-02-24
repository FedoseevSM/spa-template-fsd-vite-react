import { ReactElement } from "react"

import "./styles.css"

export const Window = (children: ReactElement) => {
  return (
    <div className="window">
      {children}
    </div>
  )
}
