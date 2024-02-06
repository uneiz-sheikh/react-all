import React, { useContext } from 'react'
import { AppInfo } from './Home'

export default function About() {
    const appname = useContext(AppInfo)
  return (
    <div>About Page {appname}</div>
  )
}
