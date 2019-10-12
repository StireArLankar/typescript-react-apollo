import React from 'react'
import LaunchList from './components/LaunchList'
import LaunchProfile from './components/LaunchProfile'

import './App.css'

const App = () => {
  const [id, setId] = React.useState(42)

  return (
    <div className='App'>
      <LaunchList onIdChange={setId} />
      <LaunchProfile id={id} />
    </div>
  )
}

export default App
