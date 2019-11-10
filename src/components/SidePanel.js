import React from 'react'
import WatchList from './WatchList'
import InfoPanel from './InfoPanel'

export default function SidePanel() {
  return (
    <div className="side-panel">
      <WatchList className="watchlist" />
      <InfoPanel className="infopanel" />
    </div>
  )
}
