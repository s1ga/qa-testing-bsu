const Matrix = require("../app");

describe('Matrix: ', () => {
  let matrix
  beforeEach(() => {
    matrix = new Matrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])
  })

  it('should create Matrix class instance', () => {
    expect(matrix instanceof Matrix).toBeTruthy()
  })

  it('should return dimension of matrix', () => {
    expect(matrix.dimension).toEqual([3, 3])
  })

  it('should return sum of two matrices', () => {
    const otherMatrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    const result = [
      [2, 4, 6],
      [8, 10, 12],
      [14, 16, 18]
    ]

    expect(matrix.add(otherMatrix)).toEqual(result)
  })

  it('should return difference of two matrices', () => {
    const otherMatrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    const result = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]

    expect(matrix.subtract(otherMatrix)).toEqual(result)
  })

  it('should return product of two matrices', () => {
    const otherMatrix = [
      [1, 2],
      [3, 4],
      [5, 6]
    ]
    const result = [
      [22, 28],
      [49, 64],
      [76, 100]
    ]

    expect(matrix.multiply(otherMatrix)).toEqual(result)
  })

  it('should throw an error if adding two matrices with different dimensions', () => {
    const otherMatrix = [
      [1, 2],
      [4, 5],
      [7, 8]
    ]

    expect(() => matrix.add(otherMatrix)).toThrow('Matrices should have valid dimensions')
  })

  it('should throw an error if subtract two matrices with different dimensions', () => {
    const otherMatrix = [
      [1, 2],
      [4, 5],
      [7, 8]
    ]

    expect(() => matrix.subtract(otherMatrix)).toThrow('Matrices should have valid dimensions')
  })

  it('should throw an error if multiplying two matrices with invalid dimensions', () => {
    const otherMatrix = [
      [1, 2],
      [4, 5]
    ]

    expect(() => matrix.multiply(otherMatrix)).toThrow('Matrices should have valid dimensions')
  })

  it('should throw an error if matrix rows has different length', () => {
    const newMatrix = [
      [1, 2],
      [1, 2, 3]
    ]

    expect(() => new Matrix(newMatrix)).toThrow('Matrix should contain elements or rows should have the same length')
  })

  it('should throw an error if matrix doesnt contain any element', () => {
    const newMatrix = [
      [], []
    ]

    expect(() => new Matrix(newMatrix)).toThrow('Matrix should contain elements or rows should have the same length')
  })

  it('should throw an error if matrix contains not a number element', () => {
    const newMatrix = [
      [1, 2], [1, 'a']
    ]

    expect(() => new Matrix(newMatrix)).toThrow('Value of matrix should be number')
  })
})
