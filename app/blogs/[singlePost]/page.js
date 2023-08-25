import React from 'react'
import styles from '../../page.module.css';
import  Link  from 'next/link';

export default function singlePost() {
  return (
    <>
    <div className={styles.main}>
        <Link href="/blogs">Go back</Link>
      <h2>Single Post Page</h2>
    </div>
    </>
  )
}
