import React from 'react'
import styles from '../page.module.css';
import Nav from '../nav';

function index() {
  return (
    <>
    <Nav />
    <div className={styles.main}>
      <h2>Our Blogs</h2>
    </div>
    </>
  )
}

export default index