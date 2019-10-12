import React from 'react'
import classes from './spinner.module.css'

const Spinner = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.spinner} />
      <div className={`${classes.spinner} ${classes.inner}`} />
    </div>
  )
}

export default Spinner
