import API_KEY from '../consts'
import { Component } from 'react'
import ReactMapGL from 'react-map-gl'
import style from '../styles/Map.module.css'

class Map extends Component {
  state = {
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: 48.8778,
      longitude: 2.386,
      zoom: 13,
    },
  }

  render() {
    return (
      <div className={style.map}>
        <ReactMapGL
          mapStyle='mapbox://styles/mapbox/streets-v9'
          mapboxApiAccessToken={API_KEY}
          onViewportChange={(viewport) => this.setState({ viewport })}
          {...this.state.viewport}
        />
      </div>
    )
  }
}

export default Map
