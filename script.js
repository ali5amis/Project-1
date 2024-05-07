const cards = document.querySelectorAll('.card')
const front = document.querySelectorAll('.front')
const exit = document.querySelector('.exit')
const score = document.querySelector('.score')
const txtscore = document.querySelector('.textscore')
const restartgame = document.querySelector('.playagain')
const modal = document.getElementById('myModal')
const btntips = document.getElementById('tips')
var span = document.getElementsByClassName('close')[0]
const dm = document.querySelector('.darkmode')
let scores = 0
let dmwhite = 1

//to random cards
function clicksquare() {
  cards.forEach((card) => {
    const everysquare = [...Array(cards.length).keys()]
    const cardsrandom = Math.floor(Math.random() * cards.length)

    card.style.order = everysquare[cardsrandom]
  })
}

function clicktoshow() {
  // to select all card
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => {
      front[i].classList.add('flip')
      const frontid = parseInt(front[i].getAttribute('id'))
      //if collect fruit will + 1 score
      if (frontid >= 3 && frontid <= 12) {
        scores++
        score.textContent = scores
        //if collect fruit
        if (scores >= 5) {
          txtscore.style.background = 'green'
          txtscore.textContent = 'You are Won, You can next Level 2'
          flipAll()
        }
        //if collect bomb
      } else if (frontid <= 2) {
        scores = 0
        txtscore.style.background = 'red'
        txtscore.textContent = 'You are loser'
        flipAll()
      }
    })
  }
}
//to flip all front
const flipAll = () => {
  front.forEach((c) => {
    c.classList.add('flip')
  })
}

function quitgame() {
  window.close()
}

function playagain() {
  location.reload()
}

btntips.onclick = function () {
  modal.style.display = 'block'
}
span.onclick = function () {
  modal.style.display = 'none'
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

const dmblack = () => {
  if (dmwhite === 1) {
    document.body.style.backgroundColor = 'Black'
    dmwhite--
  } else {
    document.body.style.backgroundColor = 'rgb(51, 89, 122)'
    dmwhite++
  }
}

dm.addEventListener('click', () => {
  dmblack()
})
exit.addEventListener('click', quitgame)
restartgame.addEventListener('click', playagain)

clicksquare()
clicktoshow()
