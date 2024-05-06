const cards = document.querySelectorAll('.card')
const front = document.querySelectorAll('.front')
const exit = document.querySelector('.exit')
const score = document.querySelector('.score')
const txtscore = document.querySelector('.textscore')
const restartgame = document.querySelector('.playagain')
let scores = 0


function clicksquare() {
    cards.forEach((card) => {
      const everysquare = [...Array(cards.length).keys()]
      const cardsrandom = Math.floor(Math.random() * cards.length)
  
      card.style.order = everysquare[cardsrandom]
    })
  }
  
