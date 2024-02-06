import React, { useContext } from 'react'
import { AppInfo } from './Home';

export default function Service() {
    const appname = useContext(AppInfo);
  return (
    <div>Service Page {appname}</div>
  )
}
