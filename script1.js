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
      if (frontid >= 5) {
        scores++
        score.textContent = scores
        if (scores >= 8) {
          txtscore.textContent = 'You are Won this game ^^'
          flipAll()
        }
      } else {
        scores = 0
        txtscore.textContent = 'You are loser'
        flipAll()
      }
    })
  }
}

function flipAll() {
  front.forEach((c) => {
    console.log(`c = ${c}`)
    c.classList.add('flip')
  })
}

function quitgame() {
  window.close()
}

function playagain() {
  location.reload()
}

exit.addEventListener('click', quitgame)
restartgame.addEventListener('click', playagain)

clicksquare()
clicktoshow()
