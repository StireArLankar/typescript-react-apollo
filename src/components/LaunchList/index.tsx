import React from 'react'
import { useLaunchListQuery } from '../../generated/graphql'
import LaunchList from './LaunchList'

import classes from './LaunchList.module.css'
import Spinner from '../Spinner'

export interface LaunchListContainerProps {
  onIdChange: (newId: number) => void
}

const LaunchListContainer = (props: LaunchListContainerProps) => {
  const { data, error, loading } = useLaunchListQuery()

  if (loading) {
    return (
      <div className={classes.wrapper}>
        <Spinner />
      </div>
    )
  }

  if (error || !data) {
    return <div className={classes.wrapper}>ERROR</div>
  }

  return (
    <div className={classes.wrapper}>
      <LaunchList {...props} data={data} />
    </div>
  )
}

export default LaunchListContainer
