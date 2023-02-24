import { Route, Routes } from "react-router-dom"

import { LeftSidebar } from "../widgets/layouts/sidebar"

import { HomePage } from "./home"
import { FaqPage } from "./faq"
import { WinGoPage } from "./win-go"
import { DailyWheelPage } from "./daily-wheel"
import { ActivityPage } from "./activity"
import { Error404Page } from "./404"

export const Routing = () => {
  return (
      <Routes>
        <Route path="/" element={<LeftSidebar />}>
          <Route index element={<HomePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/win-go" element={<WinGoPage />} />
          <Route path="/daily-wheel" element={<DailyWheelPage />} />
          <Route path="/activity" element={<ActivityPage />} />
        </Route>
        <Route path="*" element={<Error404Page />} />
      </Routes>
  )
}
