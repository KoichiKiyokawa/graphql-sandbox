import { FragmentType, graphql, useFragment } from "@/gql"

export const CurrentUserFragment = graphql(/* GraphQL */ `
  fragment CurrentUser on User {
    id
    name
  }
`)

export default function CurrentUser({
  data,
}: {
  data: FragmentType<typeof CurrentUserFragment>
}) {
  const currentUser = useFragment(CurrentUserFragment, data)

  return (
    <ul>
      <li>{currentUser.id}</li>
      <li>{currentUser.name}</li>
    </ul>
  )
}
