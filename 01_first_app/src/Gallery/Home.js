import React, { createContext } from 'react'
import About from './About'
import Service from './Service'
import Contact from './Contact'
// const appname = "Shopping Website";
export const AppInfo = createContext();
export default function Home() {
  return (
    <AppInfo.Provider value={"Shopping Webiste"}>
        Home Page
        <About></About>
        <Service></Service>
        <Contact></Contact>
    </AppInfo.Provider>
  )
}
