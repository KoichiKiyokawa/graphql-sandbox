type Connection<T> = {
  edges?:
    | Array<{ node?: T | null | undefined } | null | undefined>
    | null
    | undefined
}

const isNonNullable = <T>(
  value: T | null | undefined
): value is NonNullable<T> => value != null

export const getNodes = <T>(connection: Connection<T>): NonNullable<T>[] =>
  connection?.edges?.map((edge) => edge?.node).filter(isNonNullable) ?? []
