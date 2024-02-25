import React from 'react';
import { MapContainer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import './Map.css';
import data from './data.json';

let pinIcon = L.icon({
    iconUrl: icon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

function GetMap() {
    const map = useMap();
    map.setView([-33.87880901103003, 151.20603254341876], 13);
    L.tileLayer('https://api.maptiler.com/maps/topo-v2/256/{z}/{x}/{y}.png?key=NylqWfM0CVoaz9pFVfG0', {
        attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }).addTo(map);

    for (let i = 0; i < data.length; i++) {
        L.marker([data[i].latitude, data[i].longitude], {
            icon: pinIcon
        }).addTo(map);
    }

    return null;
}

export function Map() {
    return (
        <div>
            <MapContainer id="map">
                <GetMap />
            </MapContainer>
        </div>
    );
}

//     <MapContainer 
//         center={[-33.87880901103003, 151.20603254341876]} 
//         zoom={13} 
//         style={{width: '100vw', height: '100vh'}}>
//     <TileLayer 
//         url="https://api.maptiler.com/maps/topo-v2/256/{z}/{x}/{y}.png?key=NylqWfM0CVoaz9pFVfG0"
//         attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'/>
//     <Marker position={[-33.87880901103003, 151.20603254341876]} icon={pinIcon} />
//     </MapContainer>