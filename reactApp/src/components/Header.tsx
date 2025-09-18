import React from 'react'
import styles from "./Header.module.css"

export default function Header() {
  return (
    <div className={styles.container}>
        <h1>Contact App</h1>
        <p>
            <a href='google.com'>Gooogle</a> || FullStack ts dev 
        </p>
    </div>
  )
}