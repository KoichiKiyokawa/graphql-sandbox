export function sortItemsByFieldAndKeys<T, F extends keyof T>(
  items: T[],
  fieldName: F,
  keys: readonly T[F][]
): T[] {
  const map = new Map<T[F], T>(items.map((item) => [item[fieldName], item]));
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  return keys.map((key) => map.get(key)!);
}
