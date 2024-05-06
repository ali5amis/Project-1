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

function clicktoshow() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => {
      front[i].classList.add('flip')
      const frontid = parseInt(front[i].getAttribute('id'))
      if (frontid >= 3 && frontid <= 12) {
        scores++
        score.textContent = scores
      } else if (frontid <= 2) {
        scores = 0
        txtscore.textContent = 'You are loser'
      }
    })
  }
}
const flipAll = () => {
  front.forEach((c) => {
    c.classList.add('flip')
  })
}
