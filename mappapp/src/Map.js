import React, { Component } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// const center = [-33.87880901103003, 151.20603254341876];
  
class MapApp extends Component {

    // center = [-33.87880901103003, 151.20603254341876];

    render() {
        return (
            <MapContainer 
                center={[-33.87880901103003, 151.20603254341876]} 
                zoom={10} 
                style={{width: '100vw', height: '100vh'}}>
            <TileLayer 
                url="https://api.maptiler.com/maps/topo-v2/256/{z}/{x}/{y}.png?key=NylqWfM0CVoaz9pFVfG0"
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'/>
            </MapContainer>
        );
    }
}

export default MapApp;