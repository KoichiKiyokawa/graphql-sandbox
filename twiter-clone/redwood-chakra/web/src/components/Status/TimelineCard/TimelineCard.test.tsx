import { render } from '@redwoodjs/testing/web'

import { standard } from '../TimelineCell/TimelineCell.mock'

import TimelineCard from './TimelineCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TimelineCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TimelineCard data={standard()[0]} />)
    }).not.toThrow()
  })
})
