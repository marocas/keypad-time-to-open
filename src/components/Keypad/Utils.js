export const arrGenerator = (size) => {
  const [ rows, cols ] = size.split('x')

  let arr = []
  for (let i = 0; i < rows * cols;) {
    const uuid = Math.floor(Math.random() * (rows * cols) + 1)
    if (!arr.includes(uuid) && uuid > 0) {
      arr.push(uuid)
      ++i
    }
  }

  // arr = [ 9, 2, 3, 8, 5, 7, 6, 1, 4 ]
  // const code = [ 4, 2, 3, 6, 9, 2 ]

  const arr2D = []
  while (arr.length) {
    arr2D.push(arr.splice(0, cols))
  }

  return arr2D
}

export const neighbor = (x, y, grid = []) => {
  const arr = []

  if (grid.length > 0)
    for (let i = -1; i < 1; i++) {
      for (let j = -1; j < 1; j++) {
        const XX = x + i, YY = y + j
        if (XX > -1 && YY > -1) {
          var neighbor = grid[ XX ][ YY ]
          if (neighbor && neighbor !== grid[ x ][ y ]) {
            arr.push(neighbor)
          }
        }
      }
    }

  return arr
}
