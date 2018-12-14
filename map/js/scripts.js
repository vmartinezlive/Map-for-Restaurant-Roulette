
//I think this goes to js - it's really unclear...
//Setting up the map
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoidm1hcnRpbmV6NzIiLCJhIjoiY2pwbmV6Y2ZxMDJkNDQzb3h5bXUyNm90dCJ9.ACWqxNdNHcHTI7j33_FACQ'
}).addTo(mymap);
