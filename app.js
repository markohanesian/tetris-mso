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
    timerId = setInterval(moveDown, 400)

    // assign move functions left, right, rotate to keyCodes
    function control(e) {
        if(e.keyCode === 37) {
          moveLeft()
        } else if (e.keyCode === 38) {
          rotate()
        } else if (e.keyCode === 39) {
          moveRight()
        } else if (e.keyCode === 40) {
          moveDown()
        }
      }
    document.addEventListener('keyup', control)

    // move down function
    function moveDown() {
        undraw()
        currentPosition += width
        draw()
        freeze()
    }

    // freeze function
    function freeze() {
        if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))){
            current.forEach(index => squares[currentPosition + index].classList.add('taken'))
            // start a new tetromino falling
            random = Math.floor(Math.random() * theTetriminoes.length)
            current = theTetriminoes[random] [currentRotation]
            currentPosition = 4
            draw() 
        }
    }

    // move tetromino left unless is at the edge or there is blockage
    function moveLeft() {
        undraw()
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0 )

        if(!isAtLeftEdge) currentPosition -=1

        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition+=1
        }
    }

    // move tetromino right unless is at the edge or there is blockage
    function moveRight() {
        undraw()
        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1)

        if(!isAtRightEdge) currentPosition +=1

        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition -=1
        }

        draw()
    }

    // rotate the tetromino
    function rotate() {
        undraw()
        currentRotation ++
        if(currentRotation === current.length) {
            currentRotation = 0
        }
        current = theTetriminoes[random] [currentRotation]
        draw()
    }

    // show up next tetromino in mini-grid
    const displaySquares = document.querySelectorAll('.mini-grid div')
    const displayWidth = 4
    let displayIndex = 0

    // the Tetrominos without rotations for displaying to player
    const upNextTetrominoes = [
        [1, displayWidth+1, displayWidth*2+1, 2], //lTetromino
        [0, displayWidth, displayWidth+1, displayWidth*2+1], //zTetromino
        [1, displayWidth, displayWidth+1, displayWidth+2], //tTetromino
        [0, 1, displayWidth, displayWidth+1], //oTetromino
        [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] //iTetromino
      ]
})


