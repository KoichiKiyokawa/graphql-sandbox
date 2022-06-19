import { render } from '@redwoodjs/testing/web'

import AuthForm from './AuthForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AuthForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthForm />)
    }).not.toThrow()
  })
})
