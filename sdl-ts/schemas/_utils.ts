export const gql = String.raw

export const ConnectionDef = (name: string): string => gql`
  type ${name}Edge {
    node: ${name}!
    cursor: String!
  }
  type ${name}Connection {
    edges: [${name}Edge!]!
    pageInfo: PageInfo!
  }
`
