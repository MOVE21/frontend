import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import img from "../../resources/images/location_pin.png" 
import "./mapComponent.css"

interface IMap{
    class?:string;
    onPointSelected: (id:String) => void,
    points: {
        id: string, 
        pos: {
            latitude: number,
            longitude: number,
        }
    }[],
}

mapboxgl.accessToken = 'pk.eyJ1IjoiZmlyZXNpZWh0IiwiYSI6ImNrdW9kemYzbTB4ZGkycHAxbXN2YnIzaGMifQ.G0fl-qVbecucfOvn8OtU4Q';

export const MapComponent:React.FC<IMap> = (props) =>{
    const mapContainer = useRef(null);
    const map = React.useRef<mapboxgl.Map>();
    let markers = new Array()


    props.points.forEach((point)=>{

        markers.push({
            'type': 'Feature',
            "id":point.id,
            'geometry': {
                'type': 'Point',
                'coordinates': [point.pos.latitude, point.pos.longitude]
            },
            'properties': {
                'title': 'name'
            }
        })
    })

    useEffect(() => {
        if (map.current) return null as any; 

        map.current  = new mapboxgl.Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [37.61, 55.7],
            zoom: 9
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
            map.current.on('load', () => {
                map.current?.loadImage(
                    img, 
                    (error , image: any) =>{
                        if (error) throw error;
                        map.current?.addImage('location-pin', image);

                        map.current?.addSource('markers', {
                            'type': 'geojson',
                            'data': {
                                'type': 'FeatureCollection',
                                'features': markers
                            }
                        });

                        map.current?.addLayer({
                            'id': 'points',
                            'type': 'symbol',
                            'source': 'markers',
                            'layout': {
                                'icon-image': 'location-pin',
                            }
                        });
            
                    }
                );
            }
        )
        map.current.on('click', 'points', (e:any) => {
            props.onPointSelected(e.features[0].id)
            console.log(e.features[0].id)
        });
        map.current.on('mouseenter', 'points', () => {
            map.current?.getCanvas().style.setProperty("cursor", "pointer")
        });
             
        map.current.on('mouseleave', 'points', () => {
            map.current?.getCanvas().style.setProperty("cursor", "")

        });
             
    });
    

  


    return(
        <div className="centered">
            <div className={props.class == undefined? "map":"map" + " " + props.class} ref={mapContainer}></div>
        </div>
    )
}