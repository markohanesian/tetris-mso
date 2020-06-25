// all javascript must be written wrapped in this event listener
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const ScoreDisplay = document.querySelector('#score');
    const StartBtn = document.querySelector('#start-button');
    const width = 10

    // The Tetriminoes
    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
      ]
    
      const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]
      ]
    
      const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
      ]
    
      const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
      ]
    
      const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
      ]

      const theTetriminoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

      let currentPosition = 4
      let currentRotation = 0

    //   random Tetromino shape and rotation selection
      let random = Math.floor(Math.random()*theTetriminoes.length)
      console.log(random)
      let current = theTetriminoes[random] [0]

      console.log(theTetriminoes)

    //   draw the first rotation in the first tetromino
      function draw() {
          current.forEach(index => {
              squares[currentPosition + index].classList.add('tetromino')
          })
      }

      

    //   undraw the Tetromino
      function undraw() {
          current.forEach(index => {
              squares[currentPosition + index].classList.remove('tetromino')
          })
      }

    //   make the tetromino move down every second
    timerId = setInterval(moveDown, 1000)

    // move down function
    function moveDown() {
        undraw()
        currentPosition += width
        draw()
    }
})


