const nameHotel = prompt("Introduzca nombre del nombre del hotel");
const locationHotel = prompt("Introduzca localidad del hotel");
const rating = prompt("Puntación del 1 al 5");
const reseña = confirm("¿Quiere que la reseña se ha anonima?");

document.getElementById("hotel-name").innerHTML = "Hotel " + nameHotel;
document.getElementById("hotel-location").innerHTML = "Ubicado en " + locationHotel;
document.getElementById("rating").innerHTML = "Puntuación  " + rating;
document.getElementById("reseña").checked = reseña;
document.getElementById("hotel-img").src = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/50/d0/d1/hotel-riu-plaza-espana.jpg?w=700&h=300&s=1';

