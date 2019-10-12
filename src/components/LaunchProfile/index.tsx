import React, { useEffect } from 'react'
import { useLaunchProfileQuery } from '../../generated/graphql'
import LaunchProfile from './LaunchProfile'
import classes from './LaunchProfile.module.css'
import Spinner from '../Spinner'

export interface LaunchProfileContainerProps {
  id: number
}

const LaunchProfileContainer = (props: LaunchProfileContainerProps) => {
  const { id } = props

  const { data, error, loading, refetch } = useLaunchProfileQuery({
    variables: { id: String(id) },
  })

  useEffect(() => {
    refetch()
  }, [id, refetch])

  if (loading) {
    return (
      <div className={classes.wrapper}>
        <Spinner />
      </div>
    )
  }

  if (error) {
    return <div className={classes.wrapper}>ERROR</div>
  }

  if (!data) {
    return <div className={classes.wrapper}>Select a flight from the panel</div>
  }

  return (
    <div className={classes.wrapper}>
      <LaunchProfile data={data} />
    </div>
  )
}

export default LaunchProfileContainer
