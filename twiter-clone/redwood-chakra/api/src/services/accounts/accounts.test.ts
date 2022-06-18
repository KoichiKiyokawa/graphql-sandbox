import {
  accounts,
  account,
  createAccount,
  updateAccount,
  deleteAccount,
} from './accounts'
import type { StandardScenario } from './accounts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('accounts', () => {
  scenario('returns all accounts', async (scenario: StandardScenario) => {
    const result = await accounts()

    expect(result.length).toEqual(Object.keys(scenario.account).length)
  })

  scenario('returns a single account', async (scenario: StandardScenario) => {
    const result = await account({ id: scenario.account.one.id })

    expect(result).toEqual(scenario.account.one)
  })

  scenario('creates a account', async () => {
    const result = await createAccount({
      input: { username: 'String2109716', avatar: 'String', header: 'String' },
    })

    expect(result.username).toEqual('String2109716')
    expect(result.avatar).toEqual('String')
    expect(result.header).toEqual('String')
  })

  scenario('updates a account', async (scenario: StandardScenario) => {
    const original = await account({ id: scenario.account.one.id })
    const result = await updateAccount({
      id: original.id,
      input: { username: 'String10513402' },
    })

    expect(result.username).toEqual('String10513402')
  })

  scenario('deletes a account', async (scenario: StandardScenario) => {
    const original = await deleteAccount({ id: scenario.account.one.id })
    const result = await account({ id: original.id })

    expect(result).toEqual(null)
  })
})
