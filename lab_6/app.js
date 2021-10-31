class Matrix {
  constructor(matrix) {
    this.validateMatrix(matrix)
    this.matrix = matrix
  }

  add(matrix) {
    matrix = new Matrix(matrix)
    const isValidDimensions = this.validateDimensions(matrix, 'sum')
    if (!isValidDimensions) {
      throw new Error('Matrices should have valid dimensions')
    }

    const resultMatrix = []

    this.matrix.forEach((row, i) => {
      const rowResult = []
      row.forEach((value, j) => {
        rowResult.push(value + matrix.matrix[i][j])
      })
      resultMatrix.push(rowResult)
    })

    return resultMatrix
  }

  subtract(matrix) {
    matrix = new Matrix(matrix)
    const isValidDimensions = this.validateDimensions(matrix, 'sum')
    if (!isValidDimensions) {
      throw new Error('Matrices should have valid dimensions')
    }

    const resultMatrix = []

    this.matrix.forEach((row, i) => {
      const rowResult = []
      row.forEach((value, j) => {
        rowResult.push(value - matrix.matrix[i][j])
      })
      resultMatrix.push(rowResult)
    })

    return resultMatrix
  }

  multiply(matrix) {
    matrix = new Matrix(matrix)
    const isValidDimensions = this.validateDimensions(matrix, 'multiply')
    if (!isValidDimensions) {
      throw new Error('Matrices should have valid dimensions')
    }

    const resultMatrix = []

    matrix.matrix.forEach((row, i) => {
      const rowResult = []
      row.forEach((_, j) => {
        rowResult.push(this.matrix[i].reduce((sum, value, k) => sum + value * matrix.matrix[k][j], 0))
      })
      resultMatrix.push(rowResult)
    })

    return resultMatrix
  }

  get dimension() {
    return [this.matrix.length, this.matrix[0].length]
  }

  validateMatrix(matrix) {
    const isValidDimensions = matrix.length !== 0 && matrix.every(row => matrix[0].length > 0 && row.length === matrix[0].length)

    if (!isValidDimensions) {
      throw new Error('Matrix should contain elements or rows should have the same length')
    }

    matrix.forEach(row => {
      row.forEach(val => {
        if (isNaN(val)) {
          throw new Error('Value of matrix should be number')
        }
      })
    })
  }

  validateDimensions(otherMatrix, operation) {
    const firstDimension = this.dimension
    const secondDimension = otherMatrix.dimension

    switch (operation) {
      case 'sum':
        return firstDimension[0] === secondDimension[0] && firstDimension[1] === secondDimension[1]
      case 'multiply':
        return firstDimension[1] === secondDimension[0]
      default:
        throw new Error('No such operation')
    }
  }
}

module.exports = Matrix
