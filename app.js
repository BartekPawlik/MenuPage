
const menu = [
    {
      id: 1,
      title: "Buttermik Pancakes",
      category: "breakfast",
      price: 15.99,
      img: " ./img/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle,
       hammock freegan copper mug whatever cold-pressed`,

    },
    {
        id: 2,
        title: "Diner Double",
        category: "lunch",
        price: 13.99,
        img: " ./img/item-2.jpeg",
        desc: `Ivaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang 
        helvetica man braid jianbing. Marfa thundercats`,
  
      },
      {
        id: 3,
        title: "Godzilla Milkshake",
        category: "shakes",
        price: 6.99,
        img: " ./img/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo
         booth before they sold out organic viral.`,
  
      },

      {
        id: 4,
        title: "Country Delight",
        category: "breakfast",
        price: 20.99,
        img: " ./img/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork 
        belly shoreditch. Prism austin mlkshk truffaut,`,
  
      },

      {
        id: 5,
        title: "Egg Attack",
        category: "lunch",
        price: 22.99,
        img: " ./img/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter 
        pinterest meditation farm-to-table 90's pop-up`,
  
      },

      {
        id: 6,
        title: "Oreo Dream",
        category: "shakes",
        price: 18.99,
        img: " ./img/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb,
        palo santo craft beer chia heirloom iPhone everyday`,
  
      },

      {
        id: 7,
        title: "Bacon Overflow",
        category: "breakfast",
        price: 18.99,
        img: " ./img/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin 
        coffee live-edge, pork belly cloud bread iceland put a bird`,
  
      },

      {
        id: 8,
        title: "American Classic",
        category: "dinner",
        price: 12.99,
        img: " ./img/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carr
        y squid palo santo leggings. Food truck truffaut`,
  
      },

      {
        id: 9,
        title: "Quarantine Buddy",
        category: "shakes",
        price: 16.99,
        img: " ./img/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, 
        edison bulb yuccie crucifix microdosing.`,
  
      },



      {
        id: 10,
        title: "Steak Dinner",
        category: "diner",
        price: 39.99,
        img: " ./img/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, 
        edison bulb yuccie crucifix microdosing.`,
  
      },


      


];

const sectionCenter = document.querySelector(".section-center")

window.addEventListener("DOMContentLoaded", function(){
    
let displayMenu = menu.map(function(item){
    
    return `<article class="item">
    <img src=${item.img} alt=${item.title}>
    <div class="item-info">
        <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
        </header>
        <p class="item-text">
        ${item.desc}
        </p>
    </div>
</article>`;
})
displayMenu = displayMenu.join("")
sectionCenter.innerHTML = displayMenu
})






const img = document.querySelector(".img")
