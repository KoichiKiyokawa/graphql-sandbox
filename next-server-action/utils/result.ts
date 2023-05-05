export type Result<T, E extends Error> =
  | { success: true; data: Awaited<T> }
  | { success: false; error: E }

export const createError = <E extends Error>(error: E): Result<never, E> => ({
  success: false,
  error,
})

export async function createResultFromPromise<E extends Error, T>(
  promise: Promise<T>
): Promise<Result<T, E>> {
  try {
    return { success: true, data: await promise }
  } catch (e) {
    console.error(e)
    return { success: false, error: e as E }
  }
}
