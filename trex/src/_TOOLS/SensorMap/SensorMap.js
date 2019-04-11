import React, { Component } from 'react';
import './SensorMap.css';

class SensorMap extends Component {
    
    componentDidMount(){

        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 60, lng:24 },
            zoom: 15,
            disableDefaultUI: true,
            draggable: false,
        });
        
        const marker = new  window.google.maps.Marker({
            position:  { lat: 60, lng:24 },
            map: map,
            title: 'BusID: 1612'
          });

        window.myMap = map;
        window.myMarker = marker;
    }

    render(){
        return (
            <div id="map"> </div>
        );
    }
}

export default SensorMap;