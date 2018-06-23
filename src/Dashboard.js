import React from 'react'
import ReactMapboxGl, { ZoomControl,GeoJSONLayer} from 'react-mapbox-gl';

import data from './data'

import LayerSwitcher from './LayerSwitcher'


const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZXJpY2tvdGVueW8iLCJhIjoiY2owYXlsb2kxMDAwcjJxcDk3a2Q0MmdpZSJ9.GJQzHfNMElZ7OhW_HbnaXw',
});



class Dashboard extends React.Component{
	render(){
		return (<Map
          containerStyle={{
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
          // eslint-disable-next-line
          style="mapbox://styles/mapbox/streets-v8"
          center={[37.8369140625, 0.5163504323777589]}
          zoom={[6]}
          onStyleLoad={this.onStyleLoad}
        >
          <LayerSwitcher/>

          <ZoomControl
            style={{
              boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.1)',
              borderRadius: 4,
            }}
            position="bottom-right"
/>
</Map>)
	}
}

export default Dashboard