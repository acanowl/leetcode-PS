import { isValid } from './index'

// describe('isValid', () => {
//   test("isValid 1", () => {
//     expect(isValid("([]){}")).toBe(true)
//   })
//   test("isValid 2 ", () => {
//     expect(isValid("}")).toBe(false)
//   })
//   test("isValid 3", () => {
//     expect(isValid(")(){}")).toBe(false)
//   })
// })

test("isValid", () => {
  expect(isValid("([]){}")).toBe(true)
  expect(isValid("}")).toBe(false)
  expect(isValid(")(){}")).toBe(false)
})