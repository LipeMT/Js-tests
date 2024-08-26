const { copiarValores, copiarValoresInverso, somarVetores, intercalarElementos } = require('../src/index.js')

describe('tests for index.js', () => {

  describe('function copiarValores', () => {

    test('it returns array A', () => {
      const result = copiarValores([1, 2, 3], [1])
      expect(result).toStrictEqual([1, 2, 3])
    })

    test('it returns copiedValues', () => {
      const result = copiarValores([1], [2, 3, 4, 5])
      expect(result).toStrictEqual([1, 3, 4, 5])
    })
  })

  describe('function copiaValoresInverso', () => {

    test('it returns inverse of array A', () => {
      const result = copiarValoresInverso([1, 2, 3], [1])
      expect(result).toStrictEqual([3, 2, 1])
    })

    test('it returns inverse copied values', () => {
      const result = copiarValoresInverso([1, 2], [3, 4, 5, 6, 7])
      expect(result).toStrictEqual([2, 1, 5, 6, 7])
    })
  })

  describe('function somarVetores', () => {

    test('it returns the sum between the array elements', () => {
      const result = somarVetores([1, 2], [3, 4, 5, 6, 7])
      expect(result).toStrictEqual([4, 6, 5, 6, 7])
    })

    test('it returns the sum between the array elements', () => {
      const result = somarVetores([3, 4, 5, 6, 7], [1, 2])
      expect(result).toStrictEqual([4, 6, 5, 6, 7])

    })
  })

  describe('function intercalarElementos', () => {

    test('it returns the interspersed between the array elements', () => {
      const result = intercalarElementos([1, 2, 3, 4, 5], [10, 20, 30, 40, 50])
      expect(result).toStrictEqual([1, 10, 2, 20, 3, 30, 4, 40, 5, 50])
    })

    test('it returns the interspersed between the array elements and the remainder of the largest array', () => {
      const result = intercalarElementos([1, 2], [10, 20, 30, 40, 50])
      expect(result).toStrictEqual([1, 10, 2, 20, 30, 40, 50])
    })
  })
})