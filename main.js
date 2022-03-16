const hotels = {
    Nacional:{
        name: 'Nacional',
        location: 'Madrid', 
        img :'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/62/62/35/exterior.jpg?w=700&h=300&s=1', 
    }, 
    Liabeny:{
        name: 'Liabeny',
        location: 'Madrid', 
        img :'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/ad/f6/4d/junior-suite.jpg?w=700&h=300&s=1', 
    }, 
    Atocha:{
        name: 'Atocha',
        location: 'Madrid', 
        img :'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/25/3e/37/sleep-n-atocha.jpg?w=700&h=300&s=1', 
    }, 
    Regina:{
        name: 'regina',
        location: 'Madrid', 
        img :'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/ba/09/60/hotel-regina.jpg?w=700&h=300&s=1', 
    }, 
}



const quality = {
    una: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>", 
    tres: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>", 
    cuatro: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>", 
    cinco: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>", 
}


const nameHotel = prompt("Escoga un hotel entre los siguientes: Nacional, Liabeny, Atocha o Regina");
const rating = prompt("Seleccione las siguientes puntuación: una, dos, tres, cuatro o cinco(escriba en texto no en numeros)");
const reseña = confirm("¿Quiere que la reseña se ha anonima?");

document.getElementById("hotel-name").innerHTML = "Hotel " + hotels[nameHotel].name;
document.getElementById("hotel-location").innerHTML = "Ubicado en " + hotels[nameHotel].location;
document.getElementById("rating").innerHTML = "Puntuación  " + quality[rating];
document.getElementById("reseña").checked = reseña;
document.getElementById("hotel-img").src = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/50/d0/d1/hotel-riu-plaza-espana.jpg?w=700&h=300&s=1';


