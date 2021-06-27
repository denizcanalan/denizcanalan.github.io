const card = document.querySelector('.card');
const container = document.querySelector('.container');
//Items
const title = document.querySelector('.title');
const ben = document.querySelector('.ben img'); //Sneaker
const purchase = document.querySelector('.purchase button');
const bilg = document.querySelector('.bilg'); //Sizes
const description = document.querySelector('.info h3');


container.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth / 2 - e.pageX)/25;
    let yAxis = (window.innerWidth / 2 - e.pageY)/25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});
//Animate In
container.addEventListener("mouseenter", e =>{
    card.style.transition = 'none';
    //popout
    ben.style.transform = "translateZ(200px)"
    bilg.style.transform = "translateZ(100px)"
    title.style.transform = "translateZ(150px)"
    description.style.transform = "translateZ(125px)"
    purchase.style.transform = "translateZ(75px)"
    
    
    
});

//Animate Out
container.addEventListener("mouseleave", e =>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    title.style.transform = "translateZ(0px)"
    ben.style.transform = "translateZ(0px)"
    purchase.style.transform = "translateZ(0px)"
    bilg.style.transform = "translateZ(0px)"
    description.style.transform = "translateZ(0px)"
});