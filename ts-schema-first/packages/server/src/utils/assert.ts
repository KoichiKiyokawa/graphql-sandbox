type MayBePromise<T> = T | Promise<T>

export const assertNotNull = async <T>(
  value: MayBePromise<T | null | undefined>
): Promise<T> => {
  const resolved = await value
  if (resolved == null) throw Error("Expected value to be not null")

  return resolved
}
