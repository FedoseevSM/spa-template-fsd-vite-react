import { BrowserRouter } from "react-router-dom"
import React from "react"

import { Routing } from "src/pages"

import "./styles.css"

export const App = () => {
  return (
    <React.StrictMode>
      <React.Suspense>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </React.Suspense>
    </React.StrictMode>
  )
}
