import { render } from '@redwoodjs/testing/web'

import AccountShowPage from './AccountShowPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AccountShowPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AccountShowPage />)
    }).not.toThrow()
  })
})
