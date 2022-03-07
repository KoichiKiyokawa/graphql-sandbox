type Connection<T> = {
  edges?:
    | Array<{ node?: T | null | undefined } | null | undefined>
    | null
    | undefined
}

export function getNodes<T>(connection: Connection<T>) {
  return connection?.edges?.flatMap((edge) => edge?.node ?? []) ?? []
}
