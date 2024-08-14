import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Optional: Fix icon issue for Leaflet
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';

const Map = () => {
  const position = [28.7041, 77.1025]; // Latitude and Longitude for the center of the map

  return (
    <div style={{ height: '80vh', width: '80vw' }}>
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          
          <Popup>
            
           <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8" role="alert">
                <div className="flex items-center gap-4">
                    <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
                       <svg
                           className="h-4 w-4"
                           fill="currentColor"
                           viewbox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg"
                       >
                     <path
                     clipRule="evenodd"
                      d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                      fillRule="evenodd"
                     />
                    </svg>
                    </span>

                    <p className="font-medium sm:text-lg">New Delhi</p>
                 </div>

                <p className="mt-4 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci
                  blanditiis voluptates eum. Nam, cum minima?
                </p>

                 <div className="mt-6 sm:flex sm:gap-4 ">
                <a
                  className="inline-block w-full  rounded-lg  bg-blue-500 px-5 py-3 text-center text-sm font-semibold sm:w-auto"
                  href="#"
                 >
                  <span className='text-white'>Take a Look</span>
                </a>

                <a
                  className="mt-2 inline-block w-full rounded-lg bg-gray-50 px-5 py-3 text-center text-sm font-semibold text-gray-500 sm:mt-0 sm:w-auto"
                  href="#"
                 >
                 Mark as Read
                 </a>
               </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
