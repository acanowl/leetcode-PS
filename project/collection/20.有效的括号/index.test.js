import { isValid } from './index'

test("isValid", () => {
  expect(isValid("([]){}")).toBe(true)
  expect(isValid("}")).toBe(false)
  expect(isValid(")(){}")).toBe(false)
  expect(isValid("({)}")).toBe(false)
})