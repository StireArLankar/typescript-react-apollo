import React, { Fragment } from 'react'
import { LaunchProfileQuery } from '../../generated/graphql'
import classes from './LaunchProfile.module.css'

export interface LaunchProfileProps {
  data: LaunchProfileQuery
}

const LaunchProfile = (props: LaunchProfileProps) => {
  const { launch } = props.data

  if (!launch) {
    return <div>No launch available</div>
  }

  const renderStatus = () =>
    launch.launch_success ? (
      <span className={classes.success}>Success</span>
    ) : (
      <span className={classes.failed}>Failed</span>
    )

  const renderImages = () => (
    <div className={classes.list}>
      {launch!.links!.flickr_images!.map((image) =>
        image ? <img src={image} className={classes.image} key={image} alt='launch' /> : null
      )}
    </div>
  )

  return (
    <Fragment>
      <div className={classes.status}>
        <span>Flight {launch.flight_number}: </span>
        {renderStatus()}
      </div>
      <h1 className={classes.title}>
        {launch.mission_name}
        {launch.rocket && ` (${launch.rocket.rocket_name} | ${launch.rocket.rocket_type})`}
      </h1>
      <p className={classes.description}>{launch.details}</p>
      {Boolean(launch.links) && Boolean(launch.links!.flickr_images) && renderImages()}
    </Fragment>
  )
}

export default LaunchProfile
