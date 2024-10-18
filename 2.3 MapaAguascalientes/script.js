// Inicializar el mapa centrado en Aguascalientes  
var map = L.map('map').setView([21.88234, -102.28259], 13); // Coordenadas de Aguascalientes  

// Añadir capa de OpenStreetMap  
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {  
    maxZoom: 19,  
    attribution: '© OpenStreetMap'  
}).addTo(map);

// Añadir un marcador en Aguascalientes capital  
var marker = L.marker([21.88234, -102.28259]).addTo(map);  

// Añadir un pop-up al marcador  
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.").openPopup();

// Marcador en la Plaza de la Patria  
var plazaPatria = L.marker([21.88187, -102.29495]).addTo(map);  
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");  

// Marcador en el Museo Nacional de la Muerte  
var museoMuerte = L.marker([21.88417, -102.28878]).addTo(map);  
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");

// Dibujar un círculo en el recinto de la Feria Nacional de San Marcos  
var feriaSanMarcos = L.circle([21.87888, -102.29727], {  
    color: 'green',  
    fillColor: '#0f3',  
    fillOpacity: 0.5,  
    radius: 300  
}).addTo(map);  
feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes.");

// Polígono para el Centro Histórico
var centroHistorico = L.polygon([  
    [21.8821, -102.2935],  
    [21.8829, -102.2865],  
    [21.8797, -102.2860],  
    [21.8792, -102.2920]  
]).addTo(map);  
centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");

// Controles de capas
var baseMaps = {  
    "Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')  
};  

var overlayMaps = {  
    "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte]),  
    "Feria de San Marcos": feriaSanMarcos,  
    "Centro Histórico": centroHistorico  
};  

L.control.layers(baseMaps, overlayMaps).addTo(map);

// Icono para la Plaza de la Patria
var iconoPlazaPatria = L.icon({
    iconUrl: 'img/plazapatria.jpg', // Ruta a la imagen del icono de la Plaza de la Patria (ajusta según la ubicación de la carpeta img)
    iconSize: [38, 38],
    iconAnchor: [22, 38],
    popupAnchor: [-3, -76]
});

// Icono para el Museo Nacional de la Muerte
var iconoMuseoMuerte = L.icon({
    iconUrl: 'img/museomuerte.jpg', // Ruta a la imagen del icono del Museo Nacional de la Muerte
    iconSize: [38, 38],
    iconAnchor: [22, 38],
    popupAnchor: [-3, -76]
});

// Icono para Aguascalientes capital
var iconoAguascalientes = L.icon({
    iconUrl: 'img/agscapital.jpg', // Ruta a la imagen del icono de Aguascalientes capital
    iconSize: [38, 38],
    iconAnchor: [22, 38],
    popupAnchor: [-3, -76]
});

// Marcador en la Plaza de la Patria con su icono personalizado
var plazaPatria = L.marker([21.88187, -102.29495], { icon: iconoPlazaPatria }).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");

// Marcador en el Museo Nacional de la Muerte con su icono personalizado
var museoMuerte = L.marker([21.88417, -102.28878], { icon: iconoMuseoMuerte }).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");

// Marcador en Aguascalientes capital con su icono personalizado
var marker = L.marker([21.88234, -102.28259], { icon: iconoAguascalientes }).addTo(map);
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.");
