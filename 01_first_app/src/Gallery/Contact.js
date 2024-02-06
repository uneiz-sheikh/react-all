import React, { useContext } from 'react'
import { AppInfo } from './Home';

export default function Contact() {
    const username = useContext(AppInfo);
  return (
    <div>Contact Page {username}</div>
  )
}
