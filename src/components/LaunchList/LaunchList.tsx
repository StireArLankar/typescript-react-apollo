import React, { Fragment } from 'react'
import { LaunchListQuery } from '../../generated/graphql'
import classes from './LaunchList.module.css'

import { LaunchListContainerProps } from './index'

export interface LaunchListProps extends LaunchListContainerProps {
  data: LaunchListQuery
}

const LaunchList = (props: LaunchListProps) => {
  const { data, onIdChange } = props

  const renderItems = () =>
    data.launches!.map((launch, i) => (
      <li key={i} className={classes.item} onClick={() => onIdChange(launch!.flight_number!)}>
        {launch!.mission_name} ({launch!.launch_year})
      </li>
    ))

  return (
    <Fragment>
      <h3>Launches</h3>
      <ol className={classes.list}>{Boolean(data.launches) && renderItems()}</ol>
    </Fragment>
  )
}

export default LaunchList
