const inputField = document.querySelector('.input')
const IP = document.querySelector('.d1 h1')
const Location = document.querySelector('.d2 h1')
const TimeZone = document.querySelector('.d3 h1')
const ISP = document.querySelector('.d4 h1')
const arrow = document.querySelector('.arrow')

let lat = 24.169582
let lng = 72.433548
IP.innerText = '103.85.88.236'
Location.innerText = 'Palanpur'
TimeZone.innerText = '+05:30'
ISP.innerText = 'North Point Services'

let data 
// -- event listener --//
inputField.addEventListener('input',(e)=>{
    data = inputField.value
})
arrow.addEventListener('click',(e)=>{
    updateMap(data)
    
})
  
  function updateMap(ipAddress){

    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_qUzr0TRWMbA9PQp84AjBLv3XVCzA5&ipAddress= ${ipAddress} `)
    .then((res)=> res.json())
    .then((value)=>{

    console.log(value);
    lat = value.location.lat
    lng = value.location.lng
    IP.innerText = value.ip
    Location.innerText = value.location.city
    TimeZone.innerText = value.location.timezone
    ISP.innerText = value.isp  

    // Update map with new coordinates
    map.flyTo([lat, lng], 13);
    marker.setLatLng([lat, lng]);
    circle.setLatLng([lat, lng]);
        inputField.value = ''
    }).catch(()=>{
        alert(' Error to fetch Data: check the Ip Address')
    })
  }
  

   //-- latitude and longitude --//
const map = L.map('map').setView([lat, lng], 13);

//-- map --//
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


    //--- Marker ---//
    const marker = L.marker([lat, lng]).addTo(map);

    //--- marker circle ---//
    const circle = L.circle([lat, lng], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(map);
    var popup = L.popup();

//--- pop up Info ---//
function onMapClick(e) {
popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}

map.on('click', onMapClick);

// const inputField = document.querySelector('.input');
// const IP = document.querySelector('.d1 h1');
// const Location = document.querySelector('.d2 h1');
// const TimeZone = document.querySelector('.d3 h1');
// const ISP = document.querySelector('.d4 h1');
// const arrow = document.querySelector('.arrow');

// let lat = 24.169582;
// let lng = 72.433548;

// arrow.addEventListener('click', () => {
//     const locationName = inputField.value.trim();
//     if (locationName) {
//         updateMap(locationName);
//     } else {
//         alert('Please enter a city or location name');
//     }
// });

// function updateMap(locationName) {
//     fetch(`https://geo.ipify.org/api/v2/ipify?apiKey=YOUR_API_KEY&address=${encodeURIComponent(locationName)}`)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);

//             // Update DOM elements
//             IP.innerText = data.ip;
//             Location.innerText = locationName; // Assuming you want to display the input location name
//             TimeZone.innerText = data.location.timezone;
//             ISP.innerText = data.isp;

//             // Update map with new coordinates
//             lat = data.location.lat;
//             lng = data.location.lng;
//             map.flyTo([lat, lng], 13);
//             marker.setLatLng([lat, lng]);
//             circle.setLatLng([lat, lng]);

//             inputField.value = ''; // Clear input field
//         })
//         .catch((error) => {
//             console.error('Error fetching data:', error);
//             alert('Error fetching data. Please check the city or location name.');
//         });
// }

// // Leaflet map initialization and setup
// const map = L.map('map').setView([lat, lng], 13);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// const marker = L.marker([lat, lng]).addTo(map);

// const circle = L.circle([lat, lng], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);

// function onMapClick(e) {
//     L.popup()
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);




