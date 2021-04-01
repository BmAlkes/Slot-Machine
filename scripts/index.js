// valor disponível para aposta
let availableToBet = 500;
// itens para aposta
const items = [
  {
    id: 1,
    reward: 1000,
    name: "Batman",
    src: "./assets/img/batman.png",
  },
  {
    id: 2,
    reward: 120,
    name: "SpiderMan",
    src: "./assets/img/spiderman.png",
  },
  {
    id: 3,
    reward: -40,
    name: "Deadpool",
    src: "./assets/img/deadpool.png",
  },
  {
    id: 4,
    reward: -5000,
    name: "Bomb",
    src: "./assets/img/bomb.png",
  },
];

const balance = document.querySelector("#balance");
const spinner = document.querySelector(".spin-button");
const title = document.querySelector(".title");
const fotos = document.querySelectorAll(".slots img");

const randomPictures = items.map((item) => {
  return item;
});

function girarSlot(num) {
  const randomNumber = Math.floor(Math.random() * randomPictures.length);
  setTimeout(() => {
    fotos[num].src = randomPictures[randomNumber].src;
    fotos[num].alt = randomPictures[randomNumber].name;
  }, 1000);
  return randomPictures[randomNumber];
}
function girarSlot1(num) {
  const randomNumber = Math.floor(Math.random() * randomPictures.length);
  setTimeout(() => {
    fotos[num].src = randomPictures[randomNumber].src;
    fotos[num].alt = randomPictures[randomNumber].name;
  }, 1500);
  return randomPictures[randomNumber];
}
function girarSlot2(num) {
  const randomNumber = Math.floor(Math.random() * randomPictures.length);
  setTimeout(() => {
    fotos[num].src = randomPictures[randomNumber].src;
    fotos[num].alt = randomPictures[randomNumber].name;
  }, 2000);
  return randomPictures[randomNumber];
}
function spin() {
   balance.innerHTML = availableToBet;
  spinner.addEventListener("click", () => {
    fotos.forEach((item) => {
      item.src = `./assets/img/shuffling.gif`;
    });
    const spin0 = girarSlot(0);
    const spin1 = girarSlot1(1);
    const spin2 = girarSlot2(2);
    
    let moneyScreen = checarSpin(spin0, spin1, spin2);
       balance.innerHTML= availableToBet += moneyScreen
       if(availableToBet <= 0){
        spinner.disabled = true;
       }
    setTimeout(() =>{
        title.innerHTML ="Playing..."
    }, 500)
    setTimeout(() =>{
      title.innerHTML ="HERO MACHINE"
  }, 1900)
  });
}

function checarSpin(slot1, slot2, slot3) {
  if (
    slot1.name === "Batman" &&
    slot2.name === "Batman" &&
    slot3.name === "Batman"
  ) {
    let value = items[0].reward
    return value 
  } else if (
    slot1.name === "SpiderMan" &&
    slot2.name === "SpiderMan" &&
    slot3.name === "SpiderMan"
  ) {
    let value = items[1].reward
    return value 
  } else if (
    slot1.name === "Deadpool" &&
    slot2.name === "Deadpool" &&
    slot3.name === "Deadpool"
  ) {
    let value = items[2].reward
    return value 
  } else if (
    slot1.name === "Bomb" &&
    slot2.name === "Bomb" &&
    slot3.name === "Bomb"
  ) {
    let value = items[3].reward
    return value 
  }else{
    let value = -10 
    return value 
  }
  
}
spin();
