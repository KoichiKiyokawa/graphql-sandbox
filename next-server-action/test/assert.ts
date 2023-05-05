export function assertTrue(value: unknown): asserts value is true {
  expect(value).toBe(true)
}
