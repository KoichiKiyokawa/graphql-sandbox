import { render } from '@redwoodjs/testing/web'

import TimelinePage from './TimelinePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TimelinePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TimelinePage />)
    }).not.toThrow()
  })
})
